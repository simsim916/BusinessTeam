import './ItemDetailBox.css';

import { useRef, useState, useEffect, useMemo } from 'react';
import { makeComa, makeDiscountPrice } from '../../../components/MathFunction';
import Loading from './../../../components/Loading';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, setUserCartStorage } from '../../../redux/userCart/action';
import { SERVER_RESOURCE } from '../../../../model/server-config';

const ItemDetailBox = ({ item }) => {
    const dispatch = useDispatch();
    const statusbar = useRef(null)
    const userinfo = useSelector(state => state.user.data)
    const [inputCountValue, setInputCountValue] = useState(1);
    const [introItem, setIntroItem] = useState(false)
    const [gotoCart, setGotoCart] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentDate = new Date();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토', '일'];
    const date = currentDate.getDate();
    const hour = currentDate.getHours();
    const dayOfWeek = currentDate.getDay();

    let inputCountRef = useRef(null)
    let priceRef = useRef(null)

    const changeMainImg = (event) => {
        let ele = event.target.closest('div');
        ele.style.opacity = 1;
        ele.parentNode.previousElementSibling.children[0].src = ele.children[0].src;
        for (let i = 0; i < ele.parentNode.childElementCount; i++) {
            if (ele.parentNode.children[i] != ele) {
                ele.parentNode.children[i].style.opacity = '0.5';
            }
        }
        window.scrollTo(0, 235);
    }

    const clickInputCount = (type) => {
        let value = inputCountRef.current.value

        if ("-" === type) {
            if (value > 0) {
                value--;
                setInputCountValue(value);
            }
        }
        else {
            value++
            setInputCountValue(value);
        }
    }

    const showItemDetail = () => {
        setIntroItem(!introItem)
    }

    const changeInputCount = (event) => {
        setInputCountValue(event.target.value);
    }


    useEffect(() => {
        statusbar.current.style.transform = 'translateX(-100%)'
        setTimeout(() => {
            setGotoCart(false);
        }, 5000)
    }, [gotoCart])
    const addCart = () => {
        setLoading(true);
        setGotoCart(!gotoCart);

        if (userinfo && userinfo.login) {
            const formData = {
                code: item.code,
                amount: inputCountValue,
                id: userinfo.id
            };
            const ar = [];
            ar.push(formData);
            dispatch(getUserCart('/usercart/merge', 'post', ar, userinfo.token))

        } else {
            let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
            const itemIndex = cartArray.findIndex(cartItem => cartItem.code == item.code);
            if (itemIndex !== -1) {
                cartArray[itemIndex].amount += +inputCountValue;
            } else {
                cartArray.push({ code: item.code, amount: +inputCountValue });
            }
            dispatch(setUserCartStorage(cartArray));
        }
        setLoading(false);
    };


    return (
        <div id="itemDetailBox" className="container">
            <div id="imgBox">
                <div id="imgBoxImg">
                    <img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 사진`} />
                </div>
                <div id="imgBoxImgList">
                    <div onClick={changeMainImg}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 조리`} /></div>
                    <div onClick={changeMainImg}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} /></div>
                    <div onClick={changeMainImg}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} /></div>
                    <div onClick={changeMainImg}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} /></div>
                </div>
            </div>

            <div id="itemDetail">
                <div id="itemDetailTitle">
                    <div id="itemDelivery">{item.event}</div>
                    <div id="itemName">{item.name}</div>
                    <div id="itemAccount">소고기 찹스테이크 신선하고 맛있어요</div>
                    {
                        item.discount ?
                            <>
                                <span id="itemSale">{item.discount}<span>%</span></span>
                                <div id="itemPrice">{makeComa(item.price)}원</div>
                                <div id="itemSalePrice">{makeComa(makeDiscountPrice(item.price, item.discount))}원</div>
                            </>
                            :
                            <div id="itemSalePrice">{makeComa(item.price)}원</div>
                    }
                </div>
                <div>배송</div>
                <div>{item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'}<br />
                    {
                        hour < 15 ?
                            `(15시 전 주문 시 내일 "${date + 1}일 (${weekdays[dayOfWeek + 1]})" 도착 예정)`
                            : `(23시 전 주문 시 내일 모레 "${date + 2}일 (${weekdays[dayOfWeek + 2]})" 도착 예정)`
                    }
                </div>
                <div>제조사</div>
                <div>{item.brand}</div>
                <div>저장방식</div>
                <div>{item.storage}</div>
                <div>판매단위</div>
                <div>{item.packing}</div>
                <div>중량/용량</div>
                <div>{item.weight}g</div>
                <div>유통기한</div>
                <div>수령일 포함 180일 이상 남은 제품을 보내드립니다.</div>
                <div id="itemSelect">
                    <div>수량 선택</div>
                    <div id="countBox">
                        <button onClick={() => clickInputCount("-")}><i className="fa-solid fa-minus"></i></button>
                        <input onChange={changeInputCount} id="inputCount" type="number" value={inputCountValue} ref={inputCountRef} />
                        <button onClick={() => clickInputCount("+")}><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div id="priceBox">
                        <div id="priceAmount">총 상품금액&nbsp; : &nbsp;<span ref={priceRef}>{makeComa(makeDiscountPrice(item.price, item.discount) * inputCountValue)}원</span></div>
                        <div onClick={gotoCart ? null : addCart} id="gotocart">장바구니 담기</div>
                        <Link to="/home/buy" id="gotobuy">구매하기</Link>
                    </div>
                </div>
                {
                    loading ?
                        <Loading />
                        :
                        gotoCart ?
                            <div id='goCartContainer'>
                                <p id="itemName">{item.name}</p>
                                <p>장바구니에 상품을 담았습니다.</p>
                                <p>장바구니로 이동하시겠습니까?</p>
                                <Link to="/home/cart" id="cartOK">이동</Link>
                                <a onClick={() => setGotoCart(!gotoCart)} id="cartNO">닫기</a>
                                <div id='status' ref={statusbar}></div>
                                <div id='triangle_bottom'></div>
                            </div>
                            :
                            null
                }
            </div>

            <ul id="detailClick" className="container">
                <li id="detailButton"><a onClick={() => setIntroItem(true)} href="#introItem1">상품설명</a></li>
                <li><a onClick={() => setIntroItem(true)} href="#introItem2">상세정보</a></li>
                <li><a href="#reviewBoardBox">상품후기</a></li>
                <li><a href="#askBoardBox">상품문의</a></li>
            </ul>
            <div id="introItem" className="container" style={{ height: introItem ? 'auto' : '500px' }}>
                <div id="introItem1" className="subTitle">
                    <hr />
                    <h4>상품 조리 사진
                        <img src={SERVER_RESOURCE + `/img/logo3.png`} alt="제품 조리 사진" />
                    </h4>
                    <hr />
                </div>
                <img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} />
                <div id="introItem2" className="subTitle">
                    <hr />
                    <h4>상품 구성
                        <img src={SERVER_RESOURCE + `/img/logo4.png`} alt="상품 구성" />
                    </h4>
                    <hr />
                </div>
                <img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} />
                <div className="subTitle">
                    <hr />
                    <h4>상품 표시사항
                        <img src={SERVER_RESOURCE + `/img/logo2.png`} alt="제품 조리 사진" />
                    </h4>
                    <hr />
                </div>
                <img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} />
            </div>
            {
                introItem ?
                    <div onClick={showItemDetail} id="introItemBtn">
                        상품정보 접기<i class="fa-solid fa-chevron-up"></i>
                    </div>
                    :
                    <div onClick={showItemDetail} id="introItemBtn">
                        상품정보 더보기<i className="fa-solid fa-chevron-down"></i>
                    </div>
            }
        </div>
    );
}

export default ItemDetailBox;


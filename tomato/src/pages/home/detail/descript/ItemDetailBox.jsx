import './ItemDetailBox.css';

import { useRef, useState } from 'react';
import { makeComa, makeDiscountPrice } from '../../../components/MathFunction';

const ItemDetailBox = ({ item }) => {
    const [inputCountValue, setInputCountValue] = useState(1);
    const [introItem, setIntroItem] = useState(false)
    const [cartItem, setCartItem] = useState(true);

    const currentDate = new Date();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
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

    const sumTotal = (value) => {
        const priceValue = priceRef.current.innerText.replace('원', '');
        priceRef.current.innerText = `${value * priceValue} 원`;
    }

    const showItemDetail = () => {
        setIntroItem(!introItem)
    }

    const changeInputCount = (event) => {
        setInputCountValue(event.target.value);
        console.log(inputCountValue)
    }

    const addCart = () => {
        


    }

    return (
        <div id="itemDetailBox" className="container">
            <div id="imgBox">
                <div id="imgBoxImg">
                    <img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 사진`} />
                </div>
                <div id="imgBoxImgList">
                    <div onClick={changeMainImg}><img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 조리`} /></div>
                    <div onClick={changeMainImg}><img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} /></div>
                    <div onClick={changeMainImg}><img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} /></div>
                    <div onClick={changeMainImg}><img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} /></div>
                </div>
            </div>

            <div id="itemDetail">
                <div id="itemDetailTitle">
                    <div id="itemDelivery">{item.event}</div>
                    <div id="itemName">{item.name}</div>
                    <div id="itemAccount">소고기 찹스테이크 신선하고 맛있어요</div>
                    <span id="itemSale">{item.discount}<span>%</span></span>
                    <div id="itemPrice">{makeComa(item.price)}원</div>
                    <div id="itemSalePrice">{makeComa(makeDiscountPrice(item.price, item.discount))}원</div>
                </div>
                <div>배송</div>
                <div>{makeComa(item.delivery)}원<br />
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
                        {/* onclick이 맞나? 장바구니 컴포넌트를 넣는게 맞나? */}
                        <a onClick={() => addCart("장바구니 담기")} href="" id="gotocart">장바구니 담기</a>
                        <a href="" id="gotobuy">구매하기</a>
                    </div>
                </div>
            </div>

            <ul id="detailClick" className="container">
                <li id="detailButton"><a onClick={showItemDetail} href="#introItem1">상품설명</a></li>
                <li><a href="#introItem2">상세정보</a></li>
                <li><a href="#reviewBoardBox">상품후기</a></li>
                <li><a href="#askBoardBox">상품문의</a></li>
            </ul>
            <div id="introItem" className="container" style={{ height: introItem ? 'auto' : '500px' }}>
                <div id="introItem1" className="subTitle">
                    <hr />
                    <h4>상품 조리 사진
                        <img src={"http://localhost:8090/resources" + `/img/logo3.png`} alt="제품 조리 사진" />
                    </h4>
                    <hr />
                </div>
                <img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} />
                <div id="introItem2" className="subTitle">
                    <hr />
                    <h4>상품 구성
                        <img src={"http://localhost:8090/resources" + `/img/logo4.png`} alt="상품 구성" />
                    </h4>
                    <hr />
                </div>
                <img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} />
                <div className="subTitle">
                    <hr />
                    <h4>상품 표시사항
                        <img src={"http://localhost:8090/resources" + `/img/logo2.png`} alt="제품 조리 사진" />
                    </h4>
                    <hr />
                </div>
                <img src={"http://localhost:8090/resources" + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} />
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


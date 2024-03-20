import './ItemDetailBox.css';

import { useRef, useState } from 'react';

const ItemDetailBox = ({ item }) => {
    
    
    let inputCountRef = useRef(null)
    let priceRef = useRef(null)

    function changeMainImg(event) {
        let ele = event.target.closest('div');
        ele.style.opacity = 1;
        ele.parentNode.previousElementSibling.children[0].src = ele.children[0].src;
        for (let i = 0; i < ele.parentNode.childElementCount; i++) {
            if (ele.parentNode.children[i] != ele) {
                ele.parentNode.children[i].style.opacity = '0.5';
            }
        }
    }

    function count(type) {
        let value = inputCountRef.current.value
        if ("-" === type) {
            if (value > 0)
                value--;
        }
        else
            value++;

        inputCountRef.current.value = value;
        sumTotal(value);
    }

    function sumTotal(value) {
        const priceValue = priceRef.current.innerText.replace('원', '');
        const priceBox = priceRef.current.closest('.div');
        priceRef.current.innerText = `${value * priceValue} 원`;
    }

    function inputCount() {

    }

    const [showItem, setShowItem] = useState(false);
    function showItemDetail() {
        setShowItem(true);


    }

    return (
        <div id="itemDetailBox" className="container">
            <div id="imgBox">
                <div id="imgBoxImg">
                    <img src={ process.env.PUBLIC_URL + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 사진`} />
                </div>
                <div id="imgBoxImgList">
                    <div onClick={changeMainImg}><img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_1.jpg`} alt={`${item.name} 조리`} /></div>
                    <div onClick={changeMainImg}><img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} /></div>
                    <div onClick={changeMainImg}><img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} /></div>
                    <div onClick={changeMainImg}><img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} /></div>
                </div>
            </div>

            <div id="itemDetail">
                <div id="itemDetailTitle">
                    <div id="itemDelivery">{item.event}</div>
                    <div id="itemName">{item.name}</div>
                    <div id="itemAccount">소고기 찹스테이크 신선하고 맛있어요</div>
                    <span id="itemSale">10<span>%</span></span>
                    <div id="itemPrice">{makeComa(item.price)}원</div>
                    <div id="itemSalePrice">{makeComa(item.price)}원</div>
                </div>
                <div>배송</div>
                <div>{item.delivery}원<br />(23시 전 주문 시 내일 아침 7시 전 도착)</div>
                <div>제조사</div>
                <div>{item.brand}</div>
                <div>포장타입</div>
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
                        <button onClick={() => count("-")}><i className="fa-solid fa-minus"></i></button>
                        <input onKeyDown={inputCount} id="inputCount" type="text" value="1" ref={inputCountRef} />
                        <button onClick={() => count("+")}><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div id="priceBox">
                        <div id="price">총 상품금액&nbsp; : &nbsp;<span ref={priceRef}>30000원</span></div>
                        <a href="" id="cart">장바구니 담기</a>
                        <a href="" id="buy">구매하기</a>
                    </div>
                </div>
            </div>

            <ul id="detailClick" className="container">
                <li id="detailButton"><a onClick={showItemDetail} href="#introItem1">상품설명</a></li>
                <li><a href="#introItem2">상세정보</a></li>
                <li><a href="#reviewBoardBox">상품후기</a></li>
                <li><a href="#askBoardBox">상품문의</a></li>
            </ul>
            {showItem &&
                <div id="introItem" className="container">
                    <div id="introItem1" className="subTitle">
                        <hr />
                        <h4>상품 조리 사진
                            <img src={process.env.PUBLIC_URL + `/img/logo3.png`} alt="제품 조리 사진" />
                        </h4>
                        <hr />
                    </div>
                    <img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_2.jpg`} alt={`${item.name} 제품`} />
                    <div id="introItem2" className="subTitle">
                        <hr />
                        <h4>상품 구성
                            <img src={process.env.PUBLIC_URL + `/img/logo4.png`} alt="상품 구성" />
                        </h4>
                        <hr />
                    </div>
                    <img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_3.jpg`} alt={`${item.name} 구성품`} />
                    <div className="subTitle">
                        <hr />
                        <h4>상품 표시사항
                            <img src={process.env.PUBLIC_URL + `/img/logo2.png" alt="제품 조리 사진`} />
                        </h4>
                        <hr />
                    </div>
                    <img src={process.env.PUBLIC_URL + `/img/itemImg/${item.code}_4.jpg`} alt={`${item.name} 상세표기`} />
                </div>
            }   
            <div onClick={showItemDetail} id="introItemBtn">
                상품정보 더보기<i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    );
}

export default ItemDetailBox;

function makeComa(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
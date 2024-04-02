import './ShopBasketPayBox.css';
import { useEffect, useState } from 'react';
import { makeComa } from '../components/MathFunction';

const ShopBasketPayBox = ({ buyItem}) => {

    // 이렇게 변수로 지정해두니 렌더링이 일어나지 않아
    // 그렇다면 이 4개의 항목을 모두 상태값으로 지정해야 한다?

    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>
                            {makeComa(buyItem.reduce((result, e) => +result + (e.price * e.amount), 0))}원
                        </div>
                    </div>
                    <div>상품할인금액
                        <div>
                            -{makeComa(buyItem.reduce((result, e) => +result + ((e.price * ((e.discount) / 100)) * e.amount), 0))}원
                        </div>
                    </div>
                    <div>배송비
                        <div>
                            {makeComa(buyItem.reduce((result, e) => +result + (e.delivery), 0))} 원
                        </div>
                    </div>
                    <div>결제예정금액
                        <div>
                            {makeComa(buyItem.reduce((result, e) => +result + ((e.price * ((100 - e.discount) / 100)) * e.amount), 0))} 원
                        </div>
                    </div>
                </div>
                <div id="loginBox">주문하기</div>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>






    );
}

export default ShopBasketPayBox;
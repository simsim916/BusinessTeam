import { makeComa } from '../../../components/MathFunction';
import { useEffect } from 'react';
import './Buy_total.css';
import { api } from '../../../../model/model';
import { useSelector } from 'react-redux';

const Buy_total = () => {

    /* Redux */
    const userBuyItemList = useSelector(state => state.userBuy.data.itemList);
    const userBuy = useSelector(state => state.userBuy.data);
    const user = useSelector(state => state.user.data);

    const postOrder = () => {
        if (user) {
            api('/order/order', 'post', userBuy, user.token)
            sessionStorage.removeItem('buy')
        } else {
            api('/order/order', 'post', userBuy, null)
            localStorage.removeItem('cart');
        }
    }

    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.price * e.amount), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>할인금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.discount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((100 - e.discount) / 100)) * e.amount) + e.delivery, 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                </div>
                <div id="loginBox" onClick={postOrder}>주문하기</div>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>

    );
}

export default Buy_total;
import { makeComa } from '../../../components/MathFunction';
import { useEffect } from 'react';
import './Buy_total.css';
import { api } from '../../../../model/model';

const Buy_total = ({ checkedList }) => {

    useEffect(() => {
    }, [])

    const postOrder = () => {
        let user = sessionStorage.getItem('userinfo');
        let token = JSON.parse(user).token;
        api('/order/order', 'post', checkedList, token
        ).then(res => {
            sessionStorage.removeItem('finalOrder')
            sessionStorage.removeItem('buyList')
            sessionStorage.removeItem('buy');
        }
        ).catch(err => err.message);
        
        console.log(checkedList);
        // api(`/usercart/delete`, 'get', checkedList, token);
    }

    return (
        <div id="shopBasketPayContainer">
            <div id="shopBasketPayBox">
                <div id="shopBasketPrice">
                    <div>상품금액
                        <div>
                            {
                                checkedList ?
                                    makeComa(checkedList.reduce((result, e) => +result + (e.price * e.amount), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>할인금액
                        <div>
                            {
                                checkedList ?
                                    makeComa(Math.ceil(checkedList.reduce((result, e) => +result + ((e.price * ((e.discount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div>
                            {
                                checkedList ?
                                    makeComa(checkedList.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div>
                            {
                                checkedList ?
                                    makeComa(Math.ceil(checkedList.reduce((result, e) => +result + ((e.price * ((100 - e.discount) / 100)) * e.amount) + e.delivery, 0)))
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
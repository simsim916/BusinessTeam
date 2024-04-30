import { makeComa } from '../../../components/MathFunction';
import { useEffect, useRef } from 'react';
import './Buy_total.css';
import { api } from '../../../../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { postUserBuy, setUserBuyForm } from '../../../redux/userBuy/actions';
import { useNavigate } from 'react-router-dom';
import { setUserCart, setUserCartStorage } from '../../../redux/userCart/action';
import { changeAlert } from './../../../redux/basic/actions';

const Buy_total = () => {

    /* Redux */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userBuyItemList = useSelector(state => state.userBuy.form.itemList);
    const userBuy = useSelector(state => state.userBuy.form);
    const userCart = useSelector(state => state.userCart.data);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const orderprice = useRef(null);
    const deliveryprice = useRef(null);
    const deleteUserCart = () => {
        const result = []
        userBuyItemList.map(e => {
            result.push(e.code)
        })
        return result;
    }

    const postOrder = () => {
        if (!userBuy.itemList || userBuy.itemList.length <= 0)
            dispatch(changeAlert({
                title: '구매할 아이템 선택',
                content: `구매할 아이템을 선택해주세요`,
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    position: 'absolute'
                }
            }))
        else if (userBuy.deliverymessage.length <= 0)
            dispatch(changeAlert({
                title: '배송지 오류',
                content: `배송지 선택 후 배송메세지를 선택해주세요`,
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    position: 'absolute'
                }
            }))
        else {
            dispatch(setUserCartStorage(userCart.filter(e => !deleteUserCart().includes(e.code))))
            dispatch(postUserBuy({
                ...userBuy,
                orderprice: Math.ceil(userBuyItemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.itemEventDiscount) / 100)), 0) * e.amount) + e.delivery, 0)),
                deliveryprice: userBuyItemList.reduce((result, e) => +result + (e.delivery), 0),
                discount: Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.itemEventDiscount) / 100)) * e.amount), 0))
            }, user && user.token));
            navigate('/home/buy/end');
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
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + ((e.price * ((e.itemEventDiscount) / 100)) * e.amount), 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>배송비
                        <div ref={deliveryprice}>
                            {
                                userBuyItemList ?
                                    makeComa(userBuyItemList.reduce((result, e) => +result + (e.delivery), 0))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                    <div>결제금액
                        <div ref={orderprice}>
                            {
                                userBuyItemList ?
                                    makeComa(Math.ceil(userBuyItemList.reduce((result, e) => +result + (Math.round((e.price * ((100 - e.itemEventDiscount) / 100)), 0) * e.amount) + e.delivery, 0)))
                                    :
                                    0
                            } 원
                        </div>
                    </div>
                </div>
                <div id="loginBox" onClick={postOrder}
                    style={{
                        backgroundColor: userBuy.itemList && userBuy.itemList.length > 0 && userBuy.deliverymessage.length > 0 ? '#9b1b20' : '#e0e0e0',
                        color: userBuy.itemList && userBuy.itemList.length > 0 && userBuy.deliverymessage.length > 0 ? '#fff' : 'black'
                    }}>주문하기</div>
                <div id="shopBasketCancel">
                    <div>* [주문완료] 상태일 경우에만 주문 취소 가능합니다.</div>
                    <div>* [마이페이지] - [주문내역 상세페이지]에서 직접 취소 가능합니다.</div>
                </div>
            </div>
        </div>

    );
}

export default Buy_total;
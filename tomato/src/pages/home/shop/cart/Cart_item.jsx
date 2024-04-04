
import { useEffect, useState } from 'react';
import './Cart_item.css';
import Cart_item_Row from './Cart_item_Row';
import { useDispatch } from 'react-redux';
import { setUserCart } from '../../../redux/userCart/action';
import { setBuyItemList } from '../../../redux/buyItem/actions';
import { getUserCart } from '../../../redux/userCart/action';

const Cart_item = ({ buyItem, userCart, handleRefresh }) => {

    const dispatch = useDispatch();


    const changeItemList = (key, type, item) => {
        const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        let ar = [...userCart];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            if (ar[key].amount > 0)
                ar[key].amount--;
        } else {
            ar[key].amount = type
        }
        if (userinfo != null)
            dispatch(getUserCart('/usercart/merge', 'post', ar, userinfo.token))
        else {
            dispatch(setUserCart(ar));
            let result = [];
            for (let e of ar) {
                result.push({
                    code: e.code,
                    amount: e.amount
                })
            }
            localStorage.setItem('cart', JSON.stringify(result));
        }

    }

    const handleAllCheckBox = () => {
        let arr = [];
        const all = document.getElementsByName('buy');
        if (userCart.length != buyItem.length) {
            for (let item of userCart) { arr.push(item); }
            dispatch(setBuyItemList(arr));
            for (let c of all) c.checked = true;
        } else {
            dispatch(setBuyItemList(arr));
            for (let c of all) c.checked = false;
        }
    }

    return (
        <div id='shopBasketSelectBox'>
            <ul id="shopBasketSelect">
                <li>
                    <input {...buyItem.length === userCart.length && { checked: true }} type="checkbox" value='' onChange={handleAllCheckBox} />
                    전체선택
                </li>
            </ul>
            <div id="shopBasketItemBox">
                <ul id="shopBasketItemBoxTitle">
                    <li>선택</li>
                    <li>상품사진</li>
                    <li>상품정보</li>
                    <li>수량</li>
                    <li>총 상품금액</li>
                    <li>배송비</li>
                </ul>
                {userCart && userCart.map((e, i) => <Cart_item_Row handleRefresh={handleRefresh} buyItem={buyItem} item={e} key={i} idx={i} changeItemList={changeItemList} />)}
            </div>

        </div>
    );

}
export default Cart_item;
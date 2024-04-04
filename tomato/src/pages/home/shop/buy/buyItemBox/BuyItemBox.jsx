
import { useEffect, useState } from 'react';
import './BuyItemBox.css';
import BuyItemBoxRow from './BuyItemBoxRow';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserCart } from '../../../../redux/userCart/action';
import { setUserCart } from './../../../../redux/userCart/action';

const BuyItemBox = ({
    checkedList, // 구매페이지 내에서 체크된 아이템
    setCheckedList, // 체크된 아이템 변경
    handleCheck, // checkedList 아이템 선택/해제
    buyList, // 장바구니에서 클릭된 아이템만 구매페이지로
}) => {

    const dispatch = useDispatch();

    const handleAllCheck = () => {
        let check = document.getElementsByName('buy');
        let ar = [];
        if (checkedList.length == buyList.length) {
            for (let a of check) {
                a.checked = false;
            }
            setCheckedList(ar);
        } else {
            for (let a of check) {
                a.checked = true;
            }
            ar = [...buyList];
            setCheckedList(ar);
        }
    }

    /* 아이템 수량 (DB 및 LocalStorage 수량 변경) */
    const changeItemList = (key, type, item) => {
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        let ar = [...checkedList];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            if (ar[key].amount > 0)
                ar[key].amount--;
        } else {
            ar[key].amount = type
        }
        setCheckedList(ar);
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

    return (
        <div id='BuyItemBox'>
            <input type="checkbox"
                onChange={handleAllCheck}
                // checked={checkedList && buyList && checkedList.length === buyList.length}
                checked = 'true'
            >
            </input>전체선택
            <ul id="BuyItemBoxTitle">
                <li>선택</li>
                <li>상품사진</li>
                <li>상품정보</li>
                <li>수량</li>
                <li>총 상품금액</li>
                <li>배송비</li>
            </ul>
            {buyList && buyList.map((e, i) => <BuyItemBoxRow changeItemList={changeItemList} checkedList={checkedList} item={e} key={i} idx={i} handleCheck={handleCheck} />)}
        </div>
    );

}



export default BuyItemBox;
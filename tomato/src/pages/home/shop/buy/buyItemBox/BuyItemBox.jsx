
import { useEffect, useState } from 'react';
import './BuyItemBox.css';
import BuyItemBoxRow from './BuyItemBoxRow';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../../../../redux/userCart/action';
import { setUserCart } from './../../../../redux/userCart/action';
import { setUserBuyItemList, setUserBuyStorage } from '../../../../redux/userBuy/actions';

const BuyItemBox = ({
    checkedList, // 구매페이지 내에서 체크된 아이템
    setCheckedList, // 체크된 아이템 변경
    handleCheck, // checkedList 아이템 선택/해제
    buy, // 장바구니에서 클릭된 아이템만 구매페이지로
}) => {

    

    const dispatch = useDispatch();
    const userBuy = useSelector(state => state.userBuy.data.itemList);

    const handleAllCheck = () => {
        if (userBuy.length === buy.length) {
            dispatch(setUserBuyItemList([]))
        } else {
            dispatch(setUserBuyItemList(buy))
        }
    }

    const changeItemList = (key, type, item) => {
        let ar = [...userBuy];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            if (ar[key].amount > 0)
                ar[key].amount--;
        } else {
            ar[key].amount = type
        }
        dispatch(setUserBuyItemList(ar));
    }

    return (
        <div id='BuyItemBox'>
            <input type="checkbox"
                onChange={handleAllCheck}
                checked={buy && userBuy && userBuy.length === buy.length || false}
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
            {buy && buy.map((e, i) => <BuyItemBoxRow changeItemList={changeItemList} item={e} key={i} idx={i} handleCheck={handleCheck} />)}
        </div>
    );

}



export default BuyItemBox;
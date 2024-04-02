
import { useEffect, useState } from 'react';
import './ShopBasketSelectBox.css';
import ShopBasketItem from './ShopBasketSelectBox/ShopBasketItem';
import { useDispatch } from 'react-redux';
import { setItemList } from '../redux/itemList/actions';
import { setBuyItemList } from '../redux/buyItem/actions';

const ShopBasketSelectBox = ({ buyItem, setCheckedItem, itemList }) => {
    const dispatch = useDispatch();


    const changeItemList = (key, type) => {
        let ar = [...itemList];
        if (type == '+') {
            ar[key].amount++;
        } else if (type == '-') {
            ar[key].amount--;
        } else {
            ar[key].amount = type
        }
        dispatch(setItemList(ar));
    }

    const handleAllCheckBox = () => {
        let arr = [];
        const all = document.getElementsByName('buy');
        if (itemList.length != buyItem.length) {
            for (let item of itemList) { arr.push(item); }
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
                    <input {...buyItem.length === itemList.length && { checked: true }} type="checkbox" value='' onChange={handleAllCheckBox} />
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
                {itemList && itemList.map((e, i) => <ShopBasketItem buyItem={buyItem} item={e} key={i} idx={i} changeItemList={changeItemList} />)}
            </div>

        </div>
    );

}
export default ShopBasketSelectBox;
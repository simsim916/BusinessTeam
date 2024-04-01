
import { useState } from 'react';
import './ShopBasketSelectBox.css';
import ShopBasketItem from './ShopBasketSelectBox/ShopBasketItem';
import { useDispatch } from 'react-redux';
import { setItemList } from '../redux/itemList/actions';

const ShopBasketSelectBox = ({ itemList }) => {
    const dispatch = useDispatch();
    console.log(itemList)


    const changeItemList = (key) => {
        let ar = [...itemList];
        ar[key].amount++;
        dispatch(setItemList(ar));
    }


    return (
        <div id='shopBasketSelectBox'>

            <ul id="shopBasketSelect">
                <li><input type="checkbox"></input>전체선택</li>
                <li><input type="checkbox"></input>전체삭제</li>
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
                {itemList.map((e, i) => <ShopBasketItem item={e} key={i} idx={i} changeItemList={changeItemList} />)}
            </div>

        </div>
    );

}
export default ShopBasketSelectBox;
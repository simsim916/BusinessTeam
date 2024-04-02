
import { useState } from 'react';
import './BuyItemBox.css';

const BuyItemBox = ({ }) => {

    return (
        <div id='BuyItemBox'>
            <input type="checkbox"></input>전체선택
            <ul id="BuyItemBoxTitle">
                <li>선택</li>
                <li>상품사진</li>
                <li>상품정보</li>
                <li>수량</li>
                <li>총 상품금액</li>
                <li>배송비</li>
            </ul>
            {/* {itemList.map((e, i) => <ShopBasketItem item={e} key={i} idx={i} changeItemList={changeItemList} />)} */}

        </div>
    );

}
export default BuyItemBox;
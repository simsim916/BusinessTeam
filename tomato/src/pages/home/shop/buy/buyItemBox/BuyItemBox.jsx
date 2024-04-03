
import { useEffect, useState } from 'react';
import './BuyItemBox.css';
import BuyItemBoxRow from './BuyItemBoxRow';
import { useNavigate } from 'react-router-dom';

const BuyItemBox = ({ buyItem }) => {
    console.log(buyItem);
    useEffect(() => {
    })
    console.log(buyItem);
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
            {/* {buyItem.map((e, i) => <BuyItemBoxRow item={e} key={i} idx={i} />)} */}

        </div>
    );

}
export default BuyItemBox;
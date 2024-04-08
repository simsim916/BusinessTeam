import { useDispatch, useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../../model/server-config';
import { makeComa, makeDiscountPrice } from '../../../../components/MathFunction';
import { useEffect, useState } from 'react';

const BuyItemBoxRow = ({
    checkedList, // 구매페이지 내에서 체크된 아이템
    item, // 각 아이템 정보
    idx, // 각 아이템 인덱스
    changeItemList, // checkedList 내 아이템 수량 변경
    handleCheck // checkedList 아이템 선택/해제
}) => {


    const handleChange = (event) => {
        changeItemList(idx, event.target.value)
    }

    const handleClick = (type) => {
        changeItemList(idx, type, item);
    }

    return (
        <ul className="shopBasketItem">
            <li>
                <input className="check" type="checkbox" name="buy"
                    onChange={(event) => handleCheck(event, item)}
                    checked={checkedList && checkedList.some(e => e.code === item.code)}
                />

            </li>
            <li className="shopBasketItemImg"><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></li>
            <li className="shopBasketItemIfo">
                <p className="shopBasketItemIfo_name">{item.item_name}</p>
                <p className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                {
                    item.discount ?
                        <p className="shopBasketItemIfo_sale">{makeComa(Math.round(item.price * (100 - item.discount) / 100))}원</p>
                        :
                        null
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => handleClick('-')}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={handleChange} min="0" />
                <button><i onClick={() => handleClick('+')} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.discount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p className="shopBasketItemIfo_sale buyPage">{makeComa(item.price * item.amount)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.discount) / 100) * item.amount)}원</p>
                    </li>
                ) : (
                    <li className="shopBasketItemIfo_sumprice">
                        {makeComa(item.price * item.amount)}원
                    </li>
                )
            }
            <li>{item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'} </li>
        </ul >
    );
}

export default BuyItemBoxRow;
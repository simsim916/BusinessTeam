import { useDispatch, useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../model/server-config';
import { makeComa, makeDiscountPrice } from '../../../components/MathFunction';
import { setBuyItemList } from '../../../redux/buyItem/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { setUserCartSession } from '../../../redux/userCart/action';

const Cart_item_Row = ({ item, idx, changeItemList, buyItem }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const userCart = useSelector(state => state.userCart.data);

    const handleCheckBox = () => {
        if (buyItem.find(e => e.code == item.code)) {
            dispatch(setBuyItemList(buyItem.filter(e => e.code != item.code)));
        } else {
            dispatch(setBuyItemList([...buyItem, item]));
        }
    }

    const handleDelete = async () => {
        if (user != null) {
            axios.get('http://localhost:8090/usercart/delete', {
                params: {
                    id: item.id,
                    code: item.code
                }
            })
        } else {
            dispatch(setUserCartSession(userCart.filter(i => +i.code != +item.code)));
        }
    }

    return (
        <ul className="shopBasketItem">
            <li>
                <input className="check" checked={buyItem.find(e => e.code == item.code) || false} type="checkbox" onChange={() => handleCheckBox()} />
            </li>
            <li className="shopBasketItemImg"><Link to={'/home/detail?code=' + item.code}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></Link></li>
            <li className="shopBasketItemIfo">
                <Link to={'/home/detail?code=' + item.code} className="shopBasketItemIfo_name">{item.name}</Link>
                {
                    item.discount
                        ?
                        <>
                            <p style={{ textDecoration: 'line-through', marginBottom: '5px' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                            <p className="shopBasketItemIfo_sale">{makeComa(item.price)}원</p>
                        </>
                        :
                        <p style={{ color: 'black' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => changeItemList(idx, '-', item)}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={(event) => changeItemList(idx, event.target.value, item)} />
                <button><i onClick={() => changeItemList(idx, '+', item)} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.discount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p style={{ textDecoration: 'line-through' }}>{makeComa(item.price * item.amount)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.discount) / 100) * item.amount)}원</p>
                    </li>
                ) : (
                    <li className="shopBasketItemIfo_sumprice">
                        {makeComa(item.price * item.amount)}원
                    </li>
                )
            }
            <li>
                {item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'}
                <div className='xButton' onClick={handleDelete}><i className="fa-solid fa-xmark"></i></div>
            </li>
        </ul >
    );
}

export default Cart_item_Row;
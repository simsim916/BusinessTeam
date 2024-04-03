import { useDispatch, useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../model/server-config';
import { makeComa, makeDiscountPrice } from '../../../components/MathFunction';
import { setBuyItemList } from '../../../redux/buyItem/actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getItemListAmount, getUserCart } from '../../../redux/userCart/action';
import { useState } from 'react';

const Cart_item_Row = ({ item, idx, changeItemList, buyItem, handleRefresh }) => {

    const dispatch = useDispatch();

    const handleClick = (type) => {
        changeItemList(idx, type, item);
    }

    const handleChange = (event) => {
        changeItemList(idx, event.target.value, item)
    }

    const handleCheckBox = () => {
        const find = buyItem.find(i => i.code === item.code);
        let arr = [...buyItem];
        if (find === undefined) {
            arr.push(item);
            dispatch(setBuyItemList(arr));
        } else {
            const filtered = arr.filter(i => i.code !== item.code);
            dispatch(setBuyItemList(filtered));
        }
    }

    const handleDelete = async () => {
        let user = sessionStorage.getItem('userinfo');
        console.log(item);
        if (user != null) {
            axios.get('http://localhost:8090/usercart/delete', {
                params: {
                    id: item.id,
                    code: item.code
                }
            })
            handleRefresh();
        } else {
            const local = JSON.parse(localStorage.getItem('cart'));
            let filtered = local.filter(i => +i.code != +item.code);
            localStorage.setItem('cart', JSON.stringify(filtered));
            const cart = localStorage.getItem('cart');
            handleRefresh();
        }
    }

    return (
        <ul className="shopBasketItem">
            <li><input className="check" type="checkbox" name="buy" onChange={() => handleCheckBox(item)}></input></li>
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
                <button onClick={() => handleClick('-')}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={handleChange} />
                <button><i onClick={() => handleClick('+')} className="fa-solid fa-plus"></i></button>
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
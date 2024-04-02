import ShopBasketSelectBox from './ShopBasketSelectBox';
import ShopBasketPayBox from './ShopBasketPayBox';
import { useState, useEffect, useMemo } from 'react';
import './ShopBasket.css'
import axios from 'axios';
import Loading from './../components/Loading';
import Error from './../components/Error';
import BestItemBox from './BestItemBox';
import { useDispatch, useSelector } from 'react-redux';
import { getItemListAmount, setItemList } from '../redux/itemList/actions';


const ShopBasket = () => {
    let cart = localStorage.getItem('cart')
    // let cart;
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList)
    const buyItem = useSelector(state => state.buyItem)

    useEffect(() => {
        const user = sessionStorage.getItem('userinfo');
        dispatch(getItemListAmount('/item/selectin', 'post', cart, null, cart))
    }, [])

    if (itemList.loading) return <Loading />
    if (itemList.error) return <Error />

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;장바구니&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <ShopBasketSelectBox buyItem={buyItem.data} itemList={itemList.data} />

            <ShopBasketPayBox buyItem={buyItem.data} />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default ShopBasket;
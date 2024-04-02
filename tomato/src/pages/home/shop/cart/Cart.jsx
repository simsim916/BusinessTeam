import Cart_item from './Cart_item';
import Cart_total from './Cart_total';
import { useState, useEffect, useMemo } from 'react';
import './Cart.css'
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import BestItemBox from './Cart_item';
import { useDispatch, useSelector } from 'react-redux';
import { getItemListAmount, setItemList } from '../../../redux/itemList/actions';


const Cart = () => {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList)
    const buyItem = useSelector(state => state.buyItem)

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        const user = sessionStorage.getItem('userinfo');
        dispatch(getItemListAmount('/item/selectin', 'post', cart, user != null ? JSON.parse(user).token : null, cart))
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
            <Cart_item buyItem={buyItem.data} itemList={itemList.data} />
            <Cart_total buyItem={buyItem.data} />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default Cart;
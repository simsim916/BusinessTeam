import Cart_item from './Cart_item';
import Cart_total from './Cart_total';
import { useState, useEffect, useMemo } from 'react';
import './Cart.css'
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import BestItemBox from './Cart_item';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, getItemListAmount } from '../../../redux/userCart/action';


const Cart = () => {
    const dispatch = useDispatch();
    const userCart = useSelector(state => state.userCart)
    const buyItem = useSelector(state => state.buyItem)
    const [refresh, setRefresh] = useState(false);


    const handleRefresh = () => {
        setRefresh(!refresh);
    }

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        const user = sessionStorage.getItem('userinfo');
        if (user != null) {
            const token = JSON.parse(user).token;
            dispatch(getUserCart('/usercart/select', 'get', null, token));
        } else {
            if (cart != null) {
                dispatch(getItemListAmount('/item/selectin', 'post', cart, null, cart));
            }
        }
    }, [refresh])

    if (userCart.loading) return <Loading />
    if (userCart.error) return <Error />

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;장바구니&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <Cart_item buyItem={buyItem.data} userCart={userCart.data} handleRefresh={handleRefresh} />
            <Cart_total buyItem={buyItem.data} />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default Cart;
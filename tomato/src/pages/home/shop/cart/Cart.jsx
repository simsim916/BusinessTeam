import Cart_item from './Cart_item';
import Cart_total from './Cart_total';
import { useEffect } from 'react';
import './Cart.css'
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, getItemListAmount } from '../../../redux/userCart/action';


const Cart = () => {
    console.log('Cart 랜더링')
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const userCart = useSelector(state => state.userCart)
    const userinfo = useSelector(state => state.user)

    useEffect(() => {
        if (userinfo.data.login) {
            const token = userinfo.data.token;
            dispatch(getUserCart('/usercart/select', 'get', null, token));
        } else {
            dispatch(getItemListAmount('/item/selectin', 'post', userCart.data, null));
        }
    }, [])

    if (userCart.loading) return <Loading />
    if (userCart.error) return <Error />

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;장바구니&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <Cart_item />
            <Cart_total />

        </div>
    );
}

export default Cart;
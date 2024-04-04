import Cart_total from '../cart/Cart_total';
import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBuyItemList } from '../../../redux/buyItem/actions';


const BuyBox = () => {
    let buyItem;
    const buy = useSelector(state => state.buyItem);
    useEffect(() => {
        sessionStorage.setItem('buyItem', buy);

        buyItem = sessionStorage.getItem('buyItem');
    }, [])

    console.log(buyItem);

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;구매하기&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <div id='shopBasket_left'>
                <BuyItemBox buyItem={buyItem} />
                <BuyDeliveryBox />
            </div>

            <Cart_total />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default BuyBox;
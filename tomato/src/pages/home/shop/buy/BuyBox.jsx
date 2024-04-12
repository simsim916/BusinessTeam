import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Buy_total from './Buy_total';



const BuyBox = () => {





    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;구매하기&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <div id='shopBasket_left'>
                <BuyItemBox />
                <BuyDeliveryBox />
            </div>

            <Buy_total />
        </div>
    );
}

export default BuyBox;
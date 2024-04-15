import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import Buy_total from './Buy_total';
import axios from 'axios';
import { useEffect } from 'react';



const BuyBox = () => {


    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'order',
            }
        })
    }, [])



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
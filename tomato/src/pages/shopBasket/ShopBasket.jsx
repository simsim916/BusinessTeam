import ShopBasketSelectBox from './ShopBasketSelectBox';
import ShopBasketPayBox from './ShopBasketPayBox';
import { useState, useEffect } from 'react';
import './ShopBasket.css'
import axios from 'axios';
import Loading from './../components/Loading';
import Error from './../components/Error';
import BestItemBox from './BestItemBox';
import { useDispatch, useSelector } from 'react-redux';
import { getItemList } from '../redux/itemList/actions';


const ShopBasket = () => {
    let cart = localStorage.getItem('cart')
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList)
    const [amountList, setAmountList] = useState(JSON.parse(cart))
    console.log(amountList)
    useEffect(() => {
        dispatch(getItemList('/item/selectin', 'post', cart))
    }, [])

    if (itemList.loading) return <Loading />
    if (itemList.error) return <Error />
    
    for( let e of itemList) {
        for (let i of JSON.parse(cart)){
            if (i.item_code == e.code) {
                
            }
        }
    }

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;장바구니&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <ShopBasketSelectBox itemList={itemList.data} amountList={amountList} />

            <ShopBasketPayBox />

            {/* <BestItemBox /> */}

        </div>





    );
}

export default ShopBasket;
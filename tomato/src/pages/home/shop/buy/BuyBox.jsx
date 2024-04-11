import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Buy_total from './Buy_total';
import { setUserBuyItemList } from '../../../redux/userBuy/actions';



const BuyBox = () => {
    /* Redux */
    const dispatch = useDispatch();
    const [buy, setBuy] = useState(); // 장바구니 -> 구매페이지 넘어갈때 가져온 아이템리스트
    const userBuyItemList = useSelector(state => state.userBuy.data.itemList);

    useEffect(() => {
        let session = sessionStorage.getItem('buy');
        setBuy(JSON.parse(session));
    }, [])

    const handleCheck = (item) => {
        if (userBuyItemList.some(e => e.code === item.code)) {
            dispatch(setUserBuyItemList(userBuyItemList.filter(e => e.code !== item.code)));
        } else {
            dispatch(setUserBuyItemList([...userBuyItemList, item]));
        }
    }

    return (
        <div id='shopBasket' className='container'>
            <h3>
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                &nbsp;&nbsp;구매하기&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </h3>
            <div id='shopBasket_left'>
                <BuyItemBox handleCheck={handleCheck} buy={buy} />
                <BuyDeliveryBox />
            </div>

            <Buy_total />
        </div>
    );
}

export default BuyBox;
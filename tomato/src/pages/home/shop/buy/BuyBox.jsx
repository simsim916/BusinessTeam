import Cart_total from '../cart/Cart_total';
import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBuyItemList } from '../../../redux/userBuy/actions';
import { setfinalOrderStorage } from '../../../redux/userOrder/actions';
import Buy_total from './Buy_total';
import { setUserBuyItemList } from '../../../redux/userBuy/actions';



const BuyBox = () => {
    /* Redux */
    const dispatch = useDispatch();
    const userinfo = useSelector(state => state.user.data)
    const userBuy = useSelector(state => state.userBuy.data.itemList);

    /* 리액트 상태값 */
    const [buy, setBuy] = useState(); // 장바구니 -> 구매페이지 넘어갈때 가져온 아이템리스트
    const [checkedList, setCheckedList] = useState();

    useEffect(() => {
        let session = sessionStorage.getItem('buy');
        setBuy(JSON.parse(session));
    }, [])

    const handleCheck = (e, item) => {
        if (userBuy.find(e => e.code === item.code)) {
            console.log("아이템이 있을 때");
            dispatch(setUserBuyItemList(userBuy.filter(e => e.code !== item.code)));
        } else {
            console.log("아이템이 없을 때")
            dispatch(setUserBuyItemList([...userBuy, item]));
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
                <BuyDeliveryBox checkedList={checkedList} />
            </div>

            <Buy_total />
        </div>
    );
}

export default BuyBox;
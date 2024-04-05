import Cart_total from '../cart/Cart_total';
import './BuyBox.css'
import BuyItemBox from './buyItemBox/BuyItemBox';
import BuyDeliveryBox from './deliveryAddress/BuyDeliveryBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBuyItemList } from '../../../redux/userBuy/actions';



const BuyBox = () => {
    /* Redux */

    /* 리액트 상태값 */
    const [buyList, setBuyList] = useState(null); // 장바구니에서 클릭해서 넘어온 리스트
    const [checkedList, setCheckedList] = useState(); // 구매하기 페이지 내에서 클릭한 리스트

    useEffect(() => {
        let session = sessionStorage.getItem('buyList');

        setBuyList(JSON.parse(session));
        setCheckedList(JSON.parse(session));
    }, [])

    // const handleCheck = (e, item) => {
    //     const find = checkedList.find(i => i.code === item.code);
    //     let arr = [...checkedList];
    //     if (find === undefined) {
    //         arr.push(item);
    //         setCheckedList(arr);
    //         e.target.checked = 'false';
    //     } else {
    //         const filtered = arr.filter(i => i.code !== item.code);
    //         setCheckedList(filtered);
    //         e.target.checked = 'true';
    //     }
    // }
    const handleCheck = (e, item) => {
        const find = checkedList.find(i => i.code === item.code);
        let arr = [...checkedList];
        if (find === undefined) {
            arr.push(item);
            setCheckedList(arr);
        } else {
            const filtered = arr.filter(i => i.code !== item.code);
            setCheckedList(filtered);
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
                <BuyItemBox checkedList={checkedList} setCheckedList={setCheckedList} handleCheck={handleCheck} buyList={buyList} setBuyList={setBuyList} />
                <BuyDeliveryBox />
            </div>

            <Cart_total buyItem={checkedList} />

            {/* <BestItemBox /> */}

        </div>
    );
}

export default BuyBox;

import './Cart_item.css';
import Cart_item_Row from './Cart_item_Row';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyItemList } from '../../../redux/userBuy/actions';
import { setUserBuyStorage } from '../../../redux/userBuy/actions';

const Cart_item = () => {
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const userCart = useSelector(state => state.userCart.data);
    const userBuy = useSelector(state => state.userBuy.data.itemList);

    const handleAllCheckBox = () => {
        if (userBuy && userCart.length == userBuy.length) {
            dispatch(setUserBuyItemList([]));
            dispatch(setUserBuyStorage([]));
        } else {
            dispatch(setUserBuyItemList(userCart));
            dispatch(setUserBuyStorage(userCart));
        }

    }

    return (
        <div id='shopBasketSelectBox'>
            {userCart && userCart.length > 0 &&
                <div id="shopBasketSelect">
                    <input checked={userBuy && userBuy.length == userCart.length || false} type="checkbox" onChange={handleAllCheckBox} />
                    전체선택
                </div>
            }
            <div id="shopBasketItemBox">
                <ul id="shopBasketItemBoxTitle">
                    <li>선택</li>
                    <li>상품사진</li>
                    <li>상품정보</li>
                    <li>수량</li>
                    <li>총 상품금액</li>
                    <li>배송비</li>
                </ul>
                {
                    userCart.length == 0
                        ?
                        <div id='cartNone'>
                            장바구니에 상품을 담아주세요.
                        </div>
                        :
                        userCart && userCart.map((e, i) => <Cart_item_Row item={e} key={i} idx={i} />)
                }

            </div>


        </div >
    );

}
export default Cart_item;
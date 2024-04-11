import { useDispatch, useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../model/server-config';
import { makeComa } from '../../../components/MathFunction';
import { setUserBuyStorage } from '../../../redux/userBuy/actions';
import { Link } from 'react-router-dom';
import { deleteUserCart, setUserCartStorage, changeUserCart } from '../../../redux/userCart/action';

const Cart_item_Row = ({ item, idx }) => {
    /* 🫓REDUX🫓 */
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const userCart = useSelector(state => state.userCart.data);
    const userBuy = useSelector(state => state.userBuy.data.itemList)

    const changeCheckBox = () => {
        if (userBuy && userBuy.find(e => e.code == item.code))
            dispatch(setUserBuyStorage(userBuy.filter(e => e.code != item.code)));
        else if (userBuy)
            dispatch(setUserBuyStorage([...userBuy, item]));
        else
            dispatch(setUserBuyStorage([item]));
    }

    const handleXbtn = async () => {
        userBuy && dispatch(setUserBuyStorage(userBuy.filter(i => +i.code != +item.code)));
        dispatch(setUserCartStorage(userCart.filter(i => +i.code != +item.code)));
        user && user.login && dispatch(deleteUserCart(`/usercart/delete?code=${item.code}`, user.token))
    }

    return (
        <ul className="shopBasketItem">
            <li>
                <input className="check" checked={userBuy && userBuy.find(e => e.code == item.code) || false} type="checkbox" onChange={() => changeCheckBox()} />
            </li>
            <li className="shopBasketItemImg"><Link to={'/home/detail?code=' + item.code}><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></Link></li>
            <li className="shopBasketItemIfo">
                <Link to={'/home/detail?code=' + item.code} className="shopBasketItemIfo_name">{item.name}</Link>
                {
                    item.discount
                        ?
                        <>
                            <p style={{ textDecoration: 'line-through', marginBottom: '5px' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                            <p className="shopBasketItemIfo_sale">{makeComa(item.price)}원</p>
                        </>
                        :
                        <p style={{ color: 'black' }} className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => dispatch(changeUserCart(idx, '-', userCart))}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={(event) => dispatch(changeUserCart(idx, event.target.value, userCart))} />
                <button><i onClick={() => dispatch(changeUserCart(idx, '+', userCart))} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.discount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p style={{ textDecoration: 'line-through' }}>{makeComa(item.price * item.amount)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.discount) / 100) * item.amount)}원</p>
                    </li>
                ) : (
                    <li className="shopBasketItemIfo_sumprice">
                        {makeComa(item.price * item.amount)}원
                    </li>
                )
            }
            <li>
                {item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'}
                <div className='xButton' onClick={handleXbtn}><i className="fa-solid fa-xmark"></i></div>
            </li>
        </ul >
    );
}

export default Cart_item_Row;
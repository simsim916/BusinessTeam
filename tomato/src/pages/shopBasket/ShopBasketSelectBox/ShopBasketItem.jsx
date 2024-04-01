import { SERVER_RESOURCE } from '../../../model/server-config';
import { makeComa, makeDiscountPrice } from '../../components/MathFunction';

const ShopBasketItem = ({ item }) => {
    return (
        <ul className="shopBasketItem">
            <li><input className="check" type="checkbox" name="buy"></input></li>
            <li className="shopBasketItemImg"><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></li>
            <li className="shopBasketItemIfo">
                <p className="shopBasketItemIfo_name">{item.name}</p>
                <p className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
            </li>
            <li className="shopBasketItem_count">
                <button><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="text" value="1" />
                <button><i className="fa-solid fa-plus"></i></button>
            </li>
            <li className="sumPrice">100,000 원</li>
            <li>{item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'} </li>
        </ul>
    );
}

export default ShopBasketItem;
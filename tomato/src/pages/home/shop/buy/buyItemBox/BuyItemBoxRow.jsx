import { SERVER_RESOURCE } from '../../../../../model/server-config';
import { makeComa,makeDiscountPrice } from '../../../../components/MathFunction';

const BuyItemBoxRow = ({ item, idx, changeItemList }) => {

    const handleClick = (type) => {
        changeItemList(idx, type);
    }

    const handleChange = (event) => {
        changeItemList(idx, event.target.value)
    }

    return (
        <ul className="shopBasketItem">
            <li><input className="check" type="checkbox" name="buy"></input></li>
            <li className="shopBasketItemImg"><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt="" /></li>
            <li className="shopBasketItemIfo">
                <p className="shopBasketItemIfo_name">{item.name}</p>
                <p className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                {
                    item.discount ?
                        <p className="shopBasketItemIfo_sale">{makeComa(item.price)}원</p>
                        :
                        null
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => handleClick('-')}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={item.amount} onChange={handleChange} />
                <button><i onClick={() => handleClick('+')} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.discount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p className="shopBasketItemIfo_sale">{makeComa(item.price)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.discount) / 100) * item.amount)}원</p>
                    </li>
                ) : (
                    <li className="shopBasketItemIfo_sumprice">
                        {makeComa(item.price * item.amount)}원
                    </li>
                )
            }
            <li>{item.delivery ? makeComa(item.delivery) + ' 원' : '무료배송'} </li>
        </ul >
    );
}

export default BuyItemBoxRow;
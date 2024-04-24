import { useSelector } from 'react-redux';
import { SERVER_RESOURCE } from '../../../../../model/server-config';
import { makeComa } from '../../../../components/MathFunction';

const BuyItemBoxRow = ({
    item, // 각 아이템 정보
    idx, // 각 아이템 인덱스
    changeItemList, // checkedList 내 아이템 수량 변경
    changeCheckedList // checkedList 아이템 선택/해제
}) => {
    const userBuyForm = useSelector(state => state.userBuy.form)
    const userBuyItemList = useSelector(state => state.userBuy.buyList);
    const handleChange = (event) => {
        changeItemList(idx, event.target.value)
    }
    const handleClick = (type) => {
        changeItemList(idx, type, item);
    }

    return (
        <ul className="shopBasketItem">
            <li>
                <input className="check" type="checkbox" name="buy"
                    onChange={() => changeCheckedList(item)}
                    checked={userBuyForm.itemList.find(e => e.itemCode == item.itemCode) || false}
                />
            </li>
            <li className="shopBasketItemImg"><img src={SERVER_RESOURCE + `/img/itemImg/${item.itemCode}_2.jpg`} alt="" /></li>
            <li className="shopBasketItemIfo">
                <p className="shopBasketItemIfo_name">{item.itemName}</p>
                <p className="shopBasketItemIfo_price">{makeComa(item.price)}원</p>
                {
                    item.itemEventDiscount ?
                        <p className="shopBasketItemIfo_sale">{makeComa(Math.round(item.price * (100 - item.itemEventDiscount) / 100))}원</p>
                        :
                        null
                }
            </li>
            <li className="shopBasketItem_count">
                <button onClick={() => handleClick('-')}><i className="fa-solid fa-minus"></i></button>
                <input id="inputCount" type="number" value={1 && item.amount} onChange={handleChange} />
                <button><i onClick={() => handleClick('+')} className="fa-solid fa-plus"></i></button>
            </li>
            {
                item.itemEventDiscount ? (
                    <li className="shopBasketItemIfo_sumprice">
                        <p className="shopBasketItemIfo_sale buyPage">{makeComa(item.price * item.amount)}원</p>
                        <p>{makeComa(Math.round(item.price * (100 - item.itemEventDiscount) / 100) * item.amount)}원</p>
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
import './ShopBasketSelectBox.css';
import { SERVER_RESOURCE } from '../../model/server-config';


const ShopBasketSelectBox = () => {

    return (
        <div id='shopBasketSelectBox'>

            <ul id="shopBasketSelect">
                <li><input type="checkbox"></input>전체선택</li>
                <li><input type="checkbox"></input>전체삭제</li>
            </ul>
            <div id="shopBasketItemBox">
                <ul id="shopBasketItemBoxTitle">
                    <li>선택</li>
                    <li>상품사진</li>
                    <li>상품정보</li>
                    <li>수량</li>
                    <li>총 상품금액</li>
                    <li>배송비</li>
                </ul>
                <ul className="shopBasketItem">
                    <li><input className="check" type="checkbox" onClick="shopBasket()" name="buy"></input></li>
                    <li className="shopBasketItemImg"><img src={SERVER_RESOURCE + `/img/itemImg/5000001_2.jpg`} alt="" /></li>
                    <li className="shopBasketItemIfo">
                        <p className="shopBasketItemIfo_name">등촌식 얼큰 미나리 칼국수 전골</p>
                        <p className="shopBasketItemIfo_price">15,000 원</p>
                    </li>
                    <li className="shopBasketItem_count">
                        <button><i className="fa-solid fa-minus"></i></button>
                        <input id="inputCount" type="text" value="1" />
                        <button><i className="fa-solid fa-plus"></i></button>
                    </li>
                    <li className="sumPrice">100,000 원</li>
                    <li>무료배송</li>
                </ul>
            </div>

        </div>
    );

}
export default ShopBasketSelectBox;
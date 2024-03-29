import './ShopBasketSelectBox.css';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useState } from 'react';


const ShopBasketSelectBox = ({item}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div>
            <div className="container">
                <h3>
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                    장바구니
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                </h3>
                <div id="shopBasketSelectBox">
                    <ul id="shopBasketSelect">
                        <li><input type="checkbox"></input>전체선택</li>
                        <li><input type="checkbox"></input>전체삭제</li>
                    </ul>
                </div>
                <div id="shopBasketItemBox">
                    <div>
                        <ul id="shopBasketItemBoxTitle">
                            <li >선택</li>
                            <li>상품정보</li>
                            <li>수량</li>
                            <li>총 상품금액</li>
                            <li>배송비</li>
                        </ul>
                        <div className="shopBasketItem">
                            <div><input className="check" type="checkbox" onClick="shopBasket()" name="buy"></input></div>
                            <div className="shopBasketItemImg"><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt="" /></div>
                            <div className="shopBasketItemIfo">{item.name}
                                <div className="price">{makeComa(item.price)}원</div>
                            </div>
                            <div id="itemCount">
                                <button onClick='count(event,"-")'><i className="fa-solid fa-minus"></i></button>
                                <input onKeyDown="inputCount(event)" id="inputCount" type="text" value="1" />
                                <button onClick='count(event,"+")'><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <div className="sumPrice">총합계</div>
                            <div>무료배송</div>
                        </div>
                        <div className="shopBasketItem">
                            <div><input type="checkbox"></input></div>
                            <div className="shopBasketItemImg"><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt="" /></div>
                            <div className="shopBasketItemIfo">상품이름 - 샤브샤브
                                <div className="price">상품가격:5000</div>
                            </div>
                            <div id="itemCount">
                                <button onClick='count(event,"-")'><i className="fa-solid fa-minus"></i></button>
                                <input onKeyDown="inputCount(event)" id="inputCount" type="text" value="1" />
                                <button onClick='count(event,"+")'><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <div className="sumPrice">5000</div>
                            <div>무료배송</div>
                        </div>
                        <div className="shopBasketItem">
                            <div><input type="checkbox"></input></div>
                            <div className="shopBasketItemImg"><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt="" /></div>
                            <div className="shopBasketItemIfo">상품이름 - 샤브샤브
                                <div className="price">상품가격:5000</div>
                            </div>
                            <div id="itemCount">
                                <button onClick='count(event,"-")'><i className="fa-solid fa-minus"></i></button>
                                <input onKeyDown="inputCount(event)" id="inputCount" type="text" value="1" />
                                <button onClick='count(event,"+")'><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <div className="sumPrice">5000</div>
                            <div>무료배송</div>
                        </div>
                        <div className="shopBasketItem">
                            <div><input type="checkbox"></input></div>
                            <div className="shopBasketItemImg"><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt="" /></div>
                            <div className="shopBasketItemIfo">상품이름 - 샤브샤브
                                <div className="price">상품가격:5000</div>
                            </div>
                            <div id="itemCount">
                                <button onClick='count(event,"-")'><i className="fa-solid fa-minus"></i></button>
                                <input onKeyDown="inputCount(event)" id="inputCount" type="text" value="1" />
                                <button onClick='count(event,"+")'><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <div className="sumPrice">5000</div>
                            <div>무료배송</div>
                        </div>
                        <div className="shopBasketItem">
                            <div><input type="checkbox"></input></div>
                            <div className="shopBasketItemImg"><img src={process.env.PUBLIC_URL + `/img/itemImg/5000001_2.jpg`} alt="" /></div>
                            <div className="shopBasketItemIfo">상품이름 - 샤브샤브
                                <div className="price">상품가격:5000</div>
                            </div>
                            <div id="itemCount">
                                <button onClick='count(event,"-")'><i className="fa-solid fa-minus"></i></button>
                                <input onKeyDown="inputCount(event)" id="inputCount" type="text" value="1" />
                                <button onClick='count(event,"+")'><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <div className="sumPrice">5000</div>
                            <div>무료배송</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}
export default ShopBasketSelectBox;
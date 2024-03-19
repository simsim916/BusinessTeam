import { Link } from 'react-router-dom';
import './itemBox.css';

const ItemBox = ({data})=>{
    return (
        <Link to={"/detail?code="+data.code} className="itemBox">
            <div className="itemImg">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <img src={process.env.PUBLIC_URL + `/img/itemImg/${data.code < 10000 ? 'default' : data.code}_1.jpg`} alt={data.name} />
            </div>
            <div className="itemName">{data.name}</div>
            <div className="itemInfo">{data.brand}<br /></div>
            {
                data.discount ? (
                    <>
                        <p className="itemPriceB">{makeComa(data.price)}원</p>
                        <p className="itemPrice">{makeComa(Math.round(data.price * (100 - data.discount) / 100))}원</p>
                    </>
                ) : (
                    <p className="itemPrice">{makeComa(data.price)}원</p>
                )
            }
            {
                data.delivery > 0 ? (
                    <div className="itemDelivery"><span>배송비&nbsp;&nbsp;</span>{makeComa(data.delivery)}원</div>
                ) : (
                    <div className="itemDelivery">무료배송</div>
                )
            }
            <div className="itemOption">
                {
                    data.delivery === 0 && (
                        <div className="itemOptionFreeDelivery">무료배송</div>
                    )
                }
                {
                    data.event_code != null && (
                        <div className="itemOptionEvent">{data.event_name}</div>
                    )
                }
            </div>
        </Link>
    );
}

export default ItemBox;

function makeComa(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
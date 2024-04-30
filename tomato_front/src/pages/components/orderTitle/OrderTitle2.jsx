import { SERVER_RESOURCE } from "../../../model/server-config";
import { makeComa } from "../MathFunction";
import './OrderTitle.css'

const OrderTitle2 = ({ userBuyResult }) => {

    return (
        <div className="orderTitle">
            <h4>배송 대기중</h4>
            <div className="orderTitleContent">
                <div className="orderTitleIMG">
                    <img src={SERVER_RESOURCE + `/img/itemImg/${userBuyResult.itemCode}_2.jpg`} alt={userBuyResult.item_name} />
                </div>
                <div className="orderTitleDetail">
                    <p className="orderTitleDate">{new Date(userBuyResult.orderdate).getFullYear()}- {new Date(userBuyResult.orderdate).getMonth() + 1}-{new Date(userBuyResult.orderdate).getDate()}</p>
                    <p className="orderTitleName">{userBuyResult.itemName} 외 총 {userBuyResult.orderSize}건 의 주문</p>
                    <p className="orderTitlePrice">{makeComa(userBuyResult.orderprice)}</p>
                    <p className="orderTitleDelivery">[{userBuyResult.addressCode}]{userBuyResult.address1}, {userBuyResult.address2}</p>
                </div>
                {/* <div className="orderTitleBTN">
                    <div className="orderTitleBTN_detaii">상세내용 보기</div>
                </div> */}
            </div>
        </div>
    );
}

export default OrderTitle2;
import './DeliverySelect.css'
import DaumPostcode from "react-daum-postcode";

const DeliverySelect = ({ handleOnClick }) => {

    const deliveryPlace = () => {
        
    }

    return (
        <div id="deliverySelect">
            <div id="deliverySelectContainer">
                <h4>배송지 변경</h4>
                <div onClick={handleOnClick} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
                <div className="addDelivery">배송지 추가하기</div>
                <div className="deliverySelectRow">
                    <h4>우리집</h4>
                    <p>홍길동 010-1234-1234</p>
                    <p>경기도 성남시 분당구 돌마로 46 KR 5층</p>
                    <div className='delivery_select'>
                        <div>수정</div>
                        <div>선택</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliverySelect;
import './BuyDeliveryBox.css'

const BuyDeliveryBox = () => {
    return (
        <div id="buyDeliveryBox">
            <h4>우리집</h4>
            <p>홍길동 010-1234-1234</p>
            <p>경기도 성남시 분당구 돌마로 46 KR 5층</p>
            <select name="delivery_option">
                <option value="">배송 전 연락바랍니다.</option>
                <option value="">부재 시 경비실에 맡겨주세요.</option>
                <option value="">직접 입력</option>
            </select>
            <div id='delivery_select'>
                배송지 선택
            </div>
        </div>
    );
}

export default BuyDeliveryBox;
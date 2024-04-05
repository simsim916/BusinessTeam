import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../../../../model/model';

const BuyDeliveryBox = () => {


    const [deliverySelect, setDeliverySelect] = useState(false);
    const [client, setClient] = useState({
        code : null,
        userId : 'juh94',
        name : '주용현',
        addressCode:7534,
        address1:'경기도 광주시',
        address2:'쌍령동',
        price:999999,
        deliveryPrice:5000,
        point:1234,
    });

    const handleOnClick = () => {
        setDeliverySelect(!deliverySelect);
    }

    useEffect(() => {
        let userinfo = sessionStorage.getItem('userinfo');
        // if (userinfo != null) {
        //     let user = api('/user/select', 'get', null, JSON.parse(userinfo).token
        //     ).then(res => {
        //         setClient(res.data);
        //     }
        //     ).catch(err => console.log(err.message));
        // }
    }, [])


    return (
        <div id="buyDeliveryBox">
            <h4>우리집</h4>
            {client != null
                ?
                <p>
                    {client && client.username}
                    {client && client.phonenumber}
                </p>
                :
                <p>
                    <input type="text" placeholder='이름' />
                    <input type="text" placeholder="전화 번호" />
                </p>
            }
            <p>경기도 성남시 분당구 돌마로 46 KR 5층</p>
            <select name="delivery_option">
                <option value="">배송 전 연락바랍니다.</option>
                <option value="">부재 시 경비실에 맡겨주세요.</option>
                <option value="">직접 입력</option>
            </select>
            <div onClick={handleOnClick} id='delivery_select'>
                배송지 선택
            </div>

            {deliverySelect && <DeliverySelect handleOnClick={handleOnClick} />}
        </div >
    );
}

export default BuyDeliveryBox;
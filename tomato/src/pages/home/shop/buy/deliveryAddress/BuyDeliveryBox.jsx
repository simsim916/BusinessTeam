import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../../../../model/model';

const BuyDeliveryBox = () => {

    
    const [deliverySelect, setDeliverySelect] = useState(false);
    const [client, setClient] = useState();

    const handleOnClick = () => {
        setDeliverySelect(!deliverySelect);
    }

    useEffect(() => {
        let userinfo = sessionStorage.getItem('userinfo');
        if(userinfo != null) {
            let user = api('/user/select', 'get', null, JSON.parse(userinfo).token
            ).then(res => {
                console.log(res.data)
                setClient(res.data);
            }
            ).catch(err => console.log(err.message));
        } else {
            setClient({
                username: Math.random().toString(16).substring(2,8),
                phonenumber : ""
            })
        }
    }, [])


    return (
        <div id="buyDeliveryBox">
            <h4>우리집</h4>
            <p>{client && client.username} {client && client.phonenumber}</p>
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
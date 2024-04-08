import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../../../model/model';

const BuyDeliveryBox = () => {

    const [deliverySelect, setDeliverySelect] = useState(false);
    const userAddress = useSelector(state => state.userAddress.data)
    const [orderForm, setOrderForm] = useState({
        itemList: [
            {
                code: 1
            },
            {
                code: 2
            }
        ],
        address_code: 'aa',
        address1: 'aa',
        address2: 'aa'
    })

    const aaa = () => {
        api('/order/order', 'post', orderForm)
            .then(res => {
                console.log('CC')
            })
    }

    /* 배송지선택창 띄우는 상태값 */
    const handleOnClick = () => {
        setDeliverySelect(!deliverySelect);
    }


    return (
        <div id="buyDeliveryBox" >
            <div onClick={aaa}>전송</div>
            {
                userAddress[0] ?
                    <>
                        <h4>우리집</h4>
                        <input type="text" placeholder='이름' name='id' />
                        <input type="text" placeholder="전화 번호" name='phonenumber' />
                        <input type="text" placeholder='배송지 선택하기 창을 이용하세요' />
                        <input type='text' placeholder='상세주소를 입력해주세요.' name="address2" />
                        <select name="message">
                            <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
                            <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
                            <option value="">직접 입력</option>
                        </select>
                        <div onClick={handleOnClick} id='delivery_select'>
                            배송지 선택
                        </div>
                    </>
                    :
                    <>
                        <p>배달 받으실 장소를 입력해주세요!</p>
                        <div onClick={handleOnClick} id='delivery_select_unlogin'>
                            배송지 입력
                        </div>
                    </>
            }

            {deliverySelect && <DeliverySelect handleOnClick={handleOnClick} />}
        </div >
    );
}

export default BuyDeliveryBox;
import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../../../../model/model';

const BuyDeliveryBox = ({ checkedList }) => {

    const [deliverySelect, setDeliverySelect] = useState(false);
    const [addressList, setAddressList] = useState(null);
    const [whichAddress, setWhichAddress] = useState();


    useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem('userinfo'));
        api('/address/select', 'get', null, user.token
        ).then(res => {
            setAddressList(res.data);
            setWhichAddress(res.data[0]);
        }
        ).catch(err => console.log(err.message));
    }, [])

    /* 배송지선택창 띄우는 상태값 */
    const handleOnClick = () => {
        setDeliverySelect(!deliverySelect);
    }

    const insertNewAddress = (data) => {
        let user = JSON.parse(sessionStorage.getItem('userinfo'));
        api('/address/merge', 'post', data, user.token);
    }

    const makeOrderRequest = (e) => {
        setWhichAddress({
            ...whichAddress,
            [e.target.name] : e.target.value
        })
        console.log(whichAddress);
    }

    /* 배송지 선택창에서 어떤주소로 보낼지 선택 */
    const handleWhichAddress = (data) => {
        setWhichAddress(data);
        setDeliverySelect(!deliverySelect);
    }


    return (
        <div id="buyDeliveryBox">
            <h4>우리집</h4>
            {whichAddress != null
                ?
                <p>
                    {whichAddress && whichAddress.id}&nbsp;&nbsp;&nbsp;
                    {whichAddress && whichAddress.phonenumber}
                    {/* 휴대폰 번호를 어디서 구하지? */}
                </p>
                :
                <p>
                    <input type="text" placeholder='이름' name='id' onChange={makeOrderRequest} />
                    <input type="text" placeholder="전화 번호" name='phonenumber' onChange={makeOrderRequest} />
                </p>
            }
            {
                whichAddress != null
                    ?
                    <p>{whichAddress && whichAddress.address1}</p>
                    :
                    <p><input type="text" placeholder='배송지 선택하기 창을 이용하세요' /></p>
            }

            상세주소&nbsp;<input type='text' style={{
                width: '50%',
                textIndent: '7px',
                marginTop: '5px'
            }} placeholder='상세주소를 입력해주세요.'
                name="address2"
                onChange={makeOrderRequest}
            />
            <select name="message" onChange={makeOrderRequest} >
                <option value="배송 전 연락바랍니다.">배송 전 연락바랍니다.</option>
                <option value="부재 시 경비실에 맡겨주세요.">부재 시 경비실에 맡겨주세요.</option>
                <option value="">직접 입력</option>
            </select>
            <div onClick={handleOnClick} id='delivery_select'>
                배송지 선택
            </div>

            {deliverySelect && <DeliverySelect setAddressList={setAddressList} insertNewAddress={insertNewAddress} handleWhichAddress={handleWhichAddress} addressList={addressList} handleOnClick={handleOnClick} />}
        </div >
    );
}

export default BuyDeliveryBox;
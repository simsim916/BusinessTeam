import { useState } from 'react';
import './BuyDeliveryBox.css';
import DeliverySelect from './DeliverySelect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../../../model/model';
import { setUserAddress } from '../../../../redux/userAddress/action';
import { setUserBuyMessage } from '../../../../redux/userBuy/actions';

const BuyDeliveryBox = () => {
    const dispatch = useDispatch();
    const [deliverySelect, setDeliverySelect] = useState(false);
    const userAddress = useSelector(state => state.userAddress.data)
    const userBuy = useSelector(state => state.userBuy.data);
    const user = useSelector(state => state.user.data);


    /* 배송지선택창 띄우는 상태값 */
    const handleOnClick = () => {
        setDeliverySelect(!deliverySelect);
    }

    console.log(userBuy)

    const changeMessage = (e) => {
        dispatch(setUserBuyMessage(e.target.value))
    }


    return (
        <div id="buyDeliveryBox" >
            {
                
                userAddress[0] ?
                    <>
                        <h4>{userAddress[0].info}</h4>
                        <p>{userAddress[0].id} {userAddress[0].phonenumber}</p>
                        <p>{userAddress[0].address1} {userAddress[0].address2}</p>
                        <p>{userAddress[0].address2} [{userAddress[0].addressCode}]</p>
                        <p></p>
                        <select name="message" onChange={changeMessage}>
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

            {deliverySelect && <DeliverySelect  handleOnClick={handleOnClick} />}
        </div >
    );
}

export default BuyDeliveryBox;
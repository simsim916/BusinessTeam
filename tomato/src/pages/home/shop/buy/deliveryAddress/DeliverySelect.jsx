import { useState, useEffect } from 'react';
import './DeliverySelect.css'
import DeliverySelectRow from './DeliverySelectRow/DeliverySelectRow';
import Postcode from '../../../../components/Postcode';
import { useSelector, useDispatch } from 'react-redux';
import { setUserAddress } from '../../../../redux/userAddress/action';
import { setUserBuyAddress } from '../../../../redux/userBuy/actions';
import DaumPostcodeEmbed, { loadPostcode } from 'react-daum-postcode';
import { getUserAddress } from '../../../../redux/userAddress/action';
import InsertAddress from './insertAddress/InsertAddress';
import { api } from '../../../../../model/model';

const DeliverySelect = ({ setAddressList, insertNewAddress, addressList, handleOnClick }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const userBuy = useSelector(state => state.userBuy.data); // 고객이 선택한 배송지로 쓸 예정
    const userAddress = useSelector(state => state.userAddress.data); // DB내 회원 배송목록
    const [openInsert, setOpenInsert] = useState(false);
    const [openAPI, setOpenAPI] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

        dispatch(getUserAddress('/address/select', 'get', null, user.token));
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const insertAddress = () => {
        let address = {
            addressCode: document.getElementById('zonecode').value,
            address1: document.getElementById('address1').value,
            address2: document.getElementById('address2').value,
            phonenumber: document.getElementById('phonenumber').value,
            info: document.getElementById('info').value,
        }
        dispatch(setUserBuyAddress(address));
        dispatch(getUserAddress('/address/merge', 'post', address, user.token));
        setOpenInsert(!openInsert);
    }

    const handleComplete = (data) => {
        document.getElementById('zonecode').value = data.zonecode;
        document.getElementById('address1').value = data.address;
        setOpenAPI(!openAPI);
    };

    const handleInsertAddress = () => {
        setOpenInsert(!openInsert);
    }

    const handleAPI = () => {
        setOpenAPI(!openAPI);
    }


    return (
        <div id="deliverySelect">
            <div id="deliverySelectContainer">
                {openAPI && <DaumPostcodeEmbed
                    onComplete={handleComplete}
                    style={{ height: '100%' }}
                    autoClose={false}
                />}
                <h4>배송지 변경</h4>
                <div onClick={handleOnClick} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
                <div className="addDelivery" onClick={handleInsertAddress}>배송지 추가하기</div>
                {/* {openAPI && <InsertAddress />} */}
                {openInsert && <InsertAddress insertAddress={insertAddress} handleAPI={handleAPI} />}
                {userAddress.length > 0 && userAddress.map((e, i) => <DeliverySelectRow handleOnClick={handleOnClick} key={i} address={e} />)}
            </div>
        </div>
    );
}

export default DeliverySelect;
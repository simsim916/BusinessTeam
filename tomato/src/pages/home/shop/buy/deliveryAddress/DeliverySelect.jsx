import { useState, useEffect } from 'react';
import './DeliverySelect.css'
import DeliverySelectRow from './DeliverySelectRow/DeliverySelectRow';
import Postcode from '../../../../components/Postcode';
import { useSelector, useDispatch } from 'react-redux';
import { setUserAddress } from '../../../../redux/userAddress/action';
import DaumPostcodeEmbed, { loadPostcode } from 'react-daum-postcode';
import { setUserBuyAddress } from '../../../../redux/userBuy/actions';

const DeliverySelect = ({ setAddressList, insertNewAddress, handleWhichAddress, addressList, handleOnClick }) => {
    const dispatch = useDispatch();
    const userAddress = useSelector(state => state.userAddress.data);
    const [showPostcode, setShowPostcode] = useState(!userAddress[0]);
    console.log(userAddress)

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleComplete = (data) => {
        const address = {
            address_code: data.zonecode,
            address1: data.address,
        }
        dispatch(setUserBuyAddress(address));
        setShowPostcode(false)
    };

    const handleOnClick2 = () => {
        console.log('aa')
        setShowPostcode(true)
    }

    return (
        <div id="deliverySelect">
            <div id="deliverySelectContainer">
                {/* {showPostcode && <Postcode setShowPostcode={setShowPostcode} />} */}

                {showPostcode && <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: '100%' }} autoClose={false} />}
                <h4>배송지 변경</h4>
                <div onClick={handleOnClick} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
                <div className="addDelivery" onClick={handleOnClick2}>배송지 추가하기</div>
                {userAddress.length > 0 && userAddress.map((e, i) => <DeliverySelectRow handleWhichAddress={handleWhichAddress} key={i} address={e} />)}
            </div>
        </div>
    );
}

export default DeliverySelect;
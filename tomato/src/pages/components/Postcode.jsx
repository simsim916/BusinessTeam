import React from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { setUserAddress } from '../redux/userAddress/action';

const Postcode = ({ setShowPostcode }) => {
    const dispatch = useDispatch();

    const handleComplete = (data) => {

        const address = {
            address_code: data.zonecode,
            address1: data.address,
        }
        dispatch(setUserAddress(address));

    };

    return <DaumPostcodeEmbed onComplete={handleComplete} style={{ height: '100%' }} />;
};

export default Postcode;
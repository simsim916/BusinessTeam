import { useState, useEffect } from 'react';
import './DeliverySelect.css'
import DeliverySelectRow from './DeliverySelectRow/DeliverySelectRow';
// import { useState } from 'react';

const DeliverySelect = ({ setAddressList, insertNewAddress, handleWhichAddress, addressList, handleOnClick }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            /* 
            return () => {...};: useEffect 훅의 클린업 함수를 반환합니다.
            이 함수는 컴포넌트가 언마운트될 때 실행되며, 
            여기서는 추가한 script 엘리먼트를 제거하여 메모리 누수를 방지합니다.

            따라서 이 코드는 컴포넌트가 렌더링될 때 한 번만 다음 우편번호 서비스의
            스크립트를 동적으로 로드하고, 컴포넌트가 언마운트될 때 
            스크립트를 제거하는 역할을 합니다.

            이 부분 이해가 안돼
            */
        };
    }, []);

    const openAddressAPI = (insertAddress) => {
        new window.daum.Postcode({ // window.daum을 통해 전역 범위에 접근
            oncomplete: function (data) {
                let addressData = {
                    addressCode: data.zonecode,
                    address1: data.address,
                }
                insertNewAddress(addressData);
                setAddressList([...addressList], addressData);
            }
        }).open();
    };




    return (
        <div id="deliverySelect">
            <div id="deliverySelectContainer">
                <h4>배송지 변경</h4>
                <div onClick={handleOnClick} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
                <div className="addDelivery" onClick={openAddressAPI}>배송지 추가하기</div>
                {addressList.map((e, i) => <DeliverySelectRow handleWhichAddress={handleWhichAddress} key={i} address={e} />)}
            </div>
        </div>
    );
}

export default DeliverySelect;
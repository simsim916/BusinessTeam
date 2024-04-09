
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyAddress } from '../../../../../redux/userBuy/actions';
import { setUserAddress } from '../../../../../redux/userAddress/action';


const DeliverySelectRow = ({ handleOnClick,address }) => {
    const dispatch = useDispatch();
    const userBuy = useSelector(state => state.userBuy.data); // 고객이 선택한 배송지로 쓸 예정\
    const userAddress = useSelector(state => state.userAddress.data);


    const selectWhichAddress = (address) => {
        dispatch(setUserBuyAddress(address));
        handleOnClick();
        let index = userAddress.findIndex(e => e.id === address.id);
        if (index !== -1) {
            userAddress.splice(index, 1); 
        }
        userAddress.unshift(address);
    }

    return (
        <div className="deliverySelectRow">
            <h4>{address.info}</h4>
            <p>{address.id} {address.phonenumber}</p>
            <p><span>[{address.addressCode}]</span> {address.address1}</p>
            <p>{address.address2}</p>
            <div className='delivery_select'>
                <div>수정</div>
                <div onClick={() =>selectWhichAddress(address)}>선택</div>
            </div>
        </div>
    )
}

export default DeliverySelectRow;
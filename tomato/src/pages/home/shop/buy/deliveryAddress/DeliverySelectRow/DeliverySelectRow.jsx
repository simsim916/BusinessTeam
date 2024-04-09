
import { useDispatch, useSelector } from 'react-redux';
import { setUserBuyAddress } from '../../../../../redux/userBuy/actions';
import { setUserAddress } from '../../../../../redux/userAddress/action';
import { api } from '../../../../../../model/model';


const DeliverySelectRow = ({ handleAPI, handleOnClick, address }) => {
    const dispatch = useDispatch();
    const userBuy = useSelector(state => state.userBuy.data); // 고객이 선택한 배송지로 쓸 예정\
    const userAddress = useSelector(state => state.userAddress.data);
    const user = useSelector(state => state.user.data);


    const selectWhichAddress = (address) => {
        dispatch(setUserBuyAddress(address));
        handleOnClick();
        let index = userAddress.findIndex(e => e.id === address.id);
        if (index !== -1) {
            userAddress.splice(index, 1);
        }
        userAddress.unshift(address);
    }

    const deleteAddress = (address) => {
        console.log(address);
        let filter = userAddress.filter(e => e.addressCode != address.addressCode)
        dispatch(setUserAddress(filter));
        api(`/address/delete`, 'post', address, user.token);
    }

    return (
        <div className="deliverySelectRow">
            <h4>{address.info}</h4>
            <p>{address.id} {address.phonenumber}</p>
            <p><span>[{address.addressCode}]</span> {address.address1}</p>
            <p>{address.address2}</p>
            <div className='delivery_select'>
                <div onClick={() => deleteAddress(address)}>삭제</div>
                <div onClick={() => selectWhichAddress(address)}>선택</div>
            </div>
        </div>
    )
}

export default DeliverySelectRow;


const DeliverySelectRow = ({ handleWhichAddress, address }) => {

    return (
        <div className="deliverySelectRow">
            <h4>우리집</h4>
            <p>{address.id} 010-1234-1234</p>
            <p>{address.address1}</p>
            <div className='delivery_select'>
                <div>수정</div>
                <div onClick={() => handleWhichAddress(address)}>선택</div>
            </div>
        </div>
    )
}

export default DeliverySelectRow;
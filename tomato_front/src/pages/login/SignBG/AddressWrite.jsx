const AddressWrite = ({ setAddressBox }) => {
    return (
        <div id="addressWrite">
            <h4>배송지 변경</h4>
            <div onClick={() => setAddressBox(false)} id="exitBt"><i className="fa-solid fa-xmark"></i></div>
        </div>
    );
}

export default AddressWrite;
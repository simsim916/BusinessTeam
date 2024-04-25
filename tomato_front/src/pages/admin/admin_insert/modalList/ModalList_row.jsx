
const ModalList_row = ({ style, item, waitData, changeItemList }) => {


    return (
        <div className="excelColumn" style={{ ...style, }} onClick={() => changeItemList(item)}>
            {Object.keys(item).map((e, i) => (
                <input style={{ ...style, color: waitData && waitData.some(e) ? 'red' : '' }} type="text" name={e} value={item[e] || ''} key={i} readOnly />
            ))}
        </div>
    );
}


export default ModalList_row;
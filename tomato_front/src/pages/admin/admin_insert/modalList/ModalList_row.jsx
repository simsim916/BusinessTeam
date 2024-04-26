
const ModalList_row = ({ style, item, changeItemList, changeList }) => {


    return (
        <div className="excelColumn" style={{ ...style, }} onClick={() => changeItemList(item)}>
            {Object.keys(item).map((e, i) => (
                <input style={{
                    ...style,
                    color: changeList.codeList.length > 0 && changeList.codeList.some(e => e.code === item.code) ? 'red' : ''

                }}
                    type="text" name={e} value={item[e] || ''} key={i} readOnly />
            ))}
        </div>
    );
}


export default ModalList_row;
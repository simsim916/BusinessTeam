
const Admin_data_row = ({ style, item, waitData, changeItemRow }) => {

    return (
        <div className="excelColumn" style={{ ...style, }} onClick={() => changeItemRow(item)}>
            {Object.keys(item).map((e, i) => (
                <input style={{ ...style, }} type="text" name={e} value={item[e] || ''} key={i} readOnly />
            ))}
        </div>
    );
}


export default Admin_data_row;
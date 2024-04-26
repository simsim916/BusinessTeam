
const Admin_insert_row = ({ style, item, waitData, changeSelectEvent }) => {

    return (
        <div className="excelColumn" style={{ ...style, }} onClick={() => changeSelectEvent(item)}>
            {Object.keys(item).map((e, i) => (
                <input style={{ ...style, color: waitData && waitData.some(e) ? 'red' : '' }} type="text" name={e} value={item[e] || ''} key={i} readOnly />
            ))}
        </div>
    );
}


export default Admin_insert_row;
import { useState } from "react";
import "./SelectDataBox.css";

const SelectDataBoxRow = ({ style ,changeItemRow, column, item }) => {
    const [newItem, setNewItem] = useState(item);

    // const changeItem = (event) => {
    //     setNewItem((newItem) => ({
    //         ...newItem,
    //         [event.target.name]: event.target.value
    //     }))

    //     changeItemList(newItem);
    // }


    return (
        <div className="excelColumn" style={{ 
            ...style,
            width: `${column.current.length * 150}px` 
            
            }}>
            {Object.keys(newItem).map((e, i) => (
                <input type="text" name={e} value={item[e]} key={i} readOnly/>
            ))}
            <div><button onClick={() => changeItemRow(item)}>수정</button></div>
        </div>
    );
}


export default SelectDataBoxRow;
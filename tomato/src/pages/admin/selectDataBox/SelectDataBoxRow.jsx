import { useState } from "react";
import "./SelectDataBox.css";

const SelectDataBoxRow = ({ style, changeItemRow, column, item }) => {
    const [newItem, setNewItem] = useState(item);

    // const changeItem = (event) => {
    //     setNewItem((newItem) => ({
    //         ...newItem,
    //         [event.target.name]: event.target.value
    //     }))

    //     changeItemList(newItem);
    // }


    return (
        <div onClick={() => changeItemRow(item)} className="excelColumn" style={{ ...style, }}>
            {Object.keys(newItem).map((e, i) => (
                <input style={{ ...style, }} type="text" name={e} value={item[e]} key={i} readOnly />
            ))}
        </div>
    );
}


export default SelectDataBoxRow;
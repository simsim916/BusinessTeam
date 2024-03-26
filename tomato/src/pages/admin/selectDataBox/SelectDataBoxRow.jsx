import { useState } from "react";
import "./SelectDataBox.css";

const SelectDataBoxRow = ({ column, item, changeItemList }) => {
    const [newItem, setNewItem] = useState(item);

    const changeItem = (event) => {
        setNewItem((newItem) => ({
            ...newItem,
            [event.target.name]: event.target.value
        }))

        changeItemList(newItem);
    }

    return (
        <div className="excelColumn" style={{ width: `${column.current.length * 150}px` }}>
            {Object.keys(newItem).map((e, i) => (
                <input type="text" onChange={changeItem} name={e} value={newItem[e]} key={i} />
            ))}
        </div>
    );
}


export default SelectDataBoxRow;
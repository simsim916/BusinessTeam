import "./InsertDataBox.css";
// import DataColumn from "./DataColumn";
import { useEffect, useState } from 'react';
import axios from 'axios';


const AddDataHead = () => {
    const [column, setColumn] = useState(null);
    const [length2, setLength] = useState(null);
    const [formData, setFormData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`
        ).then(res => {
            setColumn(Object.keys(res.data[0]));
            setLength(1);
        }).catch(err => {
            console.log(err.message)
        })
    }, [])


    const numbers = Array.from({ length: length2 }, (_, index) => index);
    // length 만 변화시켜서 10개씩 등록하기 / 20개 등록하기 이런식으로?


    const handleSubmit = () => {
        axios.post(`http://localhost:8090/item/insert`, formData)
            .then(res => {
                console.log("inserted successfully:", res.data);
            })
            .catch(err => {
                console.error("Error :", err.message);
            });
    };

    const handleInputChange = (e, col) => {
        setFormData({
            ...formData,
            [col]: e.target.value
        });
    };

    return (
        <div id="excelBox">
            <div id="topBox">
                <div style={{ fontWeight: 'bold' }}><i class="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 등록</div>
                <div id="topButtonBox">
                    <div>추가</div>
                    <div onClick={handleSubmit}>등록</div>
                </div>
            </div>
            <div id="excelHead">
                {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i}>{col}</div>) : ""}
            </div>

            {numbers.map((e, i) =>
                <div className="excelData" >
                    {column ? column.map((col, i) => <input onChange={handleInputChange} type="text" style={{ width: `calc(100% / ${column.length})` }} id={col} key={i} />) : ""}
                </div>
            )}
        </div>
    );
}


export default AddDataHead;
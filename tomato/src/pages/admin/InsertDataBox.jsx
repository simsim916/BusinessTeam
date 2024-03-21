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





    // ** axios.post(url , [,data(폼데이터 or JSON데이터)], [,config])

    // 1. json 데이터라서 JSON.stringify(formData) 를 통해 두번째 인자로 전달해줬지만,
    //    컨트롤러에서 받지 못하는 문제
    // const insertAll2 = () => {
    //     console.log(JSON.stringify(formData))
    //     axios.post(`http://localhost:8090/item/insert`, JSON.stringify(formData), {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    //     ).then(res => {
    //         console.log(res.data)
    //     }
    //     ).catch(err => console.log(err.message));
    // }

    // 2. 세번째 인자로 params 라는걸 강제로 인식시켜줘야 한다.
    //   => Controller 에서 정상적으로 받게 된다.
    const insertAll = () => {
        console.log('동작')
        axios.post(`http://localhost:8090/item/insert`, null, {
            params: {
                code: '482211',
                sort1: '대분류',
            }
        });
    }

    // 3. params 라고 강제로 인식 시켜준 후, 작성된 formData를 이용
    // => 인식하지 못한 문제 발생
    const insertAll2 = (e, formData) => {
        console.log(formData)
        axios.post(`http://localhost:8090/item/insert`, null, {
            params: {
                code: formData.code,
                sort1: formData.sort1,
            }
        });
    }

    const checkInputChange = (event, col) => {
        setFormData(formData => ({
            ...formData,
            [col]: event.target.value
        }));
        console.log(formData);
    };


    return (
        <div id="excelBox">
            <div id="topBox">
                <div style={{ fontWeight: 'bold' }}><i class="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 등록</div>
                <div id="topButtonBox">
                    <div>추가</div>
                    <div onClick={insertAll}>등록</div>
                </div>
            </div>
            <div id="excelHead">
                {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i}>{col}</div>) : ""}
            </div>

            {numbers.map((e, i) =>
                <div className="excelData" >
                    {column ? column.map((col, i) => (
                        <input
                            onChange={(event) => checkInputChange(event, col)}
                            type="text"
                            style={{ width: `calc(100% / ${column.length})` }}
                            id={col}
                            key={i}
                        />
                    )) : ""}
                </div>
            )}
        </div>
    );
}


export default AddDataHead;
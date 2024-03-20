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

    // const insertAll = () => {
    //     console.log('동작')
    //     console.log(formData)
    //     console.log('동작')
    //     axios.post(`http://localhost:8090/item/insert`, formData);
    // }

    // 1. 일반적인 post 방식 => post의 두번째 인자에 데이터 보내면 가지 않던게 생각나서 2번 방법
    //    => https://live-everyday.tistory.com/219 << 두번째 인자로 보내면 data를 못받는 문제 발생
    // const insertAll = () => {
    //     axios.post(`http://localhost:8090/item/insert`, formData)
    //         .then(res => {
    //             console.log("inserted successfully:", res.data);
    //         })
    //         .catch(err => {
    //             console.error("Error :", err.message);
    //         });
    // };

    // 1번 블로그에서 제시한 방식
    const insertAll = () => {
        const api = axios.create({
            baseURL: `http://localhost:8090/item`
        })
        api.post(`/insert`, {
            code: 'asd',
            sort1: 'soasd'
        })
    }

    // 2. 세번째 인자로 data 를 전달해도 문제가 생긴다.
    // const insertAll = () => {
    //     console.log('동작')
    //     // console.log(formData)
    //     console.log('동작')
    //     axios.post(`http://localhost:8090/item/insert`, null, {
    //         code: 'asd',
    //         sort1: 'sort1'
    //     });
    // }

    // 3. get방식
    // const insertAll = () => {
    //     axios.get(`http://localhost:8090/item/insert`, formData)
    //         .then(res => {
    //             console.log("inserted successfully:", res.data);
    //         })
    //         .catch(err => {
    //             console.error("Error :", err.message);
    //         });
    // };


    // 문제점 1. 서버와의 연결은 확실히 확인했다. 하지만 이클립스에서 data가 매개변수로 들어가지 않음.
    //           => 관리자도구 NetWork 카테고리에서 데이터(formData)까지 날라가는거 확인
    // 문제점 2. 매개변수로 entity를 넣어도, DTO를 넣어도 계속 null 이 나오는 문제
    // 문제점 3. table 의 컬럼명 'like' 는 예약어라서 insert 불가
    //           => ALTER TABLE item CHANGE `like` likes INT;



    const checkInputChange = (event, col) => {
        setFormData(prevState => ({
            ...prevState,
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
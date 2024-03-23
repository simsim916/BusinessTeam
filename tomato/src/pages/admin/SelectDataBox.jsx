import "./SelectDataBox.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './../components/Error';
import Loading from './../components/Loading';

const SelectDataBox = () => {

    const [formData, setFormData] = useState({});
    const [itemList, setItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [column, setColumn] = useState(null);
    const [lastSort, setLastSort] = useState(null);

    const keyword = '프레시지';
    const sorttype = 'priceD';
    const currpage = '2';
    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`
        ).then(res => {
            setItemList(res.data);
            setColumn(Object.keys(res.data[0]));
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    const saveItem = (newFormData) => {
        console.log(newFormData)
        axios.post(`http://localhost:8090/item/test`, null, {
            params: {
                code: newFormData.code,
                sort1: newFormData.sort1
            }
        });
    };


    const insertAll = () => {
        axios.post(`http://localhost:8090/item/test`, null, {
            params: {
                code: '482211',
                sort1: '대분류',
            }
        });
    }



    const checkInputChange = (event, col) => {
        const value = event.target.value;
        // const targetId = event.target.id; // 입력 요소의 id 속성을 가져옴
        const newFormData = {
            ...formData,
            [col]: value,
            code: document.getElementById('codeInput').value // event.target.id 가 옳지 않은 방법이라는 gpt
        };
        console.log(newFormData);
        console.log('=================================');
        setFormData(newFormData);

        // saveItem 함수 호출하여 params 채우기
        saveItem(newFormData);
    };




    const sortByColumn = (event) => {
        const columnName = event.target.closest('div').id;
        console.log(columnName)
        let sortedList;
        if (columnName != lastSort) {
            sortedList = [...itemList].sort((a, b) => {
                console.log('bb')
                if (typeof a[columnName] === 'string' && typeof b[columnName] === 'string') {
                    return a[columnName].localeCompare(b[columnName]);
                } else {
                    return a[columnName] - b[columnName];
                }
            });
            setLastSort(columnName);
        } else {
            sortedList = [...itemList].sort((b, a) => {
                if (typeof a[columnName] === 'string' && typeof b[columnName] === 'string') {
                    return a[columnName].localeCompare(b[columnName]);
                } else {
                    return a[columnName] - b[columnName];
                }

            });
            setLastSort(null);
        }
        const icon = event.target;
        if (icon.classList.contains('fa-caret-up')) {
            icon.classList.replace('fa-caret-up', 'fa-caret-down');
        } else {
            icon.classList.replace('fa-caret-down', 'fa-caret-up');
        }
        setItemList(sortedList);
    };



    return (
        <>
            <div id="excelBox">
                <div id="topBox">
                    <div>
                        <i className="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 조회
                        &nbsp;&nbsp;
                        <select name="" id="">
                            <option value="">밀키트</option>
                            <option value="">식재료</option>
                        </select>
                        &nbsp;&nbsp;
                        <select name="" id="">
                            <option value="">밀키트</option>
                            <option value="">식재료</option>
                        </select>
                        &nbsp;&nbsp;
                        &nbsp;<input type="text" />
                        &nbsp;&nbsp;<button>검색</button>
                    </div>
                    <div id="topButtonBox">
                        <div onClick={saveItem}>saveItem</div>
                        <div onClick={insertAll}>insertAll</div>
                    </div>
                </div>
                <div id="excelHead">
                    {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i} onClick={sortByColumn}>{col}<i style={{ display: 'inline-block' }} className="fa-solid fa-caret-up"></i></div>) : ""}
                </div>
                <div id="dataListBox">
                    <div>
                        {itemList ?
                            itemList.map((item, i) => (
                                <div className="excelColumn" key={i}>
                                    <input id="codeInput" style={{ width: `calc((100% - 15px) / ${column.length})` }} type="text" value={item.code} readOnly />
                                    {Object.keys(item).slice(1).map((e, j) => (
                                        <input
                                            onChange={(event) => checkInputChange(event, e, i)}
                                            style={{ width: `calc((100% - 15px) / ${column.length})` }}
                                            type="text"
                                            placeholder={item[e]}
                                            key={j}
                                        />
                                    ))}
                                </div>
                            ))
                            : <div>자료가 없습니다.</div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default SelectDataBox;
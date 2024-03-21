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

    // const keyword = '프레시지';
    // const sorttype = 'priceD';
    // const currpage = '2';
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


    const insertAll = () => {
        console.log(formData)
        axios.post(`http://localhost:8090/item/insert`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res.data)
        ).catch(err => console.log(err.message));
    }

    const checkInputChange = (event, col, rowIndex) => {
        const value = event.target.value;
        setFormData((formData) => ({
            ...formData,
            [col]: value,
            code: itemList[rowIndex].code
        }));
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
                            <option value="">--------</option>
                            <option value="">--------</option>
                        </select>
                        &nbsp;&nbsp;
                        &nbsp;<input type="text" />
                        &nbsp;&nbsp;<button>검색</button>
                    </div>
                    <div id="topButtonBox">
                        <div onClick={insertAll}>insertAll</div>
                    </div>
                </div>
                <div id="excelHead">
                    {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i} onClick={sortByColumn}>{col}<i style={{ display: 'inline-block' }} className="fa-solid fa-caret-up"></i></div>) : ""}
                </div>
                <div id="dataListBox">
                    <div id="dataListBox">
                        <div>
                            {itemList ?
                                itemList.map((item, rowIndex) => (
                                    <div className="excelColumn" key={rowIndex}>
                                        <input id='codeInput' style={{ width: `calc((100% - 15px) / ${column.length})` }} type="text" value={item.code} readOnly />
                                        {Object.keys(item).slice(1).map((e, j) => (
                                            <input
                                                name=""
                                                onChange={(event) => checkInputChange(event, e, rowIndex)}
                                                style={{ width: `calc((100% - 15px) / ${column.length})` }}
                                                type="text"
                                                placeholder={item[e]}
                                                key={j}
                                            />
                                        ))}
                                    </div>
                                ))
                                : <Loading />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SelectDataBox;
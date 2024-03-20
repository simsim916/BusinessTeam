import "./SelectDataBox.css";
import DataColumn from "./DataColumn";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Error from './../components/Error';
import Loading from './../components/Loading';

const SelectDataBox = () => {

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
                console.log('aa')
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
                        <i className="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 조회&nbsp;
                        <label>
                            &nbsp;<input type="checkBox" name="sales" id="sales" />&nbsp;sales
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            &nbsp;<input type="checkBox" name="stock" id="stock" />&nbsp;stock
                        </label>
                        &nbsp;&nbsp;
                        &nbsp;<input type="text" />
                        &nbsp;<button>검색</button>
                    </div>
                    <div id="topButtonBox">
                        <div>10개씩 보기</div>
                        <div>50개씩 보기</div>
                        <div>수정</div>
                    </div>
                </div>
                <div id="excelHead">
                    {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i} onClick={sortByColumn}>{col}<i style={{ display: 'inline-block' }} className="fa-solid fa-caret-up"></i></div>) : ""}
                </div>
                <div id="dataListBox">
                    {itemList ?
                        itemList.map((item, i) => <DataColumn style={{ width: `calc((100% - 15px) / ${column.length})` }} item={item} column={column} key={i} />)
                        : <div>자료가 없습니다.</div>
                    }
                </div>
            </div>
            {/* <div id="pagingBox">
                <div onClick={test} data-value="-100"><i className="fa-solid fa-angles-left"></i></div>
                <div onClick={test} data-value="-10"><i className="fa-solid fa-chevron-left"></i></div>
                <div onClick={test} data-value="1">1</div>
                <div onClick={test} data-value="2">2</div>
                <div onClick={test} data-value="3">3</div>
                <div onClick={test} data-value="4">4</div>
                <div onClick={test} data-value="5">5</div>
                <div onClick={test} data-value="10"><i className="fa-solid fa-chevron-right"></i></div>
                <div onClick={test} data-value="100"><i className="fa-solid fa-angles-right"></i></div>
            </div> */}
            {/* 직접 숫자를 적어줄게 아니라, 가져온 데이터에 따라 currpage를 알 수 있어야 한다. */}

        </>
    )
}


export default SelectDataBox;
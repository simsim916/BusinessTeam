import "./SelectDataBox.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PagingBox from "../PagingBox";
import SelectDataBoxRow from './SelectDataBoxRow';

const SelectDataBox = () => {

    console.log(`SelectDataBox 렌더링`);

    const [formData, setFormData] = useState({
        column: 'name',
        keyword: ''
    });
    const column = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [itemList, setItemList] = useState(null);
    const [lastSort, setLastSort] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const itemForm = useRef([]);

    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`
        ).then(res => {
            setItemList(res.data);
            column.current = (Object.keys(res.data[0]));
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    const changeItemList = (data) => {
        let item = itemList.filter((e) => e[column.current[0]] == data[column.current[0]]);
        setItemList((itemList) => [
            ...itemList,
            data
        ])
        let item2 = itemList.filter((e) => e[column.current[0]] == data[column.current[0]]);
        console.log(item)
        console.log(item2)
        console.log(itemList)
    }

    const paging = () => (list, pageNum, size) => {
        if (list != null) {
            const start = size * (pageNum - 1);
            const end = pageNum * size;
            return list.slice(start, end);
        }
    }

    const sortByColumn = (event) => {
        const columnName = event.target.closest('div').id;
        let sortedList;
        if (columnName != lastSort) {
            sortedList = [...itemList].sort((a, b) => {
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
        const icon = event.target.closest('div').children[0];
        if (icon.classList.contains('fa-caret-up')) {
            icon.classList.replace('fa-caret-up', 'fa-caret-down');
        } else {
            icon.classList.replace('fa-caret-down', 'fa-caret-up');
        }
        setItemList(sortedList);
        setCurrPage(1);
    };

    const searchBoxChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
        console.log(formData);
    };
    if (loading) return <Loading />
    if (error) return <Error />
    return (
        <>
            <div id="excelBox" className="containerA">
                <div id="topBox">
                    <div>
                        <h3>
                            <i className="fa-solid fa-list"></i>자료 조회
                        </h3>
                        &nbsp;&nbsp;
                    </div>
                    <form id="topButtonBox">
                        <select name="column" id="column" onChange={searchBoxChange}>
                            {Object.keys(itemList[0]).map((e, i) => (<option key={i} value={e}>{e}</option>))}
                        </select>
                        <input type="text" name="keyword" onChange={searchBoxChange} />
                        <button type="button">검색</button>
                    </form>
                </div>
                <div id="dataListBox">
                    <div id="excelHead" style={{ width: `${column.current.length * 150}px` }}>
                        {column.current ? column.current.map((col, i) => <div id={col} key={i} onClick={sortByColumn}>{col}<i className="fa-solid fa-caret-up"></i></div>) : ""}
                    </div>
                    <div>
                        {
                            paging()(itemList, currPage, limit).map((e, i) => (<SelectDataBoxRow changeItemList={changeItemList} column={column} item={e} key={i} />))
                        }
                    </div>
                </div>
            </div >
            <PagingBox
                limit={limit}
                list={itemList}
                currPage={currPage}
                setCurrPage={setCurrPage} />
        </>
    )
}


export default SelectDataBox;
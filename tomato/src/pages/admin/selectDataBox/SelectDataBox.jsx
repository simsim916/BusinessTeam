import "./SelectDataBox.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PagingBox, { paging } from "../../components/PagingBox";
import SelectDataBoxRow from './SelectDataBoxRow';
import { api } from '../../../model/model';
import { useSelector } from "react-redux";
import ChangeList_Row from './changeList/ChangeList_Row';

const SelectDataBox = ({ myLocation }) => {

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
    const [size, setSize] = useState(25);
    const user = useSelector(state => state.user.data);
    const [selectedItem, setSelectedItem] = useState(null);
    const [changedList, setChangedList] = useState([]);
    const [whichTable, setWhichTable] = useState('/event');

    useEffect(() => {
        api(`${whichTable}/selectwhere?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token)
            .then(res => {
                setItemList(res.data);
                column.current = (Object.keys(res.data[0]));
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setError(true);
            })
        myLocation();
    }, [whichTable])

    const changeTable = (e) => {
        setWhichTable(e.target.value);
        if (e.target.value == '/user') {
            setFormData({
                column: 'id',
                keyword: ''
            })
        } else if (e.target.value == '/event') {
            setFormData({
                column: 'name',
                keyword: ''
            })
        }
        setSelectedItem(null);
        setChangedList([]);
        setItemList([])
    }

    const changeItemRow = (item) => {
        setSelectedItem(item);
    }

    const changeSelectedItem = (e) => {
        setSelectedItem((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
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

    const changeChangedList = () => {
        setChangedList([...changedList, selectedItem]);
        if (whichTable == '/event') {
            setItemList(itemList.map(item =>
                item.code === selectedItem.code ? selectedItem : item
            ));
        } else if (whichTable == '/user') {
            setItemList(itemList.map(item =>
                item.id === selectedItem.id ? selectedItem : item
            ));
        }
    }

    const searchBoxChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const getSearch = (e) => {
        e.preventDefault();
        // api(`/event/eventlist?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token
        api(`${whichTable}/selectwhere?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token
        ).then(res => setItemList(res.data)
        ).catch(err => console.log(err.message))
    }

    const insertData = () => {
        console.log(changedList);
        if (whichTable == '/user') {
            api(`${whichTable}/insertTest`, 'post', JSON.stringify(changedList), user.token)
        } else if (whichTable == '/event') {
            api(`${whichTable}/merge`, 'post', JSON.stringify(changedList), user.token)
        }
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <>
            <div id="topBox">
                <h3>
                    <i className="fa-solid fa-list"></i>자료 조회
                </h3>
                <div id="optionBar">
                    <label htmlFor=""> DATA -&nbsp;
                        <select name="" id="" onChange={changeTable}>
                            <option value="">🍅🍅🍅🍅</option>
                            <option value="/item">상품</option>
                            <option value="/user">회원</option>
                            <option value="/event">이벤트</option>
                        </select>
                    </label>
                    <div id="dataSave" onClick={insertData}>저장</div>
                    <div id="dataSearch">
                        <select name="column" id="column" value={formData.column} onChange={searchBoxChange}>
                            {itemList && itemList.length > 0 && Object.keys(itemList[0]).map((e, i) => (<option key={i} value={e}>{e}</option>))}
                        </select>
                        <input type="text" name="keyword" value={formData.keyword} onChange={searchBoxChange} />
                        <div onClick={getSearch}>검색</div>
                    </div>
                </div>
            </div>
            <div id="excelBox" className="containerA">
                <div className="dataListBox">
                    <div className="excelHead" style={{ width: `${column.current.length * 150}px` }}>
                        {column.current ? column.current.map((col, i) => <div id={col} key={i} onClick={sortByColumn}>{col}<i className="fa-solid fa-caret-up"></i></div>) : null}
                    </div>
                    {paging(itemList, currPage, size).map((e, i) =>
                    (<SelectDataBoxRow
                        changeItemRow={changeItemRow}
                        column={column}
                        item={e} key={i}
                        style={{
                            backgroundColor: (selectedItem && selectedItem === e)
                                ? 'yellow'
                                : (changedList && changedList.some(k => k === e))
                                    ? 'blue'
                                    : ''
                        }}
                    />))}
                </div>
            </div>
            <PagingBox
                limit={size}
                list={itemList}
                currPage={currPage}
                setCurrPage={setCurrPage} />
            <div id="insertObjectBox" className="containerA">
                <div id="updateBox">
                    <h3>
                        <i className="fa-solid fa-list"></i>자료 조회
                    </h3>
                    <div onClick={changeChangedList}>입력</div>
                </div>
                <div className="dataListBox">
                    <div className="excelHead" style={{ width: `${column.current.length * 150}px` }}>
                        {
                            column.current ?
                                column.current.map((col, i) => <div id={col} key={i}>{col}</div>)
                                :
                                null
                        }
                    </div>
                    <div className="ObjectBody">
                        {column.current.map((e, i) => <input onChange={changeSelectedItem} type="text" value={selectedItem ? selectedItem[e] : ''} key={i} id={e} />)}
                    </div>
                </div>
            </div>

        </>
    )
}


export default SelectDataBox;
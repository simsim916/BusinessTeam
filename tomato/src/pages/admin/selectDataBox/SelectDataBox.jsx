import "./SelectDataBox.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PagingBox from "../../components/PagingBox";
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
    const [limit, setLimit] = useState(25);
    const user = useSelector(state => state.user.data);
    const [selectedItem, setSelectedItem] = useState(null);
    const [changedList, setChangedList] = useState([]);

    useEffect(() => {
        api(`/event/eventlist?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token)
            .then(res => {
                setItemList(res.data);
                column.current = (Object.keys(res.data[0]));
                setLoading(false);
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            })
        myLocation();
    }, [])

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

    const changeItemRow = (item) => {
        setSelectedItem(item);
    }

    const changeSelectedItem = (e) => {
        setSelectedItem((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    const changeChangedList = () => {
        if (itemList.some(e => e.code == selectedItem.code)) {
            console.log("있어");
        } else {
            console.log("없어");
        }
        setChangedList([...changedList, selectedItem])
        // setItemList([...itemList, changedList]) // 변경을하면 원본 itemList를 변경시켜주려고 한다.
    }

    console.log(itemList);

    const searchBoxChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const getSearch = (e) => {
        e.preventDefault();
        api(`/event/eventlist?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token
        ).then(res => setItemList(res.data)
        ).catch(err => console.log(err.message))
    }

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
                        <select name="column" id="column" value={formData.column} onChange={searchBoxChange}>
                            {Object.keys(itemList[0]).map((e, i) => (<option key={i} value={e}>{e}</option>))}
                        </select>
                        <input type="text" name="keyword" value={formData.keyword} onChange={searchBoxChange} />
                        <button type="button" onClick={getSearch}>검색</button>
                    </form>
                </div>
                <div id="dataListBox">
                    <div id="excelHead">
                        {column.current ? column.current.map((col, i) => <div id={col} key={i} onClick={sortByColumn}>{col}<i className="fa-solid fa-caret-up"></i></div>) : ""}
                    </div>
                    <div>
                        {itemList.map((e, i) =>
                        (<SelectDataBoxRow
                            changeItemRow={changeItemRow}
                            column={column}
                            item={e} key={i}
                            style={{
                                backgroundColor: (e.code == (selectedItem && selectedItem.code))
                                    ?
                                    changedList.some(i => i.code == e.code)
                                        ?
                                        'blue'
                                        : 'yellow'
                                    :
                                    ''
                            }}
                        />))}
                    </div>
                </div>
            </div>

            <div id="insertObjectBox">
                <div className="ObjectHead">
                    {
                        column.current ?
                            column.current.map((col, i) => <div id={col} key={i}>{col}</div>)
                            :
                            null
                    }
                    <div></div>
                </div>
                <div className="ObjectBody">
                    {column.current.map((e, i) => <input onChange={changeSelectedItem} type="text" value={selectedItem ? selectedItem[e] : ''} key={i} id={e} />)}
                    <div><button onClick={changeChangedList}>입력</button></div>
                </div>
            </div>
            <PagingBox
                limit={limit}
                list={itemList}
                currPage={currPage}
                setCurrPage={setCurrPage} />
        </>
    )
}


export default SelectDataBox;
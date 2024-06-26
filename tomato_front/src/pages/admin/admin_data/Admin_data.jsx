import "./Admin_data.css";
import { useEffect, useRef, useState } from 'react';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PagingBox, { paging } from "../../components/PagingBox";
import SelectDataBoxRow from './Admin_data_row';
import { api } from '../../../model/model';
import { useDispatch, useSelector } from "react-redux";
import { changeAlert } from "../../redux/basic/actions";

const Admin_data = ({ }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        column: 'sort1',
        keyword: ''
    });
    const column = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [itemList, setItemList] = useState(null);
    const [lastSort, setLastSort] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [size, setSize] = useState(25);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const [selectedItem, setSelectedItem] = useState(null);
    const [changedList, setChangedList] = useState([]);
    const [whichTable, setWhichTable] = useState('item');

    useEffect(() => {
        setLoading(true);
        api(`/${whichTable}/selectwhere?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token)
            .then(res => {
                setItemList(res.data);
                column.current = (Object.keys(res.data[0]));
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setError(true);
            })
    }, [whichTable])

    const changeTable = (e) => {
        setCurrPage(1);
        setWhichTable(e.target.value);
        switch (e.target.value) {
            case 'user':
                setFormData({
                    column: 'id',
                    keyword: ''
                })
                break;
            case 'event':
                setFormData({
                    column: 'name',
                    keyword: ''
                })
                break;
            case 'item':
                setFormData({
                    column: 'sort1',
                    keyword: ''
                })
                break;
            case 'address':
                setFormData({
                    column: 'id',
                    keyword: ''
                })
                break;
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
        setItemList(itemList.map(item =>
            item[Object.keys(item)[0]] === selectedItem[Object.keys(selectedItem)[0]] ? selectedItem : item
        ));
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
        api(`/${whichTable}/selectwhere?column=${formData.column}&keyword=${formData.keyword}`, 'get', null, user.token
        ).then(res => {
            setItemList(res.data)
        }
        ).catch(err => {
            console.log(err.message);
            dispatch(changeAlert({
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)'
                },
                title: '검색 자료 없음!!',
                time: 3
            }))

        })
    }

    const handleKeyUp = (event) => {
        if (event.key == 'Enter')
            getSearch(event);
    }

    const insertData = async () => {
        await api(`/${whichTable}/merge`, 'post', JSON.stringify(changedList), user.token)
            .then((res) => {
                dispatch(changeAlert({
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)'
                    },
                    title: '자료 변경 성공!',
                    time: 3
                }))
                setItemList(res.data)
            })
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
                            <option value="item" selected={whichTable=='item'}>상품</option>
                            <option value="user" selected={whichTable == 'user'}>회원</option>
                            <option value="event" selected={whichTable == 'event'}>이벤트</option>
                            <option value="address" selected={whichTable == 'address'}>회원주소</option>
                        </select>
                    </label>
                    <div id="dataSearch">
                        <select name="column" id="column" value={formData.column} onChange={searchBoxChange}>
                            {itemList && itemList.length > 0 && Object.keys(itemList[0]).map((e, i) => (<option key={i} value={e}>{e}</option>))}
                        </select>
                        <input type="text" name="keyword" value={formData.keyword} onKeyUp={handleKeyUp} onChange={searchBoxChange} />
                        <div onClick={getSearch}>검색</div>
                    </div>
                    <div id="dataSave" onClick={insertData}>저장</div>
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
                            backgroundColor:
                                (selectedItem && selectedItem[Object.keys(selectedItem)[0]] === e[Object.keys(e)[0]]) ?
                                    'yellow'
                                    :
                                    null
                            , color:
                                changedList.length > 0 && changedList.some(k => k == e) ?
                                    'red'
                                    :
                                    null
                            // color: changedList.length > 0 && changedList.some(item => item == e) ? 'red' : null
                            // color: changedList.length > 0 && changedList.some(item => item[Object.keys(item)[0]] == e[Object.keys(e)[0]]) ? 'red' : null
                            // color: changedList.length > 0 && changedList.some(item => item[Object.keys(item)[0]] == e[Object.keys(e)[0]][Object.keys(item)[0]]) ? 'red' : null
                            // color: changedList.length > 0 && changedList.some(item => item === e) ? 'red' : ''
                            //  color: (changedList.length > 0 && changedList.some(item => JSON.stringify(item) === JSON.stringify(e))) ? 'red' : null
                            // color: (changedList.length > 0 && changedList.map(item => item.id).includes(e.id)) ? 'red' : null

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
                                column.current.map((col, i) => <div id={col} key={i} >{col}</div>)
                                :
                                null
                        }
                    </div>
                    <div className="ObjectBody">
                        {column.current.map((e, i) => <input onChange={changeSelectedItem} type="text" value={selectedItem ? selectedItem[e] || '' : ''} key={i} id={e} readOnly={i == 0} />)}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Admin_data;
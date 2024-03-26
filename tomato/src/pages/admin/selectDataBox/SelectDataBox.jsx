import "./SelectDataBox.css";
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import PagingBox from "../PagingBox";

const SelectDataBox = () => {

    console.log(`SelectDataBox 렌더링`);
    // admin 페이지 들어오면 이 컴포넌트가 최초로 보이도록 해뒀다.
    // 근데 페이지에 들어오면 렌더링이 두번일어나는데 이유가 뭘까?

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

    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`
        ).then(res => {
            setItemList(res.data);
            // setSearchedList(null)
            column = (Object.keys(res.data[0]));
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])


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
        const icon = event.target;
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
                        <i className="fa-solid fa-list"></i>&nbsp;&nbsp;식자재 조회
                        &nbsp;&nbsp;
                        <select name="" id="">
                            <option value="밀키트">밀키트</option>
                            <option value="식재료">식재료</option>
                        </select>
                        &nbsp;&nbsp;
                        <select name="" id="">
                            <option value="">--------</option>
                            <option value="">--------</option>
                        </select>
                        &nbsp;&nbsp;
                    </div>
                    <div id="topButtonBox">
                        <select name="column" id="column" onChange={searchBoxChange}>
                            {Object.keys(itemList[0]).map((e, i) => (<option key={i} value={e}>{e}</option>))}
                        </select>
                        <input type="text" name="keyword" onChange={searchBoxChange} />
                        <button type="button">검색</button>
                    </div>
                </div>
                <div id="excelHead">
                    {/* {column ? column.map((col, i) => <div id={col} key={i} onClick={sortByColumn}>{col}<i style={{ display: 'inline-block' }} className="fa-solid fa-caret-up"></i></div>) : ""} */}
                </div>
                <div id="dataListBox">
                    <div id="dataListBox">
                        <div>
                            {/* {
                                itemList ?
                                    paging()(itemList, currPage, limit).map((item, rowIndex) => (
                                        <div className="excelColumn" key={rowIndex}>
                                            <input id='codeInput' type="text" value={item.code} readOnly />
                                            {Object.keys(item).slice(1).map((e, j) => (
                                                <input
                                                    name=""
                                                    style={{ width: `calc((100% - 15px) / ${column.length})` }}
                                                    type="text"
                                                    placeholder={item[e]}
                                                    key={j}
                                                />
                                            ))}
                                        </div>
                                    ))
                                    // : <Loading />
                                    : <div>데이터가 너무 많습니다. 검색을 통해 조회하세요</div>
                            } */}
                        </div>
                    </div>
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
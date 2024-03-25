import "./SelectDataBox.css";
import { useEffect, useState } from 'react';
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
    const [itemList, setItemList] = useState(null);
    const [column, setColumn] = useState(null);
    const [lastSort, setLastSort] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [searchedList, setSearchedList] = useState();
    const [listCount, setListCount] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8090/item/allitem`
        ).then(res => {
            // setItemList(res.data);
            // setSearchedList(null)
            setColumn(Object.keys(res.data[0]));
            setListCount(res.data.length);
        }).catch(err => {
            console.log(err.message)
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
            sortedList = [...searchedList].sort((a, b) => {
                if (typeof a[columnName] === 'string' && typeof b[columnName] === 'string') {
                    return a[columnName].localeCompare(b[columnName]);
                } else {
                    return a[columnName] - b[columnName];
                }
            });
            setLastSort(columnName);
        } else {
            sortedList = [...searchedList].sort((b, a) => {
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
        setSearchedList(sortedList);
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



    const test = () => {
        const { column, keyword } = formData;
        let sortType = 'sales';
        // =======================================================================
        // column : 조건 검색 (어떤 컬럼에서 검색할 것인지)
        // size(limit) : 몇 건씩 검색할 것인지
        // page(currPage) : 현재 페이지를 전달해주면 데이터의 
        //                  시작(startNum) 자동 계산해서 size만큼뽑아준다.
        // sortType : 어떤 컬럼을 기준으로 오름차순 내림차순 할 것인지 동적 정렬
        // =======================================================================
        // let keyword = '고기';
        // let column = 'name';
        // let keyword = 50;
        // let column = 'code';
        // =======================================================================
        // ** 우리는 item에서 select 할 때 
        //    item 과 itme_event 테이블에서 join 해서 가져온다. << 중요

        //    이 때, 어떤 컬럼에서 검색할 것인지 동적으로 작동하게 하기위해
        //    column 과 keyword 를 보내주고 ~
        //    query문에서 Expression.stringPath  or numPath 이렇게 동적 검색을 하게되는데
        //    name, code 와 같이 겹치는 컬럼명이 있으면 
        //    "컬럼명이 애매하다는 자바에러코드 발생"
        //    주석처리된 name 컬럼은 작동X
        //    밑에 코드는 작동O
        //    인덱스 페이지에서는 왜 문제가 발생하지 않을까? 하고 코드를 살펴보니
        //    인덱스 페이지의 검색기능은 아직 동적으로 컬럼을 정하는 메서드를 사용하고 있지 않다.
        //    (결론) 테이블 컬럼명 동일한건 item_code, event_code 이런식으로 나눌 필요가 있다.
        // =============================
        // let keyword = '밀키트';
        // let column = 'sort1';
        // axios.get(`http://localhost:8090/item/admin?column=${column}&size=${limit}&page=${currPage}&sortType=${sortType}&keyword=${keyword}`
        axios.get(`http://localhost:8090/item/admin`, {
            params: {
                column: column,
                keyword: keyword,
                sortType: sortType,
                // size: limit,
                page: currPage
            }
        }
        ).then(res => {
            setSearchedList(res.data);
            console.log((res.data).length);
            setCurrPage(1);
        }).catch(err => {
            console.log(err.message);
        })
    }




    return (
        <>
            <div id="excelBox">
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
                        {/* <form> */}
                        <select name="column" id="column" onChange={searchBoxChange}>
                            <option value="name">상품이름</option>
                            <option value="brand">브랜드명</option>
                            <option value="sort1">대분류</option>
                            <option value="sort2">중분류</option>
                            <option value="sort3">소분류</option>
                        </select>
                        <input type="text" name="keyword" onChange={searchBoxChange} />
                        <button onClick={test} type="button">검색</button>
                        {/* </form> */}
                    </div>
                </div>
                <div id="excelHead">
                    {column ? column.map((col, i) => <div style={{ width: `calc(100% / ${column.length})` }} id={col} key={i} onClick={sortByColumn}>{col}<i style={{ display: 'inline-block' }} className="fa-solid fa-caret-up"></i></div>) : ""}
                </div>
                <div id="dataListBox">
                    <div id="dataListBox">
                        <div>
                            {searchedList ?
                                paging()(searchedList, currPage, limit).map((item, rowIndex) => (
                                    <div className="excelColumn" key={rowIndex}>
                                        <input id='codeInput' style={{ width: `calc((100% - 15px) / ${column.length})` }} type="text" value={item.code} readOnly />
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
                            }
                        </div>
                        <PagingBox
                            limit={limit}
                            list={searchedList}
                            currPage={currPage}
                            setCurrPage={setCurrPage} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default SelectDataBox;
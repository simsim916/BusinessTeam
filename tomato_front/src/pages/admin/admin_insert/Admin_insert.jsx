import { useEffect, useState } from 'react';
import './Admin_insert.css'
import { api } from '../../../model/model';
import { useRef } from 'react';
import ModalList from './modalList/ModalList';
import Admin_insert_row from './Admin_insert_row';

const Admin_insert = () => {
    const [whichTable, setWhichTable] = useState('/event');
    const [forSearch, setForSearch] = useState({
        column: 'name',
        keyword: '',
    });
    const [formData, setFormData] = useState({});
    const [data, setData] = useState([]);
    const [waitData, setWaitData] = useState([]);
    const [modal, setModal] = useState(false);

    const user = sessionStorage.getItem('userinfo');
    const column = useRef(null);
    const selectEvent = useRef(null);

    useEffect(() => {
        api(`${whichTable}/selectwhere?column=${forSearch.column}&keyword=${forSearch.keyword}`, 'get', null, user.token)
            .then(res => {
                setData(res.data)
                column.current = Object.keys(res.data[0]);
                const form = {};
                column.current.map(e => form[e] = '')
                setFormData(form);
            })
            .catch(err => console.log(err.message))
    }, [whichTable])

    const changeTable = (e) => {
        setWaitData([]);
        setWhichTable(e.target.value);
        switch (e.target.value) {
            case '/event':
                setForSearch({
                    column: 'name',
                    keyword: ''
                })
                break;
            case '/item':
                setForSearch({
                    column: 'sort1',
                    keyword: ''
                })
                break;
        }
    }

    const changeFormData = (e) => {
        setFormData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    const changeWaitData = () => {
        setWaitData((pre) => [...pre, formData]);
    }

    const insertData = () => {
        waitData.forEach(e => delete e.code);
        api(`${whichTable}/merge`, 'post', waitData, user.token)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err.message));
        setWaitData([]);
    }

    const changeForSearch = (e) => {
        setForSearch(pre => ({
            ...pre,
            [e.target.name]: e.target.value,
        }))
        // if (e.keyCode === 13) getSearch();
    }

    const getSearch = () => {
        api(`${whichTable}/selectwhere?column=${forSearch.column}&keyword=${forSearch.keyword}`, 'get', null, user.token)
            .then(res => {
                setData(res.data)
                // column.current = Object.keys(res.data[0]);
            })
            .catch(err => console.log(err.message))
    }

    const changeSelectEvent = (item) => {
        selectEvent.current = item;
        setModal(!modal);
    }

    return (
        <>
            {modal && <ModalList selectEvent={selectEvent} changeForSearch={changeForSearch} />}
            <div id="topBox">
                <h3>
                    <i className="fa-solid fa-file-import"></i>자료 입력
                </h3>
                <div id="optionBar">
                    <label htmlFor=""> Table -&nbsp;
                        <select name="" id="" onChange={changeTable}>
                            <option value="/event">이벤트</option>
                            <option value="/item">상품</option>
                        </select>
                    </label>
                </div>
            </div>
            
            <div id='totalContainer'>
                <div id='forInsertBox'>
                    {column.current && column.current.map((e, key) =>
                        key != 0 ?
                            <label className='forInsertRow' key={key}>{e}
                                <input name={e} type={e.indexOf('date') != -1 ? "date" : "text"} value={formData[e] || ''} onChange={changeFormData} required />
                            </label>
                            : ""
                    )}
                    <div className='forbuttonBox'><button onClick={changeWaitData}>입력</button><button>초기화</button></div>
                </div>
                <div id='waitInsertBox'>
                    <div id="topBox">
                        <h3>
                            <i className="fa-solid fa-list"></i>자료 조회
                        </h3>
                        <div id="optionBar">
                            <div id="dataSearch">
                                <select name="column" id="column" onChange={changeForSearch}>
                                    {column.current && column.current.map((e, i) => (<option key={i} value={e}>{e}</option>))}
                                </select>
                                <input type="text" name="keyword" onChange={changeForSearch} />
                                <div onClick={getSearch}>검색</div>
                            </div>
                            <div id="dataSave" onClick={insertData}>입력</div>
                        </div>
                    </div>
                    <div className="dataListBox">
                        <div className="excelHead" style={{ width: `${column.current && column.current.length * 150}px` }}>
                            {column.current && (column.current.map((e, key) => <div id={e} key={key}>{e}</div>))}
                        </div>

                        {waitData && waitData.map((e, i) =>
                        (<Admin_insert_row
                            item={e} key={i}
                        />))}
                        {data.slice(0, 100).map((e, i) =>
                        (<Admin_insert_row
                            column={column}
                            item={e} key={i}
                            changeSelectEvent={changeSelectEvent}
                        />))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin_insert;
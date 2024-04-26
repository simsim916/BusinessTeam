import './ModalList.css';
import Admin_data_row from '../../admin_data/Admin_data_row'
import { useEffect, useRef, useState } from 'react';
import { api } from '../../../../model/model';
import { paging } from '../../../components/PagingBox';
import PagingBox from '../../../components/PagingBox';
import ModalList_row from './ModalList_row';


const ModalList = ({ selectEvent }) => {

    const user = JSON.parse(sessionStorage.getItem('userinfo'))
    const column = useRef(null);
    const [list, setList] = useState([])
    const [forSearch, setForSearch] = useState({
        column: 'code',
        keyword: '',
    });
    const [currPage, setCurrPage] = useState(1);
    const [size, setSize] = useState(20);
    const [changeList, setChangeList] = useState({
        eventCode: selectEvent.current.code,
        codeList: [],
    });


    useEffect(() => {
        api(`/item/selectwhere?column=sort1&keyword=`, 'get', null, user.token)
            .then(res => {
                setList(res.data)
                column.current = Object.keys(res.data[0]);
            })
            .catch(err => console.log(err.message))
    }, [])


    const getSearch = () => {
        api(`/item/selectwhere?column=${forSearch.column}&keyword=${forSearch.keyword}`, 'get', null, user.token)
            .then(res => {
                setList(res.data);
                setCurrPage(1);
                console.log(res.data);
            })
            .catch(err => console.log(err.message))
    }

    const changeForSearch = (e) => {
        setForSearch(pre => ({
            ...pre,
            [e.target.name]: e.target.value,
        }))
    }

    const changeItemList = (item) => {
        if (!changeList.codeList.includes(item.code)) {
            setChangeList(pre => ({
                ...pre,
                codeList: [...pre.codeList, { code: item.code }]
            }))
        }
    }

    const postData = () => {
        api(`/item/insertupdate`, 'post', changeList, user.token)
            .then(res => setList(res.data))
            .catch(err => console.log(err.message));
    }


    return (
        <>
            <div id='ModalBG'></div>
            <div id='modalListBox'>
                <div id="topBox">
                    <h3>
                        <i className="fa-solid fa-list"></i>이벤트 상품 선택
                        <span><i class="fa-solid fa-wifi"></i> {selectEvent.current.name} <i class="fa-solid fa-wifi"></i></span>
                    </h3>
                    <div id="optionBar">
                        <div id="dataSearch">
                            <select name="column" id="column" onChange={changeForSearch}>
                                {column.current && column.current.map((e, i) => (<option key={i} value={e}>{e}</option>))}
                            </select>
                            <input type="text" name="keyword" onChange={changeForSearch} />
                            <div onClick={getSearch}>검색</div>
                        </div>
                        <div id="dataSave" onClick={postData}>입력</div>
                    </div>
                </div>
                <div className="dataListBox">
                    <div className="excelHead" style={{ width: `${column.current && column.current.length * 150}px` }}>
                        {column.current && (column.current.map((e, key) => <div id={e} key={key}>{e}</div>))}
                    </div>
                    {list.length > 0 && paging(list, currPage, size).map((e, i) =>
                    (<ModalList_row
                        column={column}
                        item={e} key={i}
                        changeItemList={changeItemList}
                    />))}
                    <PagingBox limit={size} currPage={currPage} setCurrPage={setCurrPage} list={list} />
                </div>
            </div>
        </>
    );
}

export default ModalList;
import './AskBoardBox.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import AskBoardRow from './AskBoardRow';
import ItemAskWrite from './ItemAskWrite';
import PagingBox from './../../../components/PagingBox';


const AskBoardBox = ({ item }) => {
    const [itemAskList, setItemAskList] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [askWrite, setAskWrite] = useState(false);
    const [limit, setLimit] = useState(5);
    const [currPage, setCurrPage] = useState(1);
    const [pageList, setPageList] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemask/select?column=item_code&keyword=${item.code}`
        ).then(res => {
            setItemAskList(res.data);
            setLoading(false);
            setPageList(res.data);
            setCurrPage(1);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [refresh])

    const itemAskClick = () => {
        setAskWrite(!askWrite);
    }

    const paging = () => (list, currPage, limit) => {
        if (list != null) {
            const start = limit * (currPage - 1);
            const end = currPage * limit;
            return list.slice(start, end);
        }
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <>
            <div id="askBoardBox" className="container appearContainer">
                <h5>상품문의</h5>
                <span>상품문의 - 상품에 궁금하신점을 남겨주세요.</span>
                <div onClick={itemAskClick} id="itemAskWrite">문의하기</div>
                <div id="askBoard">
                    <div className="askBoardRow">
                        <div>공개</div>
                        <div>답변</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일자</div>
                    </div>
                    {itemAskList ?
                        paging(pageList, currPage, limit).map((e, i) => <AskBoardRow itemAsk={e} key={i} />)
                        :
                        <div id='askNone'>
                            해당 상품에 문의사항이 없습니다.
                        </div>
                    }
                </div>

                <PagingBox
                    list={pageList}
                    limit={limit}
                    currPage={currPage}
                    setCurrPage={setCurrPage} />
                {askWrite ? <ItemAskWrite refresh={refresh} setRefresh={setRefresh} item={item} itemAskClick={itemAskClick} /> : null}
            </div>
        </>
    );
}

export default AskBoardBox;
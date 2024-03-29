import './AskBoardBox.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';
import AskBoardRow from './AskBoardRow';
import ItemAskWrite from './ItemAskWrite';


const AskBoardBox = ({ item }) => {
    const [itemAskList, setItemAskList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [askWrite, setAskWrite] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemask/select?column=item_ask&keyword=${item.code}`
        ).then(res => {
            setItemAskList(res.data);
            console.log(itemAskList)
            setLoading(false);
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        })
    }, [])

    function itemAskClick() {
        setAskWrite(!askWrite);

    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div id="askBoardBox" className="container appearContainer">
            <h5>상품문의</h5>
            <span>상품문의 - 상품에 궁금하신점을 남겨주세요.</span>
            <div onClick={() => itemAskClick()} id="itemAskWrite">문의하기</div>
            <div id="askBoard">
                <div className="boardRow">
                    <div></div>
                    <div>제목</div>
                    <div>답변</div>
                    <div>작성자</div>
                    <div>작성일자</div>
                </div>

                {
                    !itemAskList ?
                        itemAskList.map((e, i) => <AskBoardRow itemAsk={e} key={i} />)
                        :
                        <div id='askNone'>
                            해당 상품에 문의사항이 없습니다.
                        </div>
                }

            </div>
            <div id="askBoardBtn">
                <i className="fa-solid fa-angles-left"></i>
                <i className="fa-solid fa-angle-left"></i>
                <span> 1 </span>
                <span> 2 </span>
                <span> 3 </span>
                <i className="fa-solid fa-angle-right"></i>
                <i className="fa-solid fa-angles-right"></i>
            </div>
            {askWrite ? <ItemAskWrite item={item} /> : null}
        </div>
    );
}

export default AskBoardBox;
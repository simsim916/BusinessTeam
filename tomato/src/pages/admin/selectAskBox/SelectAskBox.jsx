import "./SelectAskBox.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PagingBox from "../PagingBox";
import WriteReply from "./WriteReply";


const SelectAskBox = () => {



    const [formData, setFormData] = useState({
        column: 'title',
        keyword: ''
    });
    const [askList, setAskList] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [limit, setLimit] = useState(8);
    const currentDate = new Date();
    const [answered, setAnswered] = useState(2);
    const [searchedList, setSearchedList] = useState();
    const [clickReply, setClickReply] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8090/itemask/select`
        ).then(res => {
            setAskList(res.data);
            setSearchedList(res.data);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])

    const paging = () => (list, pageNum, size) => {
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return list.slice(start, end);
    }

    const filteredList = (list, answered) => {
        if (!list) {
            return [];
        }
        if (answered == 0) {
            return list.filter(list => list.privacy == 0);
        } else if (answered == 1) {
            return list.filter(list => list.privacy == 1);
        } else {
            return list;
        }
    }

    const CheckAnswered = (num) => {
        if (answered != num) {
            setAnswered(num);
        } else {
            setAnswered(2);
        }
        setCurrPage(1);
    }

    const searchBoxChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
        console.log(formData)
    };

    const search = (event, list) => {
        if ((formData.keyword).length >= 2) {
            event.preventDefault();
            setSearchedList(list.filter(item => item[formData.column].includes(formData.keyword)));
            setCurrPage(1);
        } else {
            alert('검색어는 2글자 이상!');
        }
    }


    const openAskDetail = () => {
        setClickReply(!clickReply)
    }

    return (
        <div className="container">
            <div id="annTopBox">
                <h3>문의글
                    &nbsp;&nbsp;
                    <label>답변&nbsp;
                        <input
                            type="checkbox"
                            checked={answered == 1}
                            onChange={() => CheckAnswered(1)}
                        />
                    </label>
                    &nbsp;&nbsp;
                    <label>미답변&nbsp;
                        <input
                            type="checkbox"
                            checked={answered == 0}
                            onChange={() => CheckAnswered(0)}
                        />
                    </label>
                </h3>
            </div>
            <div id="announceBoard" className="appearContainer">
                <form onSubmit={(event) => test(event, askList)}>
                    <select name="column" onChange={searchBoxChange}>
                        <option value="title">제목</option>
                        <option value="contents">내용</option>
                        <option value="writer">작성자</option>
                    </select>
                    &nbsp;&nbsp;
                    <input type="text" name="keyword" onChange={searchBoxChange} />
                    <button onClick={(event) => search(event, askList)}><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div>
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>작성일시</div>
                    <div>답변여부</div>
                </div>
                <div onClick="showContent(this)">
                    <div>공지</div>
                    <div>토마토팜 홈페이지 이용시 </div>
                    <div><img src="/tomatoFarmA/resources/img/logo.png" alt="" /></div>
                    <div>2024-02-02</div>
                    <div></div>
                </div>
                <div onClick="showContent(this)">
                    <div>공지</div>
                    <div>명절 배송지연 관련 공지사항</div>
                    <div>홍길동</div>
                    <div>2024-02-02</div>
                    <div></div>
                </div>
                {paging()(filteredList(searchedList, answered), currPage, limit).map((askRow, i) => (
                    <>
                        {clickReply ? <WriteReply askRow={askRow} clickReply={clickReply} setClickReply={setClickReply} /> : null}
                        <div onClick={() => openAskDetail(askRow)} key={i}>
                            <div>{askRow.seq}</div>
                            <div>
                                {askRow.title}
                                {currentDate.getTime() - new Date(askRow.regdate).getTime() <= 3 * 24 * 60 * 60 * 1000
                                    ?
                                    (
                                        <span className="latestAnnounce">
                                            <i className="fa-solid fa-n"></i>
                                        </span>
                                    )
                                    :
                                    null
                                }
                            </div>
                            <div>{askRow.writer}</div>
                            <div>{askRow.regdate}</div>
                            <div>{askRow.privacy === 0 ? '미답변' : '답변'}</div>
                        </div>
                    </>
                ))}

            </div>
            <PagingBox
                limit={limit}
                list={filteredList(searchedList, answered)}
                currPage={currPage}
                setCurrPage={setCurrPage} />

        </div >
    );
}

export default SelectAskBox;
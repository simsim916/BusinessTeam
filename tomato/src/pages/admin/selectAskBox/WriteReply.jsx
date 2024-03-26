
import { useState } from "react";
import "./WriteReply.css";
import axios from 'axios';

const WriteReply = ({ askRow, setClickReply, clickReply }) => {

    const [replyData, setReplyData] = useState(null);

    const closeAskDetail = () => {
        setClickReply(!clickReply);
    }


    const setReply = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
        setReplyData((replyData) => ({
            ...replyData,
            [name]: value,
            'seq': askRow.seq,
            // 'writer': askRow.writer,
            // 'regdate': askRow.regdate,

        }));
        console.log(replyData);
    }


    const submitReview = () => {
        axios.post(`http://localhost:8090/itemask/update`, replyData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log('제출성공')
        }).catch(err => {
            console.log(err.message)
        });
        // 서버단에서 Executing an update/delete query 오류
    }


    return (
        <div id="AskWriteReplyContainer" >
            <div>
                <div className="WriteReplyBox">
                    <div className="ReplyTop">
                        <div>
                            <div><img src={process.env.PUBLIC_URL + '/img/itemImg/5000100_2.jpg'} alt="" /></div>
                            <div style={{ 
                                whiteSpace: 'nowrap' ,
                                height:'auto'
                                }}>
                                <div className="test" style={{ 'borderBottom': '1px solid rgba(128, 128, 128, 0.432);' }}>
                                    <div>
                                        <div>작성자&nbsp;&nbsp;<input type="text" value={askRow.writer} readOnly /></div>
                                    </div>
                                    <div>
                                        <div>작성일&nbsp;&nbsp;<input type="text" value={askRow.regdate} readOnly /></div>
                                    </div>
                                </div>
                                <div className="test">
                                    <div>상품 코드&nbsp;&nbsp;<input type="text" value={askRow.item_code} readOnly /></div>
                                    <div>상품 이름&nbsp;&nbsp;<input type="text" readOnly /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ReplyDetailContainer">
                        <div className="ReplyDetailBox">
                            <div>제목</div>
                            <div><input type="text" value={askRow.title} /></div>
                        </div>
                        <div id="ReplyDetailContents" className="ReplyDetailBox">
                            <div>내용</div>
                            <div><textarea name="" id="" value={askRow.contents}></textarea></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="WriteReplyBox">
                    <div id="ReplyDetailContainer">
                        <div className="ReplyDetailBox">
                            <div>제목</div>
                            <div><input type="text" value={askRow.title} /></div>
                        </div>
                        <div id="ReplyDetailContents" className="ReplyDetailBox">
                            <div>내용</div>
                            <div><textarea name="" id="" value={askRow.contents}></textarea></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default WriteReply;
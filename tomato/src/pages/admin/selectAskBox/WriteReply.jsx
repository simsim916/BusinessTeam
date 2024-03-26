
import { useState } from "react";
import "./WriteReply.css";
import axios from 'axios';

const WriteReply = ({ ask, changeWriteReply }) => {

    const [reply, setReply] = useState('');

    const changeReply = (event) => {
        setReply(event.target.value);
    }


    const submitReview = () => {
        axios.post(`http://localhost:8090/itemask/update`, {
            ...ask,
            reply : reply
        }, {
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
                                whiteSpace: 'nowrap',
                                height: 'auto'
                            }}>
                                <div className="test" style={{ 'borderBottom': '1px solid rgba(128, 128, 128, 0.432);' }}>
                                    <div>
                                        <div>작성자&nbsp;&nbsp;<input type="text" value={ask.writer} readOnly /></div>
                                    </div>
                                    <div>
                                        <div>작성일&nbsp;&nbsp;<input type="text" value={ask.regdate} readOnly /></div>
                                    </div>
                                </div>
                                <div className="test">
                                    <div>상품 코드&nbsp;&nbsp;<input type="text" value={ask.item_code} readOnly /></div>
                                    <div>상품 이름&nbsp;&nbsp;<input type="text" readOnly /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ReplyDetailContainer">
                        <div className="ReplyDetailBox">
                            <div>제목</div>
                            <input type="text" value={ask.title} />
                        </div>
                        <div id="ReplyDetailContents" className="ReplyDetailBox">
                            <div>내용</div>
                            <textarea value={ask.contents}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="WriteReplyBox">
                    <div id="ReplyDetailContainer">
                        <div id="ReplyDetailContents" className="ReplyDetailBox">
                            <div>내용</div>
                            <textarea onChange={changeReply} value={reply}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WriteReply;
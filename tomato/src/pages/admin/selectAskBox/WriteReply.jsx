
import { useState } from "react";
import "./WriteReply.css";
import axios from 'axios';

const WriteReply = ({ ask, setWriteReply }) => {

    const [reply, setReply] = useState('');

    const changeReply = (event) => {
        setReply(event.target.value);
    }


    const submitReview = () => {
        axios.post(`http://localhost:8090/itemask/update`, {
            ...ask,
            reply: reply
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
        closeWriteReply();
    }

    const closeWriteReply = (e) => {
        e.stopPropagation();
        setWriteReply(false);
    }
    return (
        <div id="AskWriteReplyContainer">
            <div>
                <div className="WriteReplyBox">
                    <div className="replyTop">
                        <div className="productIMG"><img src={process.env.PUBLIC_URL + '/img/itemImg/5000100_2.jpg'} alt="" /></div>
                        <div className="itemIntro">
                            <label>상품이름&nbsp;&nbsp;<input type="text" value={`ask.item_code`} readOnly /></label>
                            <label>상품코드&nbsp;&nbsp;<input type="text" value={ask.item_code} readOnly /></label>
                            <label>작성자&nbsp;&nbsp;<input type="text" value={ask.writer} readOnly /></label>
                            <label>작성일&nbsp;&nbsp;<input type="text" value={ask.regdate} readOnly /></label>
                        </div>
                    </div>
                    <div className="replyDetailBox">
                        <label>문의내용
                            <textarea value={ask.contents} readOnly></textarea>
                        </label>
                        <label>답변내용
                            <textarea onChange={changeReply} value={reply}></textarea>
                        </label>
                    </div>
                    <div id="writeButton">
                        <button onClick={closeWriteReply} id="writeCancle">취소</button>
                        <button id="writeEnter">등록</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default WriteReply;
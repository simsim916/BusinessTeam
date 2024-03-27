import { useState } from 'react';
import './AskBoardRow.css';
import axios from 'axios';


const AskBaordRow = ({ itemAsk }) => {
    const [askDetail, setAskDetail] = useState(false);
    const [askPassword, setAskPassword] = useState("");
    const [passwordSubmit, setPasswordSubmit] = useState(false);

    const showContentP = () => {
        // 비밀번호 있는 글 = 비밀번호 확인 후 보여주기
        // 비밀번호 확인을 해야함 -? 어떻게 할껀데
        setAskDetail(!askDetail);
    }

    const checkPassword = (event) => {
        event.stopPropagation();
        axios.post(`http://localhost:8090/itemask/askpassword`, {
            seq: itemAsk.seq,
            password: askPassword,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setPasswordSubmit(true);
        }).catch(err => {

        });
    }

    const showContent = () => {
        console.log('showContent')
        setAskDetail(!askDetail);
    }

    const PasswordChange = (event) => {
        setAskPassword(event.target.value);
    }

    return (
        <div onClick={itemAsk.password == null ? showContent : showContentP} className="boardAnswer">
            <div>
                {
                    itemAsk.password != null ?
                        <i className="fa-solid fa-lock"></i>
                        : <i className="fa-solid fa-lock-open"></i>
                }
            </div>
            {
                itemAsk.reply != null ?
                    <div className="boardAnswer_reply">답변</div>
                    : <div className="boardAnswer_reply">미답변</div>
            }
            <div className="boardAnswer_title">{itemAsk.title}</div>
            <div className="boardAnswer_writer">{itemAsk.writer}</div>
            <div className="boardAnswer_regdate">{itemAsk.regdate}</div>

            {
                askDetail ?
                    itemAsk.password == null ?
                        <div className="boardAnswer_content">{itemAsk.contents}</div>
                        :
                        passwordSubmit ?
                            <div className="boardAnswer_content">{itemAsk.contents}</div>
                            :
                            <div id='passwordCheck'>
                                <input type="password" value={askPassword} onClick={(e) => e.stopPropagation()} onChange={PasswordChange} placeholder="비밀번호 입력" />
                                <button onClick={checkPassword}>확인</button>
                            </div>
                    :
                    null
            }
        </div>
    );
}

export default AskBaordRow;
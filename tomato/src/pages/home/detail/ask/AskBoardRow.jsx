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
        checkPassword();
    }

    const checkPassword = () => {
        axios.post(`http://localhost:8090/itemask/askinsert`, { seq: itemAsk.seq, password: askPassword }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setPasswordSubmit(true);
            showContent();
        }).catch(err => {
        
        });
    }

    const showContent = () => {
        //비밀번호 없는 글 = 보여주기
        setAskDetail(!askDetail);
    }

    const PasswordChange = (event) => {
        setAskPassword(event.target.value);
    }

    return (
        <>
            <div onClick={itemAsk.password ? showContent : showContentP} className="boardAnswer">
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
            </div>
            <div>
                {askDetail &&
                    <div id='passwordCheck'>
                        <input type="password" value={askPassword} onChange={PasswordChange} placeholder="비밀번호 입력" />
                        <button onClick={checkPassword}>확인</button>
                    </div>
                }
                {askDetail && passwordSubmit &&
                    <div className="boardAnswer_content">{itemAsk.contents}</div>
                }
            </div>
        </>
    );
}

export default AskBaordRow;
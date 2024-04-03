import './ChatBotBox.css';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_RESOURCE } from '../../../model/server-config';
import axios from 'axios';

const ChatBotBox = () => {
    const inputBox = useRef(null);
    /* URL에서 채팅방 ID 가져오기 */
    const { userID } = useParams();
    /* 메세지 입력 상태 */
    const [text, setText] = useState({
        type: '단순문의',
        root: null,
        content: '',
        writer: JSON.parse(sessionStorage.getItem('userinfo')).id,
    });
    const [messageAll, setMessageAll] = useState(null)

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const userChatbot = () => {
        setLoading(true)
        axios.post('http://localhost:8090/chatbot/insert', text, {
            headers: 'application/json'
        }).then(res => {
            setLoading(false);
            setMessageAll(res.data);
            setText((prev) => ({
                ...prev,
                root: res.data[0].root,
                content: ''
            }))
            inputBox.current.focus();
        }).catch(err => {
            setLoading(false);
            setError(true);
        });
        
    }

    const changeContent = (event) => {
        setText((prev) => ({
            ...prev,
            content: event.target.value
        }))
    }
    
    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            userChatbot();
        }
    };

    return (
        <div id='ChatBotBox'>
            <div id='ChatBox'>
                <h3>토마토팜 상담챗봇</h3>
                <div id="chatBotTitle">
                    <a href="/tomatoFarm/"><img id="logo" src={SERVER_RESOURCE + "/img/logo2.png"} /></a>
                    <div>고객님, 안녕하세요.</div>
                    <div>무엇을 도와드릴까요?</div>
                    <div >궁금한 내용을 선택하거나, 직접 입력해주세요.</div>
                </div>
                <div className='managerChat'>
                    <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                </div>
                {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
                {/* <div id="openQuestion">
                <h2>항목별 자주 묻는 질문</h2>
                <div id="openQuestionBox">
                    <button>
                        <i class="fa-solid fa-truck"></i>
                        <span>배송</span>
                    </button>
                    <button>
                        <i class="fa-solid fa-cubes"></i>
                        <span>입고</span>
                    </button>
                    <button>
                        <i class="fa-solid fa-gift"></i>
                        <span>이벤트</span>
                    </button>
                </div>
            </div>
            <div id="clickQuestion">
                <h2>인기질문</h2>
                <div id="clickQuestionSelect">
                    <label>포장지 회수</label>
                    <label>취소/교환/환불</label>
                    <label>선물하기</label>
                    <label>셀프픽업</label>
                    <label>시스템오류</label>
                    <label>대량주문</label>
                    <label>회원정보</label>
                </div>
            </div> */}

            </div>
            <div id="chatBotTextBox">
                <input type="text" placeholder="텍스트를 입력해주세요." value={text.content} onChange={(event) => changeContent(event)} ref={inputBox}
                    onKeyUp={handleKeyUp}></input>
                <button onClick={userChatbot}>전송</button>
            </div>
        </div>




    );
}

export default ChatBotBox;
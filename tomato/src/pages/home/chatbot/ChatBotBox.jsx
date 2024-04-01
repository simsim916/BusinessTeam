import './ChatBotBox.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChatBotBox = () => {
    /* URL에서 채팅방 ID 가져오기 */
    const { userID } = useParams();
    /* 메세지 입력 상태 */
    const [text, setText] = useState('');
    /* 채팅 메세지 상태 */
    const [chat, setChat] = useState('');


    const sendMessage = () => {
        if () {
            const messageOBJ = {
                seq: 1,
                writer: manager,
                contents: "안녕하세요",
                
            };
            setText("");
        }
    };





    return (
        <div id='mainDiv'>
            <h3>토마토팜 상담챗봇</h3>
            <div id="chatBotTitle">
                <a href="/tomatoFarm/"><img id="logo" src="/tomatoFarmA/resources/img/logo.png" /></a>
                <div>고객님, 안녕하세요.</div>
                <div>무엇을 도와드릴까요?</div>
                <div id="">궁금한 내용을 선택하거나, 직접 입력해주세요.</div>
            </div>
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

            <div id="chatBotTextBox">
                <input type="text" placeholder="텍스트를 입력해주세요."></input>
                <button onclick="">전송</button>
            </div>
        </div>    





    );
}

export default ChatBotBox;
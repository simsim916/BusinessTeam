import './ChatBotBox.css';
import { useState, useRef, useEffect } from 'react';
import { SERVER_RESOURCE } from '../../../model/server-config';
import { api } from '../../../model/model'
import { Link } from 'react-router-dom';

const ChatBotBox = ({ root, setShowChatbot }) => {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const inputBox = useRef(null);
    /* 메세지 입력 상태 */
    const [text, setText] = useState({
        type: null,
        root: null,
        content: '',
        writer: JSON.parse(sessionStorage.getItem('userinfo')).id,
    });
    const [messageAll, setMessageAll] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getMessageAll = async () => {
            const response = await api(`/chatbot/select?root=${root}`, 'get', null, userinfo.token)
            setMessageAll(response.data);
            setText((prev) => ({
                ...prev,
                root: response.data[0].root,
                content: ''
            }))
        }

        root && getMessageAll()
    }, [])

    const userChatbot = async () => {

        setLoading(true);
        await api('/chatbot/insert', 'post', text, userinfo.token)
            .then(res => {
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

    const changeType = (event) => {
        console.log(event.target.closest('div').children[1].innerText);
        setText((prev) => ({
            ...prev,
            type: event.target.closest('div').children[1].innerText
        }))
    }
    const changeType_Option = (event) => {
        console.log(event.target.innerText)
        setText((prev) => ({
            ...prev,
            type: event.target.innerText
        }))
    };

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
                <h3>
                    토마토팜 상담챗봇
                    {setShowChatbot && <div onClick={() => setShowChatbot()} className="close"><i className="fa-solid fa-xmark"></i></div>}
                </h3>
                <div id="chatBotTitle">
                    <img src={SERVER_RESOURCE + "/img/logo2.png"} />
                    <p>
                        {userinfo.username} 고객님, 안녕하세요.<br />
                        무엇을 도와드릴까요?<br />
                        <span>궁금한 내용을 선택하거나, 직접 입력해주세요.</span>
                    </p>
                </div>
                {/* <div className='managerChat_Intro'>
                    <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                </div> */}

                {
                    !text.type &&
                    <div id="openQuestion">
                        <h2>자주 묻는 질문</h2>
                        <div id="openQuestionBox">
                            <div onClick={changeType}>
                                <i class="fa-solid fa-truck"></i>
                                <span>배송</span>
                            </div>
                            <div onClick={changeType}>
                                <i class="fa-solid fa-cubes"></i>
                                <span>상품</span>
                            </div>
                            <div onClick={changeType}>
                                <i class="fa-solid fa-gift"></i>
                                <span>일반</span>
                            </div>
                        </div>
                    </div>}

                {/* {text.type == '배송' && <div className='managerChat_message' >토마토팜 상품은 당일 오후3시 이전 주문 결제 시, 당일 배송으로 진행되며 이후 주문 결제 시 다음날 배송됩니다.</div>} */}
                {text.type == '배송' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <div onClick={changeType_Option}>배송일정</div>
                            <div>셀프픽업</div>
                            <div>취소/교환/환불</div>
                        </div>
                    </div>
                }
                {/* <div id="clickQuestion">
                    <h2>질문 선택</h2>
                    <div onClick={changeType} id="clickQuestionSelect">
                        <button>포장지 회수</button>
                        <button>취소/교환/환불</button>
                        <button>선물하기</button>
                        <button>셀프픽업</button>
                        <button>시스템오류</button>
                        <button>대량주문</button>
                        <button>회원정보</button>
                    </div>
                </div> */}
                {/* {text.type == '셀프픽업' && 
                     <div className='managerChat_message' >토마토팜 상품은 당일 오후3시 이전 주문 결제 시, 당일 배송으로 진행되며 이후 주문 결제 시 다음날 배송됩니다.</div>
                 } */}
                {text.type == '입고' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <div>재입고 날짜</div>
                            <div>대량주문</div>
                            <div>포장</div>
                        </div>
                    </div>}
                {/* <div className='managerChat_message' >품절 상태인 상품은 5~7일 이내에 재입고 될 예정이며, 자세한 상품 입고 안내는 상품코드를 입력해주세요.</div> */}
                {text.type == '이벤트' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <div>선물하기</div>
                            <div>쿠폰</div>
                            <div>이벤트</div>
                            <div onClick={changeType_Option}>적립금</div>
                        </div>
                    </div>}
                {text.type == '적립금' &&
                    <div className='managerChat_message' >▣ 적립금 지급 시점<br></br>
                        - 주문, 결제 : 배송완료 + 7일 이후 일괄 지급<br></br>
                        - 후기 작성 : 후기 작성 후, 차주 첫 영업일 지급<br></br>
                        - 웰컴/감사 적립금 : 회원가입 후, 첫 주문 시 쿠폰 제공
                    </div>}
                <div id='messageBox'>
                    {messageAll && messageAll.map((e, i) => <p className={e.writer == userinfo.id? 'myChat' : 'otherChat'}>{e.content}</p>)}
                </div>
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
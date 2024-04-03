import './ChatBotBox.css';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { SERVER_RESOURCE } from '../../../model/server-config';
import axios from 'axios';

const ChatBotBox = () => {
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

    const changeType = (event) => {
        console.log(event.target.closest('button').children[1].innerText);
        setText((prev) => ({
            ...prev,
            type: event.target.closest('button').children[1].innerText
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
                <h3>토마토팜 상담챗봇</h3>
                <div id="chatBotTitle">
                    <a href="/tomatoFarm/"><img id="logo" src={SERVER_RESOURCE + "/img/logo2.png"} /></a>
                    <div>고객님, 안녕하세요.</div>
                    <div>무엇을 도와드릴까요?</div>
                    <div >궁금한 내용을 선택하거나, 직접 입력해주세요.</div>
                </div>
                {/* <div className='managerChat_Intro'>
                    <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                </div> */}

                {
                    !text.type &&
                    <div id="openQuestion">
                        <h2>자주 묻는 질문</h2>
                        <div id="openQuestionBox">
                            <button onClick={changeType}>
                                <i class="fa-solid fa-truck"></i>
                                <span>배송</span>
                            </button>
                            <button onClick={changeType}>
                                <i class="fa-solid fa-cubes"></i>
                                <span>입고</span>
                            </button>
                            <button onClick={changeType}>
                                <i class="fa-solid fa-gift"></i>
                                <span>이벤트</span>
                            </button>
                        </div>
                    </div>}

                {text.type == '배송' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <button onClick={changeType_Option}>배송일정</button>
                            <button onClick={changeType_Option}>셀프픽업</button>
                            <button onClick={changeType_Option}>취소/교환/환불</button>
                        </div>
                    </div>
                }
                {text.type == '배송일정' &&
                    <div className='managerChat_message' >토마토팜 상품은 당일 오후3시 이전 주문 결제 시, 당일 배송으로 진행되며 이후 주문 결제 시 다음날 배송됩니다.</div>

                }
                {text.type == '셀프픽업' &&
                    <div className='managerChat_message' >
                        ▣ 셀프픽업 교환권 발급<br></br>
                        - 셀프픽업 상품 구매 후 모바일로 교환권이 발송됩니다.<br></br>
                        - 카카오톡 알림톡으로 발송되며, 혹여 수신 받지 못한 경우 컬리 고객센터로 문의 바랍니다.
                    </div>
                }
                {text.type == '취소/교환/환불' &&
                    <div className='managerChat_message' >
                        ▣ 상품에 문제가 있는 경우<br></br>
                        - 받으신 상품이 표시-광고-내용 또는 계약 내용과 다른 경우에는 상품을 받은 날로부터 3개월 이내, 그 사실을 알게 된 날부터 30일 이내에 교환 및 환불을 요청하실 수 있습니다.<br></br>
                        ※ 상품에 문제가 있는 것으로 확인되면 배송비는 토마토팜에서 부담합니다.
                    </div>
                }
                {text.type != null &&
                    <button id='Back_Chat'>이전 질문으로 돌아가기</button>
                }

                {text.type == '입고' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <button onClick={changeType_Option}>재입고 날짜</button>
                            <button onClick={changeType_Option}>대량 주문</button>
                            <button onClick={changeType_Option}>포장</button>
                        </div>
                    </div>
                }
                {text.type == '재입고 날짜' &&
                    <div className='managerChat_message' >
                        품절 상태인 상품은 5~7일 이내에 재입고 될 예정이며, 자세한 상품 입고 안내는 상품코드를 입력해주세요.
                    </div>
                }
                {text.type == '대량 주문' &&
                    <div className='managerChat_message' >
                        대량 주문은 결제 전 재고 확인 및 결제 방법 & 세금계산서 발행 관련하여 고객센터로 연락 바랍니다.
                    </div>
                }
                {text.type == '포장' &&
                    <div className='managerChat_message' >
                        ▣ 포장재 회수 안내<br></br>
                        - 대상지역 : 수도권 샛별배송 지역 + 토마토팜 레드 박스 주문 건<br></br>
                        - 회수대상 : 토마토팜 레드 박스포장 방법으로 주문시, 발생한 냉장/냉동 포장한 비닐
                        <br></br>
                        ▣ 회수 방법<br></br>
                        ① 상품 수령 후 비닐에서 송장을 제거해주세요.<br></br>
                        ② 다음 주문 시 토마토팜 레드 박스 안에 비닐을 넣어두세요.<br></br>
                        ③ 새로운 주문이 배송 됨과 동시에 배송 기사님께서 레드박스 안의 비닐을 회수합니다.
                    </div>
                }


                {text.type == '이벤트' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <button onClick={changeType_Option}>선물하기</button>
                            <button onClick={changeType_Option}>쿠폰</button>
                            <button onClick={changeType_Option}>적립금</button>
                        </div>
                    </div>}
                {text.type == '선물하기' &&
                    <div className='managerChat_message' >
                        ▣ 선물하기 주문 취소 방법<br></br>
                        선물 수락대기 : 주문자 직접 취소 가능<br></br>
                        - 배송지 입력 후 주문 취소가 필요하다면 컬리 고객센터로 문의해주세요<br></br>
                        - 상품 포장이 시작되었다면 취소가 어려울 수 있다는 점 양해 바랍니다.
                    </div>
                }
                {text.type == '쿠폰' &&
                    <div className='managerChat_message' >
                        ▣ 쿠폰 지급 시점<br></br>
                        - 주문, 결제 : 배송완료 + 7일 이후 일괄 지급<br></br>
                        - 후기 작성 : 후기 작성 후, 차주 첫 영업일 지급<br></br>
                    </div>
                }
                {text.type == '적립금' &&
                    <div className='managerChat_message' >
                        ▣ 적립금 지급 시점<br></br>
                        - 웰컴/감사 적립금 : 회원가입 후, 첫 주문 시 쿠폰 제공<br></br>
                        - 일부 상품의 경우 미지급 품목이므로 구매 시 참고 바랍니다.<br></br>
                        - 적립금 사용 시, 유효기간이 종료일이 가까운 순서대로 먼저 사용바랍니다.
                    </div>
                }
                {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
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
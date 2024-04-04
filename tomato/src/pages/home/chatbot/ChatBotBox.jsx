import './ChatBotBox.css';
import { useState, useRef, useEffect } from 'react';
import { SERVER_RESOURCE } from '../../../model/server-config';
import { api } from '../../../model/model'
import Error from './../../components/Error';
import Loading from './../../components/Loading';

/*
    1. 이전 상담내역 불러오기
    useEffect, api함수 이용해서
    이사람의 토큰을 보내서 아이디로 root가 뭐가 있는지 검색해서 줘야함 ->
*/

const ChatBotBox = ({
    /* admin 페이지 전용 props */
    amount, // admin페이지에서 나타낼 채팅창 갯수
    admin_root, // 현재 컴포넌트의 순번
    changeShowChatbot, // admin페이지 에서 나타낼지 여부 상태값 변경 함수
    /* index 페이지 전용 props */
    setShowChatbot, // index페이지 에서 나타낼지 여부 상태값 변경 함수 
}) => {

    /* 로그인 상태 sessionStorage 값 */
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));

    /* axios 요청 로딩/에러/자료갱신 기능 */
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    /* 메세지 입력 전송 form */
    const [text, setText] = useState({
        type: 2,
        root: null,
        content: '',
        writer: JSON.parse(sessionStorage.getItem('userinfo')).id, // sessionStorage에서 가져온 id
    });

    /* text form 상태값 변경 함수*/
    const changeType = (event) => {
        setText((prev) => ({
            ...prev,
            type: event.target.closest('div').children[1].innerText
        }))
    }

    const changeContent = (event) => {
        setText((prev) => ({
            ...prev,
            content: event.target.value
        }))
    }

    /* 전체 메세지를 받아오는 상태값 변수 */
    const [messageAll, setMessageAll] = useState(null)

    const getMessageAll = async (root) => {
        setLoading(true);
        const response = await api(`/chatbot/select?root=${root}`, 'get', null, userinfo.token)
            .then((res) => { setLoading(false); return res; })
            .catch((err) => { setLoading(false); setError(true); return err; })
        setMessageAll(response.data);
        setText((prev) => ({
            ...prev,
            root: response.data[0].root,
            content: ''
        }))
    }

    /* admin 페이지 에서 데이터 조회시 값 불러오는 함수 */
    useEffect(() => {
        admin_root && getMessageAll(admin_root);
    }, [])

    /* 메세지 입력 input 태그 참조값 */
    const inputBox = useRef(null);

    /* 메세지를 남겼을 때 server DB에 내가 입력한 메세지를 merge하고
        지금 root에 해당되는 전체 메세지를 select 해오는 api 요청 함수 */
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

    /* input 박스에서 엔터키 입력 시 userChatbot함수를 호출하는 handler(함수)  */
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

                {/* {text.type == '배송' && <div className='managerChat_message' >토마토팜 상품은 당일 오후3시 이전 주문 결제 시, 당일 배송으로 진행되며 이후 주문 결제 시 다음날 배송됩니다.</div>} */}
                {text.type == '배송' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <button onClick={changeType_Option}>배송일정</button>
                            <button>셀프픽업</button>
                            <button>취소/교환/환불</button>
                        </div>
                    </>
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
                            <button>재입고 날짜</button>
                            <button>대량주문</button>
                            <button>포장</button>
                        </div>
                    </div>}
                {/* <div className='managerChat_message' >품절 상태인 상품은 5~7일 이내에 재입고 될 예정이며, 자세한 상품 입고 안내는 상품코드를 입력해주세요.</div> */}
                {text.type == '이벤트' &&
                    <div id="clickQuestion">
                        <h2>질문 선택</h2>
                        <div id="clickQuestionSelect">
                            <button>선물하기</button>
                            <button>쿠폰</button>
                            <button>이벤트</button>
                            <button onClick={changeType_Option}>적립금</button>
                        </div>
                    </div>}
                {text.type == '적립금' &&
                    <div className='managerChat_message' >▣ 적립금 지급 시점<br></br>
                        - 주문, 결제 : 배송완료 + 7일 이후 일괄 지급<br></br>
                        - 후기 작성 : 후기 작성 후, 차주 첫 영업일 지급<br></br>
                        - 웰컴/감사 적립금 : 회원가입 후, 첫 주문 시 쿠폰 제공
                    </div>}
                {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
            </div>
            <div id="chatBotTextBox">
                <input type="text" placeholder={!admin_root ? "텍스트를 입력해주세요." : "답변을 입력해주세요."} value={text.content} onChange={(event) => changeContent(event)} ref={inputBox}
                    onKeyUp={handleKeyUp}></input>
                <button onClick={userChatbot}>전송</button>
            </div>
        </div>
    );
}

export default ChatBotBox;
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

    /* 채팅 가져올때 태그 제일 아래로 스크롤 */
    const chatBox = useRef(null);
    useEffect(() => {
        if (chatBox.current)
            chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, [messageAll])

    return (
        <div id='chatBotBox' style={{ height: amount == 2 ? 'calc(50% - 10px)' : '100%' }}>
            <div id='chatBox' ref={chatBox}>
                <h3>
                    {admin_root && <div className='end'>상담종료</div>}
                    {admin_root ? `순번 : ${admin_root}` : '토마토팜 상담챗봇'}
                    {admin_root && <div className="close" onClick={() => changeShowChatbot(admin_root)}><i className="fa-solid fa-xmark"></i></div>}
                    {setShowChatbot && <div onClick={() => setShowChatbot()} className="close"><i className="fa-solid fa-xmark"></i></div>}
                </h3>

                {
                    !messageAll && loading && <Loading />
                }

                {
                    !messageAll && error && <Error />
                }
                {
                    !messageAll && !error && !loading &&
                    <>
                        <div id="chatBotTitle">
                            <img src={SERVER_RESOURCE + "/img/logo2.png"} />
                            <p>
                                {userinfo.username} 고객님, 안녕하세요.<br />
                                무엇을 도와드릴까요?<br />
                                <span>궁금한 내용을 선택하거나, 직접 입력해주세요.</span>
                            </p>
                        </div>
                        <div id="openQuestion">
                            <h2>질문유형</h2>
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
                        </div>
                    </>
                }

                <div id='messageBox'>
                    {messageAll && messageAll.map((e, i) => <p className={e.writer == userinfo.id ? 'myChat' : 'otherChat'}>{e.content}</p>)}
                </div>

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
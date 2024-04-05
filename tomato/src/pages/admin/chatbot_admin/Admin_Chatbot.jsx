import { api } from '../../../model/model';
import './Admin_Chatbot.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import Admin_Chatbot_Row from './Admin_Chatbot_Row';
import ChatBotBox from './../../components/chatbot/ChatBotBox';

const Admin_Chatbot = () => {

    /* 로그인 상태 sessionStorage 값 => api에 토큰을 보내서 server에서 id로 유저 등급을 확인함 */
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'))

    /* 전체 채팅(내용) 목록을 담는 변수 */
    const [rootList, setRootList] = useState(null);

    /* 채팅의 root 번호만 저장하는 함수 */
    const root = useRef([]);

    useEffect(() => {
        const getdata = async () => {
            const response = await api('/chatbot/selectroot?column=root', 'get', null, userinfo.token);
            setRootList(response.data);
            for (let e of response.data) {  // root 변수에 채팅데이터의 root만 중복없이 담기
                if (!root.current.includes(e.root))
                    root.current.push(e.root);
            }
        }
        getdata();
    }, [])

    /* 오른쪽에 나타낼 채팅방의 root번호를 가지고 있는 배열 */
    const [showChatbot, setShowChatbot] = useState([]);

    /* showChatbot 배열에 나타낼 채팅방의 root를 저장하는 배열을 만드는 함수 */
    const changeShowChatbot = (value) => {
        if (showChatbot.includes(value)) {
            setShowChatbot(showChatbot.filter(e => e != value));

        } else {
            if (showChatbot.length < 3) {
                setShowChatbot([...showChatbot, value]);
            }
        }
    }

    return (
        <div id="admin_ChatBotBox">
            <div id="chatBot_Unidentified">
                <h2>ChatBot List</h2>
                <ul id='chatBot_Unidentified_Title'>
                    <li>순번</li>
                    <li>타입</li>
                    <li>진행상황</li>
                    <li>고객 아이디</li>
                    <li>담당자</li>
                    <li>채팅</li>
                </ul>
                <div>
                    {
                        root.current && root.current.map((e, i) => <Admin_Chatbot_Row key={i} root={e} rootList={rootList} showChatbot={showChatbot} changeShowChatbot={changeShowChatbot} />)
                    }
                </div>
            </div>


            <div id='admin_ChatBotContainer'>
                {
                    showChatbot && showChatbot.map((e, i) => <ChatBotBox amount={showChatbot.length} admin_root={e} key={i} changeShowChatbot={changeShowChatbot} />)
                }
            </div>
        </div>


    );
}

export default Admin_Chatbot;
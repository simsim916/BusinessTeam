import { api } from '../../../model/model';
import { SERVER_RESOURCE } from '../../../model/server-config';
import './Admin_Chatbot.css';
import { useEffect, useRef, useState } from 'react';
import Admin_Chatbot_Row from './Admin_Chatbot_Row';
import Admin_Chatbot_Room from './Admin_Chatbot_Room';

const Admin_Chatbot = () => {

    const [rootList, setRootList] = useState(null);
    const [showChatbot, setShowChatbot] = useState([]);
    let root = useRef([]);
    useEffect(() => {
        const getdata = async () => {
            const userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            const response = await api('/chatbot/selectroot?column=root', 'get', null, userinfo.token);
            setRootList(response.data);
            for (let e of response.data) {
                if (!root.current.includes(e.root))
                    root.current.push(e.root);
            }
        }
        getdata();
    }, [])

    const getChatList = () => {
        let result = [];
        for (let e of root.current)
            for (let i of rootList) {
                if (e == i.root) {
                    root.current = root.current.filter(e => e != i.root)
                    result.push(i);
                    break;
                }
            }
        console.log(result)
        return result;
    }

    const changeshowChatbot = (value) => {
        console.log(value)
        if (showChatbot.includes(value)) {
            if (showChatbot.length < 5) {
                setShowChatbot(showChatbot.filter(e => e != value));
            }
        } else
            setShowChatbot([...showChatbot, value]);
    }
    console.log("showChatbot : " + showChatbot)
    return (
        <div id="admin_ChatBotBox">
            <div id="chatBot_Unidentified">
                <div>ChatBot List</div>
                <ul id='chatBot_Unidentified_Title'>
                    <li>순번</li>
                    <li>진행상황</li>
                    <li>고객 아이디</li>
                    <li>담당자</li>
                    <li>채팅</li>
                </ul>
                {
                    root.current && root.current.map((e, i) => <Admin_Chatbot_Row key={i} root={e} rootList={rootList} changeshowChatbot={changeshowChatbot} />)
                }
            </div>


            <div id='admin_ChatBotRoom'>
                {
                    showChatbot && showChatbot.map((e, i) => <Admin_Chatbot_Room key={i} root={e} />)
                }

                <div id='admin_ChatBotRoom_Box'>
                    <h4>첫번째 채팅방</h4>
                    <h4>상담 받는 아이디 : sumi</h4>
                    <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                            <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                        </div>
                    </div>
                    <div id="admin_ChatBotRoom_chatBotTextBox">
                        <input type="text" placeholder="텍스트를 입력해주세요."></input>
                        <button>전송</button>
                    </div>
                    <div id="admin_ChatBotClose"><i className="fa-solid fa-xmark"></i></div>
                </div>

            </div>
        </div>


    );
}

export default Admin_Chatbot;
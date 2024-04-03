import { api } from '../../../model/model';
import { SERVER_RESOURCE } from '../../../model/server-config';
import './Admin_Chatbot.css';
import { useEffect, useState } from 'react';

const Admin_Chatbot = () => {
    
    const [messageAll, setMessageAll] = useState(null)
    const [rootList, setRootList] = useState(null)
    
    useEffect(() => {
        const response = api('/chatbot/selectroot', 'get', null, null);
        console.log(response.data)
    },[])

    

    return (
        <div id="admin_ChatBotBox">
            <div id="chatBot_Unidentified">
                <div>ChatBot List</div>
                <ul id='chatBot_Unidentified_Title'>
                    <li>진행상황</li>
                    <li>고객 아이디</li>
                    <li>담당자</li>
                    <li>채팅</li>
                </ul>
                <ul>
                    <li>상담중</li>
                    <li>아이디 : sumi2</li>
                    <li>김수미</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>미확인</li>
                    <li>아이디 : sumi2</li>
                    <li>담당자 미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>김수미</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담중</li>
                    <li>아이디 : sumi2</li>
                    <li>김수미</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>미확인</li>
                    <li>아이디 : sumi2</li>
                    <li>김수미</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담중</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>미확인</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
                <ul>
                    <li>상담종료</li>
                    <li>아이디 : sumi2</li>
                    <li>미정</li>
                    <li>채팅하기</li>
                </ul>
            </div>


            <div id='admin_ChatBotRoom'>
                <div id='admin_ChatBotRoom_Box'>
                    <h4>첫번째 채팅방</h4>
                    <h4>상담 받는 아이디 : sumi</h4>
                    <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                            <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                        </div>
                        {messageAll && messageAll.map((e, i) => <p className='admin_ChatBotRoom_userChat'>{e.content}</p>)}
                    </div>
                    <div id="admin_ChatBotRoom_chatBotTextBox">
                        <input type="text" placeholder="텍스트를 입력해주세요."></input>
                        <button>전송</button>
                    </div>
                    <div id="admin_ChatBotClose"><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div id='admin_ChatBotRoom_Box'>
                    <h4>두번째 채팅방</h4>
                    <h4>상담 받는 아이디 : sumi</h4>
                    <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                            <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                        </div>
                        {messageAll && messageAll.map((e, i) => <p className='admin_ChatBotRoom_userChat'>{e.content}</p>)}
                    </div>
                    <div id="admin_ChatBotRoom_chatBotTextBox">
                        <input type="text" placeholder="텍스트를 입력해주세요."></input>
                        <button>전송</button>
                    </div>
                    <div id="admin_ChatBotClose"><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div id='admin_ChatBotRoom_Box'>
                    <h4>세번째 채팅방</h4>
                    <h4>상담 받는 아이디 : sumi</h4>
                    <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                            <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                        </div>
                        {messageAll && messageAll.map((e, i) => <p className='admin_ChatBotRoom_userChat'>{e.content}</p>)}
                    </div>
                    <div id="admin_ChatBotRoom_chatBotTextBox">
                        <input type="text" placeholder="텍스트를 입력해주세요."></input>
                        <button>전송</button>
                    </div>
                    <div id="admin_ChatBotClose"><i className="fa-solid fa-xmark"></i></div>
                </div>
                <div id='admin_ChatBotRoom_Box'>
                    <h4>네번째 채팅방</h4>
                    <h4>상담 받는 아이디 : sumi</h4>
                    <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                            <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                        </div>
                        {messageAll && messageAll.map((e, i) => <p className='admin_ChatBotRoom_userChat'>{e.content}</p>)}
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
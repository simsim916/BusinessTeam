import { SERVER_RESOURCE } from '../../../model/server-config';
import './Admin_Chatbot.css';
import { useState } from 'react';

const Admin_Chatbot = () => {

    const [messageAll, setMessageAll] = useState(null)

    return (
        <div id="admin_ChatBotBox">
                <div id="chatBot_Unidentified">
                    <div>상담 진행 상황</div>
                    <ul>
                        <li>상담중</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>미확인</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>상담종료</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>상담중</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>미확인</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>상담종료</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>상담중</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>미확인</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    <ul>
                        <li>상담종료</li>
                        <li>아이디 : sumi2</li>
                        <li>채팅하기</li>
                    </ul>
                    
                </div>
                


            <div id='admin_ChatBotRoom'>
                    <div id='admin_ChatBotRoom_Box'>
                        <h4>첫번째 채팅방</h4>
                        <h4>* 상담 받는 아이디<br></br>sumi</h4>
                        <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                                <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                            </div>
                            {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
                        </div>
                        <div id="admin_ChatBotRoom_chatBotTextBox">
                            <input type="text" placeholder="텍스트를 입력해주세요."></input>
                            <button>전송</button>
                    <div id="admin_ChatBotClose"><i className="fa-solid fa-xmark"></i></div>
                    </div>
                    </div>
                    <div id='admin_ChatBotRoom_Box'>
                        <h4>두번째 채팅방</h4>
                        <h4>* 상담 받는 아이디<br></br>sumi</h4>
                        <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                                <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                            </div>
                            {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
                        </div>
                        <div id="admin_ChatBotRoom_chatBotTextBox">
                            <input type="text" placeholder="텍스트를 입력해주세요."></input>
                            <button>전송</button>
                        </div>
                    </div>
                    <div id='admin_ChatBotRoom_Box'>
                        <h4>세번째 채팅방</h4>
                        <h4>* 상담 받는 아이디<br></br>sumi</h4>
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
                    </div>
                    <div id='admin_ChatBotRoom_Box'>
                        <h4>네번째 채팅방</h4>
                        <h4>* 상담 받는 아이디<br></br>sumi</h4>
                        <div id='admin_ChatBotRoom_ChatBox'>
                        <div className='admin_ChatBotRoom_managerChat'>
                                <div>안녕하세요. 토마토팜입니다.<br></br>무엇을 도와드릴까요?</div>
                            </div>
                            {messageAll && messageAll.map((e, i) => <p className='userChat'>{e.content}</p>)}
                        </div>
                        <div id="admin_ChatBotRoom_chatBotTextBox">
                            <input type="text" placeholder="텍스트를 입력해주세요."></input>
                            <button>전송</button>
                        </div>
                    </div>
                
            </div>
        </div>

        
    );
}

export default Admin_Chatbot;
import { Link } from 'react-router-dom';
import './Home_notice.css'
import { useEffect, useRef } from 'react';

const Home_notice = ({ setNotice }) => {

    return (
        <div id='homeNotice'>
            <div id='content'>
                <h3>환영합니다!</h3>
                <p>저희는 성남그린컴퓨터아카데미에서 <br></br>공부하고 있는 <span style={{fontSize : '1.5em'}}>"Bussiness Team"</span> 입니다.</p>
                <p>저희는 <span style={{ fontSize: '1.5em' }}>쇼핑몰</span>이라는 주제로 <span style={{ fontSize: '1.5em', color:'#9B1B30'}}>프로젝트</span>를 진행하고 있습니다...!!</p>
                <p>무엇이든, 언제든 충고와 피드백을 수용하고 있으니 <br></br><span style={{ fontSize: '1.5em' }}>따뜻한 조언</span> 과 <span style={{ fontSize: '1.5em' }}>충고</span> 부탁드립니다!</p>
                
                <div id='idNotice'>
                    관리자페이지 전용 계정 : ID - admin , PW - 12345!<br></br>
                    일반 계정 : ID - guest , PW - 12345!<br></br>
                    회원가입도 가능하니 한 번 이용해주시면 감사드리겠습니다!
                </div>

                <div id='contactUs'>
                    <Link to="https://github.com/simsim916/BusinessTeam"><i className="fa-brands fa-github"></i> https://github.com/simsim916/BusinessTeam</Link>
                </div>
                <i onClick={() => setNotice(false)} id='closeBTN' className="fa-solid fa-x"></i>
            </div>
        </div>
    );
}

export default Home_notice
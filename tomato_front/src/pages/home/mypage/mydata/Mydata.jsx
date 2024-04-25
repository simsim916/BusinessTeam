
import { useState } from 'react';
import './Mydata.css'

const Mydata = () => {
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);
    const [passwordBox, setPasswordBox] = useState(false);
    const [userData, setUserData] = useState({
        // user
        id: 'simsim916',
        name: '최문석',
        phonenumber: '01074325585',
        point: 1500,
        // user_detail
        email: 'simsim916@naver.com',
        gender: 1,
        birthdate: '1992-10-11',
    })

    const handleChangePassword = () => {
        setPasswordBox(true);
        setPasswordChange(true);
    }

    return (
        <div>
            <div id='privacyBox'>
                <div id='privacy_img'>
                    <img src="" alt="" />
                </div>
                {!passwordChange && passwordBox &&
                    <div id='passwordBox'>
                        <label>
                            비밀번호 확인
                            <input type='password' />
                        </label>
                        <div>확인</div>
                    </div>
                }
                {!passwordChange && !passwordBox &&
                    <ul id='privacy_detail'>
                        {userData.id.length > 0 &&
                            <li>
                                <i className="fa-solid fa-address-card"></i>최문석<span>[ simsim916 ]</span>
                            </li>}
                        {userData.phonenumber.length > 0 &&
                            <li>
                                <i className="fa-solid fa-envelope"></i>asd123@naver.com
                            </li>}
                        <li>
                            <i className="fa-solid fa-phone"></i>asdfasdfasd
                        </li>
                        <li>
                            <i className="fa-solid fa-coins"></i>1234123 포인트
                        </li>
                    </ul>
                }
                {passwordCheck && passwordChange &&
                    <div id='passwordChange'>
                        <label>
                            새로운 비밀번호
                            <input type='password' />
                        </label>
                        <label>
                            새로운 비밀번호 확인
                            <input type='password' />
                        </label>
                        <div>변경</div>
                    </div>
                }
                <div id='privacy_detail_Btn'>
                    <button onClick={handleChangePassword}>비밀번호 변경하기</button>
                    <button onClick={() => setPasswordBox(true)}>내 정보 더보기</button>
                </div>
            </div>
        </div>
    );
}

export default Mydata;
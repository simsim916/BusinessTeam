
import { useEffect, useState } from 'react';
import './Mydata.css'
import { api } from '../../../../model/model';
import { useDispatch } from 'react-redux';
import { changeAlert } from '../../../redux/basic/actions';
import { useNavigate } from 'react-router-dom';

const Mydata = () => {
    // const [passwordCheck, setPasswordCheck] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passwordChange, setPasswordChange] = useState(false);
    const [passwordBox, setPasswordBox] = useState(false);
    const [userData, setUserData] = useState();

    useEffect(() => {
        api(`/user/selectwhere?column=id&keyword=${user.id}`, 'get', null, user.token)
            .then(res => setUserData(res.data[0]))
            .catch(err => console.log(err.message));
    }, [])

    const checkPassword = (e) => {
        const test = e.target.parentNode.children[0].children[0];
        const form = {
            [test.name]: test.value,
        }
        api(`/user/checkpw`, 'post', form, user.token)
            .then(res => {
                setPasswordChange(res.data);
                if (!res.data) {
                    dispatch(changeAlert({
                        title: '비밀번호를 확인 해주세요.',
                        time: 3,
                        style: {
                            top: '10px',
                            left: 'calc(50% - 150px)',
                            position: 'absolute'
                        }
                    }));
                }
            })
    }

    const changePassword = (e) => {
        const pw_1 = e.target.parentNode.children[0].children[0];
        const pw_2 = e.target.parentNode.children[1].children[0];
        if (pw_1.value == pw_2.value) {
            const form = {
                ...userData,
                password: pw_1.value
            }
            api(`/user/modify`, 'post', form, user.token)
                .then(res => {
                    sessionStorage.removeItem('userinfo')
                    navigate('home');
                    dispatch(changeAlert({
                        title: '재로그인 후 이용해주세요.',
                        time: 3,
                        style: {
                            top: '10px',
                            left: 'calc(50% - 150px)',
                            position: 'absolute'
                        }
                    }))
                })
        } else {
            console.log(`bb`);
            dispatch(changeAlert({
                title: '비밀번호가 틀렸습니다.',
                content: '두 비밀번호가 다릅니다.',
                time: 3,
                style: {
                    top: '10px',
                    left: 'calc(50% - 150px)',
                    position: 'absolute'
                }
            }));
        }
    }

    const passwordRule = (event) => {
        let value = event.target.value;
        let message = '';
        let check = false;
        let key = /[a-z.0-9.!-*.@]/gi;

        if (value.length < 4 || value.length > 14) {
            message = `비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.`;
        } else if (value.replace(key, '').length > 0) {
            message = `비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.`;
        } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
            message = `비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.`;
        } else {
            check = true;
        }
        setUserData(pre => ({
            ...pre,
            error: message
        }))
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
                            <input name='password' type='password' />
                        </label>
                        <div onClick={checkPassword}>확인</div>
                    </div>
                }
                {!passwordChange && !passwordBox &&
                    <ul id='privacy_detail'>
                        {userData &&
                            <li>
                                <i className="fa-solid fa-address-card"></i>{userData.name}<span>[ {userData.id} ]</span>
                            </li>}
                        {userData &&
                            <li>
                                <i className="fa-solid fa-envelope"></i>asd123@naver.com
                            </li>}
                        <li>
                            <i className="fa-solid fa-phone"></i>{userData && userData.phonenumber}
                        </li>
                        <li>
                            <i className="fa-solid fa-coins"></i>{userData && userData.point} 포인트
                        </li>
                    </ul>
                }
                {passwordChange &&
                    <>
                        <div id='passwordChange'>
                            <label>
                                새로운 비밀번호
                                <input name='password' type='password'
                                    onChange={(event) => passwordRule(event)}
                                    onBlur={(event) => passwordRule(event)} />
                            </label>
                            <label>
                                새로운 비밀번호 확인
                                <input name='passwordCheck' type='password' />
                            </label>
                            <div id='pwError'>{userData && userData.error}</div>
                            <div onClick={changePassword}>변경</div>
                        </div>
                    </>
                }
                <div id='privacy_detail_Btn'>
                    {/* <button onClick={handleChangePassword}>비밀번호 변경하기</button> */}
                    <button onClick={() => setPasswordBox(!passwordBox)}>비밀번호 변경하기</button>
                    {/* <button onClick={() => setPasswordBox(true)}>내 정보 더보기</button> */}
                </div>
            </div>
        </div>
    );
}

export default Mydata;
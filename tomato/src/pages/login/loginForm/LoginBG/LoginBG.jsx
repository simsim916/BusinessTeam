import { useRef, useState } from 'react';
import './LoginBG.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from '../../../components/Error';
import { SERVER_RESOURCE } from '../../../../model/server-config';
import { api } from '../../../../model/model';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/axios/axios';

const LoginBG = ({ signBox, changeSignBox, checkId, checkPassword, changeOpacity }) => {
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.user);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [loginValue, setLoginValue] = useState({
        value: {
            id: '',
            password: '',
        },
        error: {
            id: null,
            password: null,
        },
        check: {
            id: false,
            password: false,
        },
        isLoginable: false
    })

    const handleInputChange = (event, handle) => {
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
        valueChange(event, result.message, result.check);
        toggleJoinButton();

    }

    const valueChange = (event, message, check) => {
        setLoginValue(loginValue => ({
            ...loginValue,
            value: {
                ...loginValue.value,
                [event.target.name]: event.target.value,
            },
            error: {
                ...loginValue.error,
                [event.target.name]: message
            },
            check: {
                ...loginValue.check,
                [event.target.name]: check
            }
        }))
    }

    const toggleJoinButton = () => {
        loginValue.check.id && loginValue.check.password ?
            setLoginValue(loginValue => ({ ...loginValue, isLoginable: true })) : setLoginValue(loginValue => ({ ...loginValue, isLoginable: false }));
    }

    const requestLogin = async () => {
        await dispatch(fetchData('/user/login', 'post', loginValue.value));


        // api('/user/login', 'post', loginValue.value)
        //     .then(res => {
        //         setLoading(false);
        //         sessionStorage.setItem("loginInfo", JSON.stringify(res));
        //     }).catch(err => {
        //         console.log(err.message)
        //         setLoading(false);
        //         setError(true);
        //     });
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div id="loginBG" style={{ transform: signBox ? 'translate(-100%, 0)' : 'translate(0%, 0)' }}>
            <div>
                <Link to="/"><img id="logo" src={SERVER_RESOURCE + `/img/logo.png`} alt="logo" /></Link>
                <form id="loginBox" action="/tomatoFarm/member/login" method="post">
                    <div id="loginButton">
                        <div>일반 로그인</div>
                        <div>사업자 로그인</div>
                    </div>

                    <div id="idBox">
                        <i className="fa-solid fa-circle-user"></i>
                        <input id="id" type="text" name="id" placeholder="아이디"
                            onKeyUp={(event) => handleInputChange(event, checkId)}
                            onBlur={(event) => handleInputChange(event, checkId)}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="passwordBox">
                        <i className="fa-solid fa-key"></i>
                        <input id="password" type="password" name="password" placeholder="비밀번호"
                            onKeyUp={(event) => handleInputChange(event, checkPassword)}
                            onBlur={(event) => handleInputChange(event, checkPassword)}
                            onFocus={changeOpacity} />
                    </div>
                    <p id="errorBox">
                        <span id="idError"></span>
                        <span id="pwError"></span>
                    </p>

                    <button onClick={requestLogin} type="button" id="loginInBox"
                        style={{ opacity: loginValue.isLoginable ? '1' : '0.3' }} disabled={!loginValue.isLoginable}>로그인</button>
                </form>
                <p id="successOrNot">
                </p>
                <ul id="search">
                    <li>아이디 찾기</li>
                    <li>비밀번호 찾기</li>
                    <li onClick={changeSignBox}>회원가입</li>
                </ul>
            </div>
        </div>
    );
}

export default LoginBG;
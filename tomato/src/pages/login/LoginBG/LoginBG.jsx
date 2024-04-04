import { useEffect, useMemo, useRef, useState } from 'react';
import './LoginBG.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { SERVER_RESOURCE } from '../../../model/server-config';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginRequest, loginSuccess } from '../../redux/user/action';
import { api } from '../../../model/model'
import { getUserCart } from '../../redux/userCart/action';

const LoginBG = ({ checkId, checkPassword, changeOpacity }) => {
    console.log('LoginBG 랜더링')
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        if (event.which == 13) {
            requestLogin();
        }
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
        valueChange(event, result.message, result.check);
    }

    const handelInputBlur = (event, handle) => {
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
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

    useMemo(toggleJoinButton, [loginValue.check]);

    const requestLogin = (loginValue) => {
        return async (dispatch) => {
            const cart = localStorage.getItem('cart');
            dispatch(loginRequest(loginValue.value.id));
            try {
                const response = await api('/user/login', 'post', loginValue.value);
                dispatch(loginSuccess(response.data));
                sessionStorage.setItem('userinfo', JSON.stringify({
                    token: response.data.token,
                    username: response.data.username,
                    login: true,
                    id: response.data.id
                }));
                dispatch(getUserCart('/usercart/merge', 'post', cart, response.data.token))
                localStorage.removeItem('cart');
                navigate("/home");
            } catch (error) {
                console.log(error.response.data);
                dispatch(loginFailure(error.response.data));
                console.log(user)
            }
        }
    }

    const handleLogin = (e) => {
        dispatch(requestLogin(loginValue));
    };

    if (user.loading) return <Loading />

    return (
        <div id="loginBG">
            <div>
                <Link to="/home"><img id="logo" src={SERVER_RESOURCE + `/img/logo.png`} alt="logo" /></Link>
                <form id="loginBox" action="/tomatoFarm/member/login" method="post">
                    <div id="loginButton">
                        <div>일반 로그인</div>
                        <div>사업자 로그인</div>
                    </div>

                    <div id="idBox">
                        <i className="fa-solid fa-circle-user"></i>
                        <input id="id" type="text" name="id" placeholder="아이디"
                            value={loginValue.value.id}
                            onChange={(event) => handleInputChange(event, checkId)}
                            onBlur={(event) => handelInputBlur(event, checkId)}
                            onFocus={changeOpacity} />
                    </div>
                    <div id="passwordBox">
                        <i className="fa-solid fa-key"></i>
                        <input id="password" type="password" name="password" placeholder="비밀번호"
                            value={loginValue.value.password}
                            onChange={(event) => handleInputChange(event, checkPassword)}
                            onBlur={(event) => handelInputBlur(event, checkPassword)}
                            onFocus={changeOpacity} />
                    </div>
                    <p id="errorBox">
                        <span id="idError">{loginValue.error.id}</span>
                        <span id="pwError">{loginValue.error.password}</span>
                        {user.error ? <span id="pwError">{user.error}</span> : null}
                    </p>

                    <button onClick={handleLogin} type="button" id="loginInBox"
                        style={{ opacity: loginValue.isLoginable ? '1' : '0.3' }} disabled={!loginValue.isLoginable}>로그인</button>
                </form>
                <p id="successOrNot">
                </p>
                <ul id="search">
                    <li>아이디 찾기</li>
                    <li>비밀번호 찾기</li>
                    <li>회원가입</li>
                </ul>
            </div>
        </div>
    );
}

export default LoginBG;
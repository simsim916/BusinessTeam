import { Link } from "react-router-dom";
import "./SignBG.css"
import { useState, useRef } from "react";
import axios from 'axios';
import Loading from './../../../components/Loading';
import Error from './../../../components/Error';


const SignBG = ({ changeSignBox, style }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [signValue, setSignValue] = useState({
        value: {
            id: '',
            password: '',
            userName: '',
            phonenumber: '',
            address: '',
            email: '',
            emailBack: '',
            gender: '',
            year: '',
            month: '',
            day: ''
        },
        error: {
            id: null,
            password: null,
            userName: null,
            phonenumber: null,
            address: null,
            email: null,
            emailBack: null,
            gender: null,
            year: null,
            month: null,
            day: null
        },
        check: {
            id: false,
            password: false,
            userName: false,
            phonenumber: false,
        },
        isJoinable: false
    })

    const changeOpacity = (event) => {
        let box = event.target.closest('div')
        for (let e of box.children) {
            e.style.opacity = "1";
        }
        box.style.border = "2px solid #9B1B30";
    }

    const handleInputChange = (event, signValue) => {
        let result = {
            message: '',
            check: false
        }
        switch (event.target.name) {
            case "id":
                result = checkId(event);
                break;
        }
        valueChange(event, result.message, result.check);
    }

    const checkId = (event) => {
        const value = event.target.value;
        const idBox = event.target.closest('div');
        let message = '';
        let check = false;
        let key = /[a-z.0-9.-._]/gi;

        if (value.length < 4 || value.length > 15) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.style.borderBottom = "1px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 4 ~ 15 글자 이하만 가능합니다.`;
        } else if (value.replace(key, '').length > 0) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.style.borderBottom = "1px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.`;
        } else {
            idBox.style.border = "2px solid #03C75A";
            idBox.style.borderBottom = "1px solid #03C75A";
            idBox.children[0].style.color = "#03C75A";
            check = true;
        }
        return {
            message: message,
            check: check
        }
    }

    const valueChange = (event, message, check) => {
        setSignValue(signValue => ({
            ...signValue,
            value: {
                ...signValue.value,
                [event.target.name]: event.target.value,
            },
            error: {
                ...signValue.error,
                [event.target.name]: message
            },
            check: {
                ...signValue.check,
                [event.target.name]: check
            }
        }))
    }

    const toggleJoinButton = () => {
        signValue.check.id && signValue.check.password && signValue.check.userName && signValue.check.phonenumber ?
            setSignValue({ ...signValue, isJoinable: true }) : setSignValue({ ...signValue, isJoinable: false });
    }

    const requestSign = () => {
        axios.post('http://localhost:8090/user/signup/', null, {
            params: {
                id: signValue.value.id,
                password: signValue.value.password,
                name: signValue.value.userName,
                phonenumber: signValue.value.phonenumber,
                address2: signValue.value.address,
                email: signValue.value.email,
                email2: signValue.value.emailBack,
                gender: signValue.value.gender,
                birthdate: signValue.value.year + signValue.value.month + signValue.value.day
            }
        }).then(res => {
            setLoading(false);
            console.log('제출성공')
        }).catch(err => {
            console.log(err.message)
            setLoading(false);
            setError(true);
        });
    }

    if (loading) return <Loading />
    if (error) return <Error />

    return (
        <div id="signBG" style={{ transform: 'translate(-100%, 0)' }} >
            <div id="historyback" onClick={() => changeSignBox()}><i className="fa-solid fa-arrow-left"></i></div>
            <div>
                <Link to="/"><img id="logo" src={process.env.PUBLIC_URL + `/img/logo.png`} alt="logo" /></Link>
                <h3>회원가입</h3>
                <form id="signUpBox" action="signup" method="post">
                    <p id="writeOption"><i className="fa-solid fa-check"></i>&nbsp;&nbsp;필수 입력 사항</p>
                    <div id="idBox">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" name="id" placeholder="아이디" value={signValue.value.id}
                            onChange={(event) => handleInputChange(event, signValue)}
                            onFocus={changeOpacity}
                        />
                    </div>
                    <div id="passwordBox">
                        <i className="fa-solid fa-key"></i>
                        <input type="password" name="password" placeholder="비밀번호" value={signValue.value.password}
                            onChange={(event) => handleInputChange(event)}
                            onBlur={toggleJoinButton}
                        />
                    </div>
                    {/* <div id="nameBox">
                        <i className="fa-solid fa-circle-user"></i>
                        <input
                            type="text"
                            name="name"
                            placeholder="이름"
                            value={name}
                            onChange={(e) => handleInputChange(e, setName)}
                            onBlur={toggleJoinButton}
                        />
                    </div>
                    <div id="phonenumberBox">
                        <i className="fa-solid fa-phone"></i>
                        <input
                            type="text"
                            name="phonenumber"
                            placeholder="전화번호"
                            value={phonenumber}
                            onChange={(e) => handleInputChange(e, setPhonenumber)}
                            onBlur={toggleJoinButton}
                        />
                    </div>
                    <p id="errorBox">
                        <span id="idError"></span>
                        <span id="pwError"></span>
                        <span id="nameError"></span>
                        <span id="pnError"></span>
                    </p>
                    <p id="selectOption"><i className="fa-solid fa-check"></i>&nbsp;&nbsp;선택 입력 사항</p>
                    <div id="addressBox">
                        <i className="fa-solid fa-location-dot"></i>
                        <input
                            type="text"
                            name="address"
                            placeholder="주소"
                            value={address}
                            onChange={(e) => handleInputChange(e, setAddress)}
                        />
                    </div>
                    <div id="emailBox">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="text"
                            name="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => handleInputChange(e, setEmail)}
                        />
                        <i className="fa-solid fa-at"></i>
                        <input
                            type="text"
                            name="emailback"
                            id="emailWriteBox"
                            value={emailBack}
                            onChange={(e) => handleInputChange(e, setEmailBack)}
                        />
                        <select
                            id="emailSelectBox"
                            onChange={(e) => handleInputChange(e, setEmail)}
                        >
                            <option>이메일 선택</option>
                            <option value="naver.com">naver.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="google.com">google.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value=",">직접입력</option>
                        </select>
                    </div>
                    <div id="genderBox">
                        <i className="fa-solid fa-person-half-dress"></i>
                        <span>성별</span>
                        <ul id="genderUl">
                            <label>
                                <li>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="0"
                                        checked={gender === "0"}
                                        onChange={handleGenderChange}
                                    />
                                    남자
                                </li>
                            </label>
                            <label>
                                <li>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="1"
                                        checked={gender === "1"}
                                        onChange={handleGenderChange}
                                    />
                                    여자
                                </li>
                            </label>
                        </ul>
                    </div>
                    <div id="birthdayBox">
                        <i className="fa-solid fa-cake-candles"></i>
                        <input
                            type="text"
                            name="year"
                            placeholder="yyyy"
                            maxLength="4"
                            value={year}
                            onChange={(e) => handleInputChange(e, setYear)}
                        />
                        <input
                            type="text"
                            name="month"
                            placeholder="mm"
                            maxLength="2"
                            value={month}
                            onChange={(e) => handleInputChange(e, setMonth)}
                        />
                        <input
                            type="text"
                            name="day"
                            placeholder="dd"
                            maxLength="2"
                            value={day}
                            onChange={(e) => handleInputChange(e, setDay)}
                        />
                    </div> */}
                    <button type="button" onClick={requestSign} id="joinBox" disabled={!signValue.isJoinable}>가입하기</button>
                </form>
                <br />
                <p id="successOrNot"></p>
            </div>
        </div>
    );
}

export default SignBG;
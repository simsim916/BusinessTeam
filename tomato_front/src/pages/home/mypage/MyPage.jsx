
import './MyPage.css'
import OrderList from './orderList/OrderList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { api } from '../../../model/model';
import { changeAlert } from '../../redux/basic/actions';
import AddressWrite from '../../login/SignBG/AddressWrite';

const MyPage = () => {
    const [privacyModal, setPrivacyModal] = useState(false);
    const [userData, setUserData] = useState({
        userinfo: {

        },
        userAddress: {

        },
        userOrder: []
    });
    const user = JSON.parse(sessionStorage.getItem('userinfo'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [addressBox, setAddressBox] = useState(false)
    const [signValue, setSignValue] = useState({
        value: {
            password: '',
            name: '',
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
            password: null,
            username: null,
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
            password: false,
            username: false,
            phonenumber: false,
        },
        isJoinable: false
    })

    useEffect(() => {
        api(`/user/selectwhere?column=id&keyword=${user.id}`, 'get', null, user.token)
            .then(res => {
                setUserData((pre => ({
                    ...pre,
                    userinfo: res.data[0]
                })))
            })
            .catch(err => console.log(err.message));

        api(`/order/selectwhere`, 'get', null, user.token)
            .then(res => {
                setUserData((pre => ({
                    ...pre,
                    userOrder: res.data
                })))
            })
            .catch(err => console.log(err.message));
    }, [])

    const showMoreOrder = (e) => {
        if (e.target.parentNode.className == 'order_long') {
            e.target.parentNode.className = 'order_short';
        } else {
            e.target.parentNode.className = 'order_long';
        }
    }

    // const deleteUser = () => {
    //     if (confirm("정말 삭제하시겠습니까?")) {
    //         api(`user/delete`, 'get', null, user.token)
    //             .then(res => console.log(res.data))
    //             .catch(err => console.log(err.message));
    //     }
    // }

    //=================================================================================


    const changeOpacity = (event) => {
        let box = event.target.closest('div')
        box.style.zIndex = '2';
        for (let e of box.children) {
            e.style.opacity = "1";
        }
        box.style.border = "2px solid #9B1B30";
    }

    const handleInputChange = (event, handle) => {
        if (event.target.id == 'emailSelectBox' && event.target.value == "") {
            event.target.style.display = 'none';
            event.target.previousElementSibling.style.display = 'initial';
        }
        let box = event.target.closest('div')
        box.style.zIndex = '1';
        let result = {
            message: '',
            check: false
        }
        if (handle) result = handle(event);
        valueChange(event, result.message, result.check);
        toggleJoinButton();
    }

    const checkId = (event) => {
        const value = event.target.value;
        const idBox = event.target.closest('div');
        let message = '';
        let check = false;
        let key = /[a-z.0-9.-._]/gi;

        if (value.length < 4 || value.length > 15) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 4 ~ 15 글자 이하만 가능합니다.`;
        } else if (value.replace(key, '').length > 0) {
            idBox.style.border = "2px solid #FF3F3F";
            idBox.children[0].style.color = "#FF3F3F";
            message = `아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.`;
        } else {
            idBox.style.border = "2px solid #03C75A";
            idBox.children[0].style.color = "#03C75A";
            check = true;
        }
        return {
            message: message,
            check: check
        }
    }

    const checkPassword = (event) => {
        let value = event.target.value;
        const passwordBox = event.target.closest('div');
        let message = '';
        let check = false;
        let key = /[a-z.0-9.!-*.@]/gi;

        if (value.length < 4 || value.length > 14) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.`;
        } else if (value.replace(key, '').length > 0) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.`;
        } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
            passwordBox.style.border = "2px solid #FF3F3F";
            passwordBox.children[0].style.color = "#FF3F3F";
            message = `비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.`;
        } else {
            passwordBox.style.border = "2px solid #03C75A";
            passwordBox.children[0].style.color = "#03C75A";
            check = true;
        }

        return {
            message: message,
            check: check
        }
    }

    const checkName = (event) => {
        let value = event.target.value;
        const nameBox = event.target.closest('div');
        let message = '';
        let check = false;
        if (value.length < 2 || value.length > 10) {
            nameBox.style.border = "2px solid #FF3F3F";
            nameBox.children[0].style.color = "#FF3F3F";
            message = `이름 : 2글자 이상 10글자 이하로 입력하세요.`;
        } else if (value.replace(/[a-z.가-힣]/gi, '').length > 0) {
            nameBox.style.border = "2px solid #FF3F3F";
            nameBox.children[0].style.color = "#FF3F3F";
            message = `이름은 한글, 영문만 입력하세요.`;
        } else {
            nameBox.style.border = "2px solid #03C75A";
            nameBox.children[0].style.color = "#03C75A";
            check = true;
        }
        return {
            message: message,
            check: check
        }
    }

    const checkPhonenumber = (event) => {
        let value = event.target.value;
        const phonenumberBox = event.target.closest('div');
        let message = '';
        let check = false;

        if (value.length < 10 || value.length > 11) {
            phonenumberBox.style.border = "2px solid #FF3F3F";
            phonenumberBox.children[0].style.color = "#FF3F3F";
            message = `전화번호는 9자리 ~ 12자리 숫자로 입력해주세요.`;
        } else if (value.replace(/[0-9]/gi, '').length > 0) {
            phonenumberBox.style.border = "2px solid #FF3F3F";
            phonenumberBox.children[0].style.color = "#FF3F3F";
            message = `전화번호는 숫자만 입력하세요.`;
        } else {
            check = true;
            phonenumberBox.style.border = "2px solid #03C75A";
            phonenumberBox.children[0].style.color = "#03C75A";
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
        signValue.check.id && signValue.check.password && signValue.check.username && signValue.check.phonenumber ?
            setSignValue(signValue => ({ ...signValue, isJoinable: true })) : setSignValue(signValue => ({ ...signValue, isJoinable: false }));
    }

    const selectGender = (event) => {
        event.target.closest('#genderBox').style.border = "2px solid #9B1B30";
        for (let e of event.target.closest('div').children) {
            e.style.opacity = "1";
        }
        if (document.getElementById('checked')) document.getElementById('checked').removeAttribute('id');
        event.target.closest('li').setAttribute('id', 'checked');
    }

    const requestSign = () => {
        const signForm = {
            id: signValue.value.id,
            password: signValue.value.password,
            name: signValue.value.name,
            phonenumber: signValue.value.phonenumber,
            addressCode: '',
            address1: '',
            address2: '',
            email: signValue.value.email + '@' + signValue.value.emailBack,
            gender: signValue.value.gender,
            birthdate: new Date(`${signValue.value.year}-${signValue.value.month}-${signValue.value.day}`),
        }
        api('/user/signup', 'post', signForm)
            .then(res => {
                setLoading(false);
                dispatch(changeAlert({
                    title: '회원가입 성공!',
                    content: `로그인 후 홈페이지를 이용해주세요!`,
                    time: 3,
                    style: {
                        top: '10px',
                        left: 'calc(50% - 150px)',
                        position: 'absolute'
                    }
                }));
                navigate('/member')
            }).catch(err => {
                console.log(err.message)
                setLoading(false);
                setError(true);
            });
    }

    return (
        <div id='mypageContainer' className='container'>
            <div id='privacyBox'>
                <div id='privacy_img'>
                    <img src="" alt="" />
                </div>
                <div id='privacy_detail'>
                    <div>
                        <div><span><i className="fa-solid fa-address-card"></i></span>{userData && userData.userinfo.id}</div>
                        <div><span></span>[ {userData && userData.userinfo.name} ]</div>
                    </div>
                    <div>
                        <div><span><i className="fa-solid fa-envelope"></i></span>asd123@naver.com</div>
                    </div>
                    <div>
                        <div><span><i className="fa-solid fa-phone"></i></span>{userData && userData.userinfo.phonenumber}</div>
                    </div>
                    <div>
                        <div><span><i className="fa-solid fa-coins"></i></span>{userData && userData.userinfo.point} 포인트</div>
                    </div>
                    <div id='privacy_detail_Btn'>
                        <button onClick={() => setPrivacyModal(!privacyModal)}>개인정보 수정</button>
                        <button>회원탈퇴</button>
                    </div>
                </div>
            </div>
            <div id='orderList' className='order_short'>
                <OrderList />
                <div id='moreInfo' onClick={showMoreOrder}>
                    더 보 기
                </div>
            </div>
            {privacyModal &&
                <div id='modalBG'>
                    <div id="signBG">
                        <div id="historyback"></div>
                        {addressBox && <AddressWrite setAddressBox={setAddressBox} />}
                        <div>
                            <form id="signUpBox" action="signup" method="post">
                                <div id="idBox">
                                    <i className="fa-solid fa-user"></i>
                                    <input type="text" name="id" placeholder="아이디" value={userData && userData.userinfo.id} readOnly
                                        onChange={(event) => handleInputChange(event, checkId)}
                                        onBlur={(event) => handleInputChange(event, checkId)}
                                        onFocus={changeOpacity} />
                                </div>
                                <div id="passwordBox">
                                    <i className="fa-solid fa-key"></i>
                                    <input type="password" name="password" placeholder="비밀번호" value={signValue.value.password} autoComplete="false"
                                        onChange={(event) => handleInputChange(event, checkPassword)}
                                        onBlur={(event) => handleInputChange(event, checkPassword)}
                                        onFocus={changeOpacity} />
                                </div>
                                <div id="nameBox">
                                    <i className="fa-solid fa-circle-user"></i>
                                    <input type="text" name="username" placeholder="이름" value={userData && userData.userinfo.name}
                                        onChange={(event) => handleInputChange(event, checkName)}
                                        onBlur={(event) => handleInputChange(event, checkName)}
                                        onFocus={changeOpacity} />
                                </div>
                                <div id="phonenumberBox">
                                    <i className="fa-solid fa-phone"></i>
                                    <input type="text" name="phonenumber" placeholder="전화번호" value={userData && userData.userinfo.phonenumber}
                                        onChange={(event) => handleInputChange(event, checkPhonenumber)}
                                        onBlur={(event) => handleInputChange(event, checkPhonenumber)}
                                        onFocus={changeOpacity} />
                                </div>
                                <div id="errorBox">
                                    {signValue.error.id ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.id}</p> : <></>}
                                    {signValue.error.password ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.password}</p> : <></>}
                                    {signValue.error.username ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.username}</p> : <></>}
                                    {signValue.error.phonenumber ? <p><i className="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;{signValue.error.phonenumber}</p> : <></>}
                                </div>
                                <div id="addressBox" onClick={() => setAddressBox(true)}>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <input type="text" name="address" placeholder="주소" value={signValue.value.address}
                                        onChange={handleInputChange}
                                        onFocus={changeOpacity} />
                                </div>
                                <div id="emailBox">
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="text" name="email" placeholder="이메일" value={signValue.value.email}
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange} />
                                    <i className="fa-solid fa-at"></i>
                                    <input type="text" name="emailBack" id="emailWriteBox" value={signValue.value.emailBack}
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange} />
                                    <select id="emailSelectBox" name="emailBack"
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange} >
                                        <option value="no">이메일 선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="daum.net">daum.net</option>
                                        <option value="google.com">google.com</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="">직접입력</option>
                                    </select>
                                </div>
                                <div id="genderBox">
                                    <i className="fa-solid fa-person-half-dress"></i>
                                    <span>성별</span>
                                    <ul id="genderUl">
                                        <label>
                                            <li onClick={selectGender}>
                                                <input type="radio" name="gender" value="0" checked={signValue.value.gender === "0"}
                                                    onChange={handleInputChange} />
                                                남자
                                            </li>
                                        </label>
                                        <label>
                                            <li onClick={selectGender}>
                                                <input type="radio" name="gender" value="1" checked={signValue.value.gender === "1"}
                                                    onChange={handleInputChange}
                                                />
                                                여자
                                            </li>
                                        </label>
                                    </ul>
                                </div>
                                <div id="birthdayBox">
                                    <i className="fa-solid fa-cake-candles"></i>
                                    <input type="number" name="year" placeholder="yyyy" maxLength="4" value={signValue.value.year}
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange}
                                    />
                                    <input type="number" name="month" placeholder="mm" maxLength="2" value={signValue.value.month}
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange}
                                    />
                                    <input type="number" name="day" placeholder="dd" maxLength="2" value={signValue.value.day}
                                        onFocus={changeOpacity}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div id='changeBtnBox'>
                                    <button type="button" onClick={requestSign} class="changeBtn" style={{ opacity: signValue.isJoinable ? '1' : '0.3' }} disabled={!signValue.isJoinable}>수정하기</button>
                                    <button type="button" onClick={() => setPrivacyModal(!privacyModal)} class="changeBtn" >취소하기</button>
                                </div>
                            </form>
                            <br />
                            <p id="successOrNot"></p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MyPage;
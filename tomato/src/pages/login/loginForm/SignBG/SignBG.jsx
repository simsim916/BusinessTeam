import { Link } from "react-router-dom";
import "./SignBG.css"


const SignBG = ({ changeSignBox, style, test }) => {
    // function changeOpacityName(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     if (event.which == 13) {
    //         event.preventDefault();
    //         phonenumberBox.children[1].focus();
    //     }
    // }

    // function checkName(event) {
    //     let value = event.target.value;
    //     if (value.length < 2 || value.length > 10) {
    //         nameCheck = false;
    //         nameBox.style.border = "2px solid #FF3F3F";
    //         nameBox.style.borderTop = "1px solid #FF3F3F";
    //         nameBox.style.borderBottom = "1px solid #FF3F3F";
    //         nameBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('nameError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;이름 : 2글자 이상 10글자 이하로 입력하세요.<br>`;
    //     } else if (value.replace(/[a-z.가-힣]/gi, '').length > 0) {
    //         nameCheck = false;
    //         nameBox.style.border = "2px solid #FF3F3F";
    //         nameBox.style.borderTop = "1px solid #FF3F3F";
    //         nameBox.style.borderBottom = "1px solid #FF3F3F";
    //         nameBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('nameError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;이름은 한글, 영문만 입력하세요.<br>`;
    //     } else {
    //         nameCheck = true;
    //         nameBox.style.border = "2px solid #03C75A";
    //         nameBox.style.borderBottom = "1px solid #03C75A";
    //         nameBox.style.borderTop = "1px solid #03C75A";
    //         nameBox.children[0].style.color = "#03C75A";
    //         document.getElementById('nameError').innerHTML = '';
    //     }
    //     checkAll();
    // }//checkName

    // function changeOpacityPn(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     if (event.which == 13) {
    //         event.preventDefault();
    //         addressBox.children[1].focus();
    //     }
    // } //changeOpacityPn

    // function checkPhonenumber(event) {
    //     let value = event.target.value;
    //     if (value.length < 10 || value.length > 11) {
    //         phoneCheck = false;
    //         phonenumberBox.style.border = "2px solid #FF3F3F";
    //         phonenumberBox.style.borderTop = "1px solid #FF3F3F";
    //         phonenumberBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('pnError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;전화번호는 9자리 ~ 12자리 숫자로 입력해주세요.<br>`;
    //     } else if (value.replace(/[0-9]/gi, '').length > 0) {
    //         phoneCheck = false;
    //         phonenumberBox.style.border = "2px solid #FF3F3F";
    //         phonenumberBox.style.borderTop = "1px solid #FF3F3F";
    //         phonenumberBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('pnError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;전화번호는 숫자만 입력하세요.<br>`;
    //     } else {
    //         phoneCheck = true;
    //         phonenumberBox.style.border = "2px solid #03C75A";
    //         phonenumberBox.style.borderTop = "1px solid #03C75A";
    //         phonenumberBox.children[0].style.color = "#03C75A";
    //         document.getElementById('pnError').innerHTML = '';
    //     }
    //     checkAll();
    // }//checkPhonenumber

    // function checkAll() {
    //     if (idCheck == true && pwCheck == true && nameCheck == true && phoneCheck == true) {
    //         document.getElementById('joinBox').style.opacity = "1";
    //         document.getElementById('joinBox').disabled = false;
    //     } else {
    //         document.getElementById('joinBox').style.opacity = "0.5";
    //         document.getElementById('joinBox').disabled = true;
    //     }
    // }

    // function changeOpacityAddress(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     if (event.which == 13) {
    //         event.preventDefault();
    //         emailBox.children[1].focus();
    //     }
    // }

    // function changeOpacityEmail(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     if (event.which == 13) {
    //         event.preventDefault();
    //         emailSelectBox.focus();
    //     }
    // }

    // function changeSelectBox(event) {
    //     if (event.target.value == "write") {
    //         emailSelectBox.style.display = "none";
    //         emailWriteBox.style.display = "inline-block";
    //         emailWriteBox.focus();
    //         return;
    //     }
    //     console.log(emailback.value)
    //     emailback.value = event.target.value;
    //     console.log(emailback.value)
    // }//changeSelectBox

    // function changeOpacity(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    // }

    // function selectGender(event) {
    //     let value = event.target.value;
    //     for (let e of event.target.closest('div').children) {
    //         e.style.opacity = "1";
    //         e.style.color = "black";
    //     }
    //     if (document.getElementById('genderChecked') != null) {
    //         document.getElementById('genderChecked').removeAttribute("id");
    //     }
    //     event.target.closest('li').setAttribute("id", "genderChecked");
    //     birthdayBox.focus();
    // }//selectGender

    // function changeOpacity2(event) {
    //     event.target.closest('div').children[0].style.opacity = "1";
    //     event.target.style.opacity = "1";
    // }

    // async function requestSign() {
    //     let idValue = idBox.children[1].value;
    //     let pwdValue = passwordBox.children[1].value;
    //     let nameValue = nameBox.children[1].value;
    //     let phonenumberValue = phonenumberBox.children[1].value;
    //     let addressValue = addressBox.children[1].value;
    //     let emailFrontValue = emailBox.children[1].value;
    //     let emailBackValue = emailback.value;
    //     let genderValue;
    //     for (let t of genderName) {
    //         if (t.checked == true) {
    //             genderValue = t.value;
    //         }
    //     }
    //     let birthdateValue
    //         = birthdayBox.children[1].value
    //         + birthdayBox.children[2].value
    //         + birthdayBox.children[3].value;



    //     let uri = "user/signup";

    //     let response = await axios.post(uri, null, {
    //         params: {
    //             id: idValue,
    //             password: pwdValue,
    //             name: nameValue,
    //             phonenumber: phonenumberValue,
    //             address2: addressValue,
    //             email: emailFrontValue,
    //             email2: emailBackValue,
    //             gender: genderValue,
    //             birthdate: birthdateValue
    //         }
    //     });

    function empty() {
        console.log('야호');
    }




    return (
        <>
            <div id="signBG" style={style}>
                {/* <div onclick={clickLogin} id="historyback"><i class="fa-solid fa-arrow-left"></i></div> */}
                <div onClick={changeSignBox} id="historyback"><i class="fa-solid fa-arrow-left"></i></div>
                <div>
                    <Link to="/"><img id="logo" src={process.env.PUBLIC_URL + "/img/logo.png"}></img></Link>
                    <h3>회원가입</h3>
                    <form id="signUpBox" action="signup" method="post">
                        <p id="writeOption"><i class="fa-solid fa-check"></i>&nbsp;&nbsp;필수 입력 사항</p>
                        <div id="idBox">
                            <i class="fa-solid fa-user"></i>
                            <input onkeydown={empty} onblur={empty} onfocus={empty}
                                // <input onkeydown={changeOpacityId} onblur={checkId} onfocus={focusInputBox}
                                type="text" name="id" placeholder="아이디" />
                        </div>
                        <div id="passwordBox">
                            <i class="fa-solid fa-key"></i>
                            {/* <input onkeydown={changeOpacityPw} onblur={checkPassword} onfocus={focusInputBox} */}
                            <input onkeydown={empty} onblur={empty} onfocus={empty}
                                autocomplete="off" type="password" name="password" placeholder="비밀번호" />
                        </div>
                        <div id="nameBox">
                            <i class="fa-solid fa-circle-user"></i>
                            {/* <input onkeydown={changeOpacityName} onblur={checkName} onfocus={focusInputBox} */}
                            <input onkeydown={empty} onblur={empty} onfocus={empty}
                                type="text" name="name" placeholder="이름" />
                        </div>
                        <div id="phonenumberBox">
                            <i class="fa-solid fa-phone"></i>
                            <input onkeydown={empty} onblur={empty} onfocus={empty}
                                type="text" name="phonenumber" placeholder="전화번호" />
                        </div>
                        <p id="errorBox">
                            <span id="idError"></span>
                            <span id="pwError"></span>
                            <span id="nameError"></span>
                            <span id="pnError"></span>
                        </p>
                        <p id="selectOption"><i class="fa-solid fa-check"></i>&nbsp;&nbsp;선택 입력 사항</p>
                        <div id="addressBox">
                            <i class="fa-solid fa-location-dot"></i>
                            {/* <input onkeydown={changeOpacityAddress} type="text" name="address" placeholder="주소" /> */}
                            <input onkeydown={empty} type="text" name="address" placeholder="주소" />
                        </div>
                        <div id="emailBox">
                            <i class="fa-solid fa-envelope"></i>
                            {/* <input onkeydown={changeOpacityEmail} type="text" name="email" placeholder="이메일" /><i */}
                            <input onkeydown={empty} type="text" name="email" placeholder="이메일" /><i
                                class="fa-solid fa-at"></i>
                            {/* <input onkeydown={changeOpacityEmail} type="text" name="emailback" id="emailWriteBox" /> */}
                            <input onkeydown={empty} type="text" name="emailback" id="emailWriteBox" />
                            {/* <select onchange={changeSelectBox} id="emailSelectBox"> */}
                            <select onchange={empty} id="emailSelectBox">
                                <option>이메일 선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="google.com">google.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value=",">직접입력</option>
                            </select>
                        </div>
                        <div id="genderBox">
                            <i class="fa-solid fa-person-half-dress"></i>
                            <span>성별</span>
                            <ul id="genderUl">
                                <label>
                                    <li>
                                        {/* <input onkeydown={changeOpacity} onclick={selectGender} type="radio" */}
                                        <input onkeydown={empty} onclick={empty} type="radio"
                                            name="gender" value="0" />남자
                                    </li>
                                </label>
                                <label>
                                    <li>
                                        {/* <input onkeydown={changeOpacity} onclick={selectGender} type="radio" */}
                                        <input onkeydown={empty} onclick={empty} type="radio"
                                            name="gender" value="1" />여자
                                    </li>
                                </label>
                            </ul>
                        </div>
                        <div id="birthdayBox">
                            <i class="fa-solid fa-cake-candles"></i>
                            {/* <input onkeydown={changeOpacity2} type="text" name="year" placeholder="yyyy" maxlength="4" />
                            <input onkeydown={changeOpacity2} type="text" name="month" placeholder="mm" maxlength="2" />
                            <input onkeydown={changeOpacity2} type="text" name="day" placeholder="dd" maxlength="2" /> */}
                            <input onkeydown={empty} type="text" name="year" placeholder="yyyy" maxlength="4" />
                            <input onkeydown={empty} type="text" name="month" placeholder="mm" maxlength="2" />
                            <input onkeydown={empty} type="text" name="day" placeholder="dd" maxlength="2" />
                        </div>
                        {/* <button type="button" onclick={requestSign} id="joinBox" disabled>가입하기</button> */}
                        <button type="button" onclick={empty} id="joinBox" disabled>가입하기</button>
                    </form>
                    <br />
                    <p id="successOrNot">
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignBG;
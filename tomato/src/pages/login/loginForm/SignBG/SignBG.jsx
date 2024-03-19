

const SignBG = () => {



    return (
        <>
            <div id="signBG">
                <div onclick="clickLogin()" id="historyback"><i class="fa-solid fa-arrow-left"></i></div>
                <div>
                    <a href="/tomatoFarm/"><img id="logo" src="/resources/img/logo.png"></img></a>
                    <h3>회원가입</h3>
                    <form id="signUpBox" action="signup" method="post">
                        <p id="writeOption"><i class="fa-solid fa-check"></i>&nbsp;&nbsp;필수 입력 사항</p>
                        <div id="idBox">
                            <i class="fa-solid fa-user"></i>
                            <input onkeydown="changeOpacityId(event)" onblur="checkId(event)" onfocus="focusInputBox(event)"
                                type="text" name="id" placeholder="아이디" />
                        </div>
                        <div id="passwordBox">
                            <i class="fa-solid fa-key"></i>
                            <input onkeydown="changeOpacityPw(event)" onblur="checkPassword(event)" onfocus="focusInputBox(event)"
                                autocomplete="off" type="password" name="password" placeholder="비밀번호" />
                        </div>
                        <div id="nameBox">
                            <i class="fa-solid fa-circle-user"></i>
                            <input onkeydown="changeOpacityName(event)" onblur="checkName(event)" onfocus="focusInputBox(event)"
                            type="text" name="name" placeholder="이름" />
                        </div>
                        <div id="phonenumberBox">
                            <i class="fa-solid fa-phone"></i>
                            <input onkeydown="changeOpacityPn(event)" onblur="checkPhonenumber(event)"
                            onfocus="focusInputBox(event)" type="text" name="phonenumber" placeholder="전화번호">
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
                            <input onkeydown="changeOpacityAddress(event)" type="text" name="address" placeholder="주소" />
                        </div>
                        <div id="emailBox">
                            <i class="fa-solid fa-envelope"></i>
                            <input onkeydown="changeOpacityEmail(event)" type="text" name="email" placeholder="이메일"><i
                            class="fa-solid fa-at"></i>
                            <input onkeydown="changeOpacityEmail(event)" type="text" name="emailback" id="emailWriteBox">
                            <select onchange="changeSelectBox(event)" id="emailSelectBox">
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
                            {/* <label> */}
                                <li>
                                    <input onkeydown="changeOpacity(event)" onclick="selectGender(event)" type="radio"
                                    name="gender" value="0" />남자
                                </li>
                            {/* </label> */}
                            {/* <label> */}
                                <li>
                                <input onkeydown="changeOpacity(event)" onclick="selectGender(event)" type="radio"
                                name="gender" value="1" />여자
                                </li>
                            {/* </label> */}
                            </ul>
                        </div>
                        <div id="birthdayBox">
                            <i class="fa-solid fa-cake-candles"></i>
                            <input onkeydown="changeOpacity2(event)" type="text" name="year" placeholder="yyyy" maxlength="4" />
                            <input onkeydown="changeOpacity2(event)" type="text" name="month" placeholder="mm" maxlength="2" />
                            <input onkeydown="changeOpacity2(event)" type="text" name="day" placeholder="dd" maxlength="2" />
                        </div>
                        <button type="button" onclick="requestSign()" id="joinBox" disabled>가입하기</button>
                    </form>
                    <br />
                    <p id="successOrNot">
                    </p>
                </div>
            </div>
        </>
        );
}
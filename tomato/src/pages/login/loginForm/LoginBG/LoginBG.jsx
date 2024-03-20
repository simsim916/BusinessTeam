import { useRef } from 'react';
import './LoginBG.css';
import { Link } from 'react-router-dom';

const LoginBG = () => {

    // let idCheck = false;
    // let pwCheck = false;

    // let idInput = useRef(null);
    // let pwInput = useRef(null);
    // let idBox = useRef(null);
    // let passwordBox = useRef(null);
    // let errorBox = useRef(null);
    // function selectLoginType(ele) {
    //     idInput.value = "";
    //     pwInput.value = "";
    //     idBox.style.border = "1px solid #564f45";
    //     idBox.style.borderBottom = "0.5px solid #564f45";
    //     idBox.children[0].style.color = "black";
    //     idBox.children[0].style.opacity = "0.3";
    //     passwordBox.style.border = "1px solid #564f45";
    //     passwordBox.style.borderTop = "0.5px solid #564f45";
    //     passwordBox.children[0].style.color = "black";
    //     passwordBox.children[0].style.opacity = "0.3";
    //     for (let e of errorBox.children) {
    //         e.innerText = '';
    //     }
    //     if (ele.innerText == "일반 로그인") {
    //         ele.style.backgroundColor = "#9B1B30 ";
    //         ele.style.borderBottom = "none";
    //         ele.style.color = "white";
    //         ele.nextElementSibling.style.backgroundColor = "white";
    //         ele.nextElementSibling.style.color = "black";
    //         ele.nextElementSibling.style.borderBottom = "1px solid #564f45";
    //     } else {
    //         ele.style.backgroundColor = "#9B1B30 ";
    //         ele.style.borderBottom = "none";
    //         ele.style.color = "white";
    //         ele.previousElementSibling.style.backgroundColor = "white";
    //         ele.previousElementSibling.style.color = "black";
    //         ele.previousElementSibling.style.borderBottom = "1px solid #564f45";
    //     }
    // } //selectLoginType



    // function changeOpacityPw(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     return true;
    // } //changeOpacityId

    // function checkId(event) {
    //     console.log(idBox);
    //     let value = event.target.value;
    //     let key = /[a-z.0-9.-._]/gi;

    //     if (value.length < 4 || value.length > 15) {
    //         idCheck = false;
    //         idBox.style.border = "2px solid #FF3F3F";
    //         idBox.style.borderBottom = "1px solid #FF3F3F";
    //         idBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;
    //     } else if (value.replace(key, '').length > 0) {
    //         idCheck = false;
    //         idBox.style.border = "2px solid #FF3F3F";
    //         idBox.style.borderBottom = "1px solid #FF3F3F";
    //         idBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.<br>`;
    //     } else {
    //         idCheck = true;
    //         idBox.style.border = "2px solid #03C75A";
    //         idBox.style.borderBottom = "1px solid #03C75A";
    //         idBox.children[0].style.color = "#03C75A";
    //         document.getElementById('idError').innerHTML = '';
    //     }
    //     checkAll();
    // }//checkId

    // function checkPassword(event) {
    //     let value = event.target.value;
    //     let key = /[a-z.0-9.!-*.@]/gi;

    //     if (value.length < 4 || value.length > 14) {
    //         pwCheck = false;
    //         passwordBox.style.border = "2px solid #FF3F3F";
    //         passwordBox.style.borderTop = "1px solid #FF3F3F";
    //         passwordBox.style.borderBottom = "1px solid #FF3F3F";
    //         passwordBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.<br>`;
    //     } else if (value.replace(key, '').length > 0) {
    //         pwCheck = false;
    //         passwordBox.style.border = "2px solid #FF3F3F";
    //         passwordBox.style.borderTop = "1px solid #FF3F3F";
    //         passwordBox.style.borderBottom = "1px solid #FF3F3F";
    //         passwordBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.<br>`;
    //     } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
    //         pwCheck = false;
    //         passwordBox.style.border = "2px solid #FF3F3F";
    //         passwordBox.style.borderTop = "1px solid #FF3F3F";
    //         passwordBox.style.borderBottom = "1px solid #FF3F3F";
    //         passwordBox.children[0].style.color = "#FF3F3F";
    //         document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.<br>`;
    //     } else {
    //         pwCheck = true;
    //         passwordBox.style.border = "2px solid #03C75A";
    //         passwordBox.style.borderTop = "1px solid #03C75A";
    //         passwordBox.style.borderBottom = "1px solid #03C75A";
    //         passwordBox.children[0].style.color = "#03C75A";
    //         document.getElementById('pwError').innerHTML = '';

    //     }
    //     checkAll();
    // }//checkPassword

    // function focusInputBox(event) {
    //     let box = event.target.closest('div');
    //     for (let e of box.children) {
    //         e.style.opacity = "1";
    //     }
    //     box.style.border = "2px solid #9B1B30";
    // } //focusInputBox 
    // // => 로그인 회원가입에 모두 필요한 메서드라면 
    // //    Login/Sign의 부모컴포넌트에 주고 뿌려주는게 맞는걸까?

    // async function requestLogin() {
    //     idInput = document.getElementById("id");
    //     pwInput = document.getElementById("password");
    //     errorBox = document.getElementById('errorBox');
    //     let id = document.getElementById('id').value;
    //     let password = document.getElementById('password').value;
    //     let uri = `user/login`;
    //     let data = {
    //         id: id,
    //         password: password
    //     }
    //     let response = await axios.post(uri, null, {
    //         params: {
    //             id: id,
    //             password: password
    //         }
    //     });
    // }

    // function writeSign() {
    //     document.getElementById('loginBG').style.transform = "translate(-100%,0)";
    //     document.getElementById('signBG').style.transform = "translate(-100%,0)";
    //     document.getElementById('signBG').style.zIndex = '2';
    // }empty

    function empty() {
    }

    return (
        <>
          
        </>
    );
}

export default LoginBG;
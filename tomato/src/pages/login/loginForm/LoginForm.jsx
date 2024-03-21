import './LoginForm.css'
import LoginBG from "./LoginBG/LoginBG";
import SignBG from "./SignBG/SignBG";
import { useState } from 'react';

const LoginForm = () => {
  const [signBox, setSignBox] = useState(false);

  const changeSignBox = () => {
    setSignBox(!signBox);
  }

  const checkId = (event) => {
    const value = event.target.value;
    const idBox = event.target.closest('div');
    let message = '';
    let check = false;
    let key = /[a-z.0-9.-._]/gi;

    if (value.length < 4 || value.length > 15) {
      idBox.style.border = "2px solid #FF3F3F";
      // idBox.style.borderBottom = "1px solid #FF3F3F";
      idBox.children[0].style.color = "#FF3F3F";
      message = `아이디 : 4 ~ 15 글자 이하만 가능합니다.`;
    } else if (value.replace(key, '').length > 0) {
      idBox.style.border = "2px solid #FF3F3F";
      // idBox.style.borderBottom = "1px solid #FF3F3F";
      idBox.children[0].style.color = "#FF3F3F";
      message = `아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.`;
    } else {
      idBox.style.border = "2px solid #03C75A";
      // idBox.style.borderBottom = "1px solid #03C75A";
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
      // passwordBox.style.borderTop = "1px solid #FF3F3F";
      // passwordBox.style.borderBottom = "1px solid #FF3F3F";
      passwordBox.children[0].style.color = "#FF3F3F";
      message = `비밀번호 : 4 ~ 15 글자 이하만 입력해주세요.`;
    } else if (value.replace(key, '').length > 0) {
      passwordBox.style.border = "2px solid #FF3F3F";
      // passwordBox.style.borderTop = "1px solid #FF3F3F";
      // passwordBox.style.borderBottom = "1px solid #FF3F3F";
      passwordBox.children[0].style.color = "#FF3F3F";
      message = `비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.`;
    } else if (value.replace(/[!-*.@]/gi, '').length >= value.length) {
      passwordBox.style.border = "2px solid #FF3F3F";
      // passwordBox.style.borderTop = "1px solid #FF3F3F";
      // passwordBox.style.borderBottom = "1px solid #FF3F3F";
      passwordBox.children[0].style.color = "#FF3F3F";
      message = `비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.`;
    } else {
      passwordBox.style.border = "2px solid #03C75A";
      // passwordBox.style.borderTop = "1px solid #03C75A";
      // passwordBox.style.borderBottom = "1px solid #03C75A";
      passwordBox.children[0].style.color = "#03C75A";
      check = true;
    }

    return {
      message: message,
      check: check
    }
  }

  const changeOpacity = (event) => {
    let box = event.target.closest('div')
    for (let e of box.children) {
      e.style.opacity = "1";
    }
    box.style.border = "2px solid #9B1B30";
  }


  return (
    <>
      <div id="bodyBG" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/signup/signupBGI.png)` }}></div>
      <div id="contentBox">
        <LoginBG signBox={signBox} changeSignBox={changeSignBox}
          checkId={checkId} checkPassword={checkPassword} 
          changeOpacity={changeOpacity}/>
        <SignBG signBox={signBox} changeSignBox={changeSignBox} />
      </div>
    </>
  );
}


export default LoginForm;
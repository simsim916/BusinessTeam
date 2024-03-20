import './LoginForm.css'
import LoginBG from "./LoginBG/LoginBG";
import SignBG from "./SignBG/SignBG";
import { useState } from 'react';
// import { useReducer } from 'react';

// function reducer(state, action){
//     switch (action.type) {
//         case "Create": { return [action.newItem, ...state] }
//         case "Update": {  }
//         case "Delete": { }
//         default: return state;
//     };
// }



// // let functions = {


//   changeOpacityId: (event) => {
//     let box = event.target.closest('div');
//     for (let e of box.children) {
//       e.style.opacity = "1";
//     }
//     if (event.which == 13) {
//       event.preventDefault();
//       pwInput.focus();
//     }
//   },

//   changeOpacityPw: (event) => {
//     let box = event.target.closest('div');
//     for (let e of box.children) {
//       e.style.opacity = "1";
//     }
//     if (event.which == 13) {
//       event.preventDefault();
//       nameBox.children[1].focus();
//     }
//     console.log(`리턴없는놈이다`);
//   },

//   checkId: (event) => {
//     let value = event.target.value;
//     let key = /[a-z.0-9.-._]/gi;

//     if (value.length < 4 || value.length > 15) {
//       idBox.style.border = "2px solid #FF3F3F";
//       idBox.style.borderBottom = "1px solid #FF3F3F";
//       idBox.children[0].style.color = "#FF3F3F";
//       document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;
//     } else if (value.replace(key, '').length > 0) {
//       idBox.style.border = "2px solid #FF3F3F";
//       idBox.style.borderBottom = "1px solid #FF3F3F";
//       idBox.children[0].style.color = "#FF3F3F";
//       document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.<br>`;
//     } else {
//       idBox.style.border = "2px solid #03C75A";
//       idBox.style.borderBottom = "1px solid #03C75A";
//       idBox.children[0].style.color = "#03C75A";
//       document.getElementById('idError').innerHTML = '';
//     }
//   },


//   checkAll: () => {
//     if (idCheck == true && pwCheck == true && nameCheck == true && phoneCheck == true) {
//       document.getElementById('joinBox').style.opacity = "1";
//       document.getElementById('joinBox').disabled = false;
//     } else {
//       document.getElementById('joinBox').style.opacity = "0.5";
//       document.getElementById('joinBox').disabled = true;
//     }
//   }

// }


const LoginForm = () => {




  // const [userData, dispatch] = useReducer(reducer, null);

  // function clickLogin() {
  //   document.getElementById('loginBG').style.transform = "translate(0,0)";
  //   document.getElementById('signBG').style.transform = "translate(0,0)";
  // }

  // function changeOpacityId(event) {
  //   let box = event.target.closest('div');
  //   for (let e of box.children) {
  //     e.style.opacity = "1";
  //   }
  //   if (event.which == 13) {
  //     event.preventDefault();
  //     pwInput.focus();
  //   }
  // }

  // function changeOpacityPw(event) {
  //   let box = event.target.closest('div');
  //   for (let e of box.children) {
  //     e.style.opacity = "1";
  //   }
  //   if (event.which == 13) {
  //     event.preventDefault();
  //     nameBox.children[1].focus();
  //   }
  //   console.log(`리턴없는놈이다`);
  // }


  // function checkId(event) {
  //   let value = event.target.value;
  //   let key = /[a-z.0-9.-._]/gi;

  //   if (value.length < 4 || value.length > 15) {
  //     idBox.style.border = "2px solid #FF3F3F";
  //     idBox.style.borderBottom = "1px solid #FF3F3F";
  //     idBox.children[0].style.color = "#FF3F3F";
  //     document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;
  //   } else if (value.replace(key, '').length > 0) {
  //     idBox.style.border = "2px solid #FF3F3F";
  //     idBox.style.borderBottom = "1px solid #FF3F3F";
  //     idBox.children[0].style.color = "#FF3F3F";
  //     document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.<br>`;
  //   } else {
  //     idBox.style.border = "2px solid #03C75A";
  //     idBox.style.borderBottom = "1px solid #03C75A";
  //     idBox.children[0].style.color = "#03C75A";
  //     document.getElementById('idError').innerHTML = '';
  //   }
  // }


  // function checkAll() {
  //   if (idCheck == true && pwCheck == true && nameCheck == true && phoneCheck == true) {
  //     document.getElementById('joinBox').style.opacity = "1";
  //     document.getElementById('joinBox').disabled = false;
  //   } else {
  //     document.getElementById('joinBox').style.opacity = "0.5";
  //     document.getElementById('joinBox').disabled = true;
  //   }
  // }
  // const [signBox, setSignBox] = useState(false);

  const changeSignBox = () => {
    setSignBox(!signBox);
  }
  return (


    <>
      <div id="bodyBG" style={{ backgroundImage: `url("${process.env.PUBLIC_URL + "/img/img/signup/signupBGI.jpg"}")` }}></div>
      {/* <div id="bodyBG" style={BGstyle}></div> */}
      <div id="contentBox">
        {/* <LoginBG changeSignBox={changeSignBox} style={signBox ? { transform: 'translate(-100%, 0)' } : {}} /> */}
              {!signBox && <SignBG changeSignBox={changeSignBox}/>}
      </div>
    </>
  );
}


export default LoginForm;
const signUpBox = document.getElementById('signUpBox');
const idBox = document.getElementById('idBox');
const passwordBox = document.getElementById('passwordBox');
const nameBox = document.getElementById('nameBox');
const phonenumberBox = document.getElementById('phonenumberBox');

const emailSelectBox = document.getElementById("emailSelectBox");
const emailWriteBox = document.getElementById("emailWriteBox");
const genderUl = document.getElementById('genderUl');

let idCheck = false;
let pwCheck = false;
let nameCheck = false;
let phoneCheck = false;

let addressCheck = false;
let mailCheck = false;
let genderCheck = false;
let birthdayCheck = false;



// function focusInputBox() {
//     idBox.style.border = "2px solid #9B1B30";
//    passwordBox.style.border = "2px solid #9B1B30";
//     nameBox.style.border = "2px solid #9B1B30";
//    phonenumberBox.style.border = "2px solid #9B1B30";
// }


function checkId() {
    document.getElementById('idBox').focus();
    idBox.style.border = "2px solid #9B1B30";
    if (idBox.children[1].value.length > 4 && idBox.children[1].value.length < 10) {
        idCheck = true;
        if (idCheck) {
            // idBox.style.border = "2px solid #03C75A";
            idBox.style.border = "2px solid green";
        } else {
            // idBox.style.border = "2px solid yellow";
            alert('아이디를 확인하세요');
        }
        return null;
    }
}//checkId

function checkPassword() {
    document.getElementById('passwordBox').focus();
    passwordBox.style.border = "2px solid #9B1B30";
    if (passwordBox.children[1].value.length > 4 && passwordBox.children[1].value.length < 10) {
        pwCheck = true;
        if (pwCheck) {
            // passwordBox.style.border = "2px solid #03C75A";
            passwordBox.style.border = "2px solid green";
        } else {
            // passwordBox.style.border = "2px solid yellow";
            alert('비밀번호를 확인하세요');

        }
    }
}//checkPassword

function checkName() {
    document.getElementById('nameBox').focus();
    nameBox.style.border = "2px solid #9B1B30";
    if (nameBox.children[1].value.length > 1 && nameBox.children[1].value.length < 5) {
        nameCheck = true;
        if (nameCheck) {
            nameBox.style.border = "2px solid #03C75A";
        } else {
            nameBox.style.border = "2px solid red";
            alert('이름을 다시 입력하세요.');
        }
    }
}//checkName

function checkPhonenumber() {
    document.getElementById('phonenumberBox').focus();
    phonenumberBox.style.border = "2px solid #9B1B30";
    if (phonenumberBox.children[1].value.length == 10) {
        phoneCheck = true;
        if (phoneCheck) {
            phonenumberBox.style.border = "2px solid #03C75A";
        } else {
            phonenumberBox.style.border = "2px solid red";
            alert('전화번호를 다시 입력하세요.');
        }
    }
}//checkPhonenumber


function changeSelectBox(event) {
    if (event.target.value == "write") {
        emailSelectBox.style.display = "none";
        emailWriteBox.style.display = "inline-block";
        emailWriteBox.focus();
    }
}

function selectGender(event) {
    if (document.getElementById('genderChecked') != null) {
        document.getElementById('genderChecked').removeAttribute("id");
    }
    event.target.closest('li').setAttribute("id", "genderChecked");
}





// function inCheck() {
//     if (!idCheck) { document.getElementById('idBox').innerHTML = '필수입력, id를 확인하세요.'; }
//     if (!pwCheck) { document.getElementById('passwordBox').innerHTML = '필수입력, 비밀번호를 확인하세요.'; }
//     if (!nameCheck) { document.getElementById('nameBox').innerHTML = '필수입력, 이름을 확인하세요.'; }
//     if (!phoneCheck) { document.getElementById('phonenumberBox').innerHTML = '필수입력, 전화번호를 확인하세요.'; }

//     if (idCheck && pwCheck && nameCheck && phoneCheck) {
        
//         if(confirm("가입을 진행하겠습니까?(YES : 확인 / NO : 취소)")){
//             return true;
//         }else {
//             alert("가입이 취소되었습니다.");
//             return false;
//         }
//     }else {
//         return false;
//         }
// }
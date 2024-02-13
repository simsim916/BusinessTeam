const signUpBox = document.getElementById('signUpBox');
const idBox = document.getElementById('idBox');
const passwordBox = document.getElementById('passwordBox');
const nameBox = document.getElementById('nameBox');
const phonenumberBox = document.getElementById('phonenumberBox');
const errorBox = document.getElementById('errorBox');

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

function focusInputBox(event) {
    let box = event.target.closest('div');
    box.style.border = "2px solid #9B1B30";
}

function changeOpacity(event){
    let box = event.target.closest('div');
    for ( e of box.children){
        e.style.opacity="1";
    }
}

function checkId(event) {
    let value = event.target.value;
    let key = /[a-z.0-9.-._]/gi;

    if (value.length < 4 || value.length > 15) {
        idBox.style.border = "2px solid #FF3F3F";
        idBox.children[0].style.color = "#FF3F3F";
        document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;
    } else if (value.replace(key, '').length > 0) {
        idBox.style.border = "2px solid #FF3F3F";
        idBox.children[0].style.color = "#FF3F3F";
        document.getElementById('idError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 영문, 숫자, 특수문자(-, _)만 가능합니다.<br>`;
    } else{
        idCheck = true;
        idBox.style.border = "2px solid #03C75A";
        idBox.style.borderBottom = "1px solid #03C75A";
        idBox.children[0].style.color = "#03C75A";
        document.getElementById('idError').innerHTML='';
    }
        return null;
}//checkId

function checkPassword(event) {
    let value = event.target.value;
    let key = /[a-z.0-9.!-*.@]/gi;

    if (value.length < 4 || value.length > 10) {
        passwordBox.style.border = "2px solid #FF3F3F";
        passwordBox.children[0].style.color = "#FF3F3F";
        document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 4 ~ 10 글자 이하만 입력해주세요.<br>`;
    } else if (value.replace(key, '').length > 0) {
        passwordBox.style.border = "2px solid #FF3F3F";
        passwordBox.children[0].style.color = "#FF3F3F";
        document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 영문, 숫자, 특수문자(!,@,#,$,%,^,&,*)만 가능합니다.<br>`;
    } else if (value.replace(/[!-*.@]/gi, '').length > value.length) {
        passwordBox.style.border = "2px solid #FF3F3F";
        passwordBox.children[0].style.color = "#FF3F3F";
        document.getElementById('pwError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;비밀번호 : 특수문자(!,@,#,$,%,^,&,*)를 반드시 포함해주세요.<br>`;
    } else {
        pwCheck = true;
        passwordBox.style.border = "2px solid #03C75A";
        passwordBox.style.borderBottom = "1px solid #03C75A";
        passwordBox.children[0].style.color = "#03C75A";
        document.getElementById('pwError').innerHTML = '';
    }
        return null;
}//checkPassword

function checkName(event) {
    let value = event.target.value;
    if (value.length < 1) {
        nameBox.style.border = "2px solid #FF3F3F";
        document.getElementById('nameError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;이름 : 2글자 이상 입력하세요.<br>`;
    } else if (value.replace(/[a-z.가-힣]/gi, '').length > 0){
        nameBox.style.border = "2px solid #FF3F3F";
        document.getElementById('nameError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;이름은 한글, 영문만 입력하세요.<br>`;
    } else {
        nameCheck = true;
        nameBox.style.border = "2px solid #03C75A";
        nameBox.style.borderBottom = "1px solid #03C75A";
        nameBox.children[0].style.color = "#03C75A";
        document.getElementById('nameError').innerHTML = '';
    }
    return null;
    
}//checkName

function checkPhonenumber() {
    let value = event.target.value;
    if (value.length == 10) {
        phoneCheck = true;
        phonenumberBox.style.border = "2px solid #03C75A";
        phonenumberBox.style.borderBottom = "1px solid #03C75A";
        phonenumberBox.children[0].style.color = "#03C75A";
        document.getElementById('pnError').innerHTML = '';
        } else {
        phonenumberBox.style.border = "2px solid #FF3F3F";
        document.getElementById('pnError').innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;전화번호 : 다시 확인하세요.<br>`;
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
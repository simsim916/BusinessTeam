// let formBox = document.getElementById('loginBox');
let idInput = document.getElementById("id");
let pwInput = document.getElementById("password");
let errorBox = document.getElementById('errorBox');
let loginBt = document.getElementById('loginInBox').children[0];

let id = "test";
let pw = "123123!";


function a(str) {
    console.log(str);
}

// window.onload = function () {
//     idInput.focus();
// }

function SortLogin(ele) {
    // formBox.style = "initial";
    idInput.closest('div').style = "initial";
    idInput.value = "";
    pwInput.closest('div').style = "initial";
    pwInput.value = "";
    errorBox.innerText = "";
    if (ele.innerText == "일반 로그인") {
        ele.style.backgroundColor = "rgb(146, 112, 112)";
        ele.style.borderBottom = "none";
        ele.style.color = "white";
        ele.nextElementSibling.style.backgroundColor = "white";
        ele.nextElementSibling.style.color = "black";
        ele.nextElementSibling.style.borderBottom = "1px solid grey";
    } else {
        ele.style.backgroundColor = "rgb(146, 112, 112)";
        ele.style.borderBottom = "none";
        ele.style.color = "white";
        ele.previousElementSibling.style.backgroundColor = "white";
        ele.previousElementSibling.style.color = "black";
        ele.previousElementSibling.style.borderBottom = "1px solid grey";
    }
}

function focusInputBox(event) {
    let box = event.target.closest('div');

    if (event.target == idInput) {
        if (event.target.value == "") {
            box.style.border = "2px solid #9B1B30";
        } else if (event.target.value.length < 4 || event.target.value.length > 10) {
            box.style.border = "2px solid #9B1B30";
        } else {
            box.style.border = "2px solid #03C75A";
            box.style.borderBottom = "1px solid #03C75A";
        }
    } else {
        if (event.target.value == "") {
            box.style.border = "2px solid #9B1B30";
        } else {
            box.style.border = "2px solid #03C75A";
            box.style.borderTop = "1px solid #03C75A";
        }
    }
}

function keydownInput(event) {
    let box = event.target.closest('div');
    let keyCode = event.keyCode;
    if (event.target == idInput) {
        if (event.target.value == "") {
            box.style.border = "2px solid #9B1B30";
        } else if (event.target.value.length < 4 || event.target.value.length > 10) {
            box.style.border = "2px solid #9B1B30";
        } else {
            box.style.border = "2px solid #03C75A";
            // box.style.borderBottom = "1px solid #03C75A";
        }

        if (keyCode == 13) {
            pwInput.focus();
        }
    } else {
        if (event.target.value == "") {
            box.style.border = "2px solid #9B1B30";
        } else {
            box.style.border = "2px solid #03C75A";
            box.style.borderTop = "1px solid #03C75A";
        }

        if (keyCode == 13) {
            loginBt.focus();
        }
    }


}


// function focusOutInputBox(event) {
//     if (event.target == idInput) {
//         if (event.target.value == "") {
//             box.style.border = "2px solid #ff3f3f";
//         } else if (event.target.value.length < 4 || event.target.value.length > 10) {
//             box.style.border = "2px solid #ff3f3f";
//             errorBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;

//         } else {
//             box.style.border = "2px solid #03C75A";
//             box.style.borderBottom = "1px solid #03C75A";
//         }
//     } else {
//         if (event.target.value == "") {
//             box.style.border = "2px solid #9B1B30";
//         } else {
//             box.style.border = "2px solid #03C75A";
//             box.style.borderTop = "1px solid #03C75A";
//         }
//     }
// }

function focusOutIdBox(event) {
    let box = event.target.closest('div');
    if (event.target.value == "") {
        box.style.border = "2px solid #ff3f3f";
        box.style.borderBottom = "1px solid #ff3f3f";
        errorBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 입력해주세요.<br>`;
    } else if (event.target.value.length < 4 || event.target.value.length > 15) {
        box.style.border = "2px solid #ff3f3f";
        box.style.borderBottom = "1px solid #ff3f3f";
        errorBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;아이디 : 4 ~ 15 글자 이하만 가능합니다.<br>`;
    } else {
        box.style.border = "2px solid #03C75A";
        box.style.borderBottom = "1px solid #03C75A";
    }
}

function focusOutPwBox(event) {
    let box = event.target.closest('div');
    if (event.target.value == "") {
        box.style.border = "2px solid #ff3f3f";
        box.style.borderTop = "1px solid #ff3f3f";
    } else {
        box.style.border = "2px solid #03C75A";
        box.style.borderTop = "1px solid #03C75A";
    }
}


// function loginCheck() {
//     if (idInput.value == id && pwInput.value == pw) {
//         errorBox.innerText = "성공";
//     } else if (idInput.value != id && pwInput.value == pw) {
//         errorBox.innerText = "아이디가 틀렸습니다."
//         idInput.closest('div').style.border = "2px solid #9B1B30";
//         idInput.closest('div').style.borderBottom = "1px solid #9B1B30";
//     } else if (idInput.value == id && pwInput.value != pw) {
//         errorBox.innerText = "비밀번호가 틀렸습니다."
//         pwInput.closest('div').style.border = "2px solid #9B1B30";
//         pwInput.closest('div').style.borderTop = "1px solid #9B1B30";
//     } else {
//         errorBox.innerText = "아이디,비밀번호가 틀렸습니다."
//         idInput.closest('div').style.border = "2px solid #9B1B30";
//         idInput.closest('div').style.borderBottom = "1px solid #9B1B30";
//         pwInput.closest('div').style.border = "2px solid #9B1B30";
//         pwInput.closest('div').style.borderTop = "1px solid #9B1B30";
//     }
// }
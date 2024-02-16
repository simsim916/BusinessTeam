let formBox = document.getElementById('loginBox');
let idInput = document.getElementById("id");
let pwInput = document.getElementById("password");
let eMessage = document.getElementById('errorMessage');

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
    eMessage.innerText = "";
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
    if (event.target.value == "") {
        box.style.border = "2px solid #9B1B30";
    }
    for (e of box.children) {
        e.style.opacity = "1";
    }
    if (box.getAttribute("id") == "passwordBox") {
        idInput.closest('div').style.borderBottom = "1px solid #03C75A";
    }
}

function keydownInput(event) {
    let box = event.target.closest('div');
    if (event.target.value != "") {
        box.style.border = "2px solid #03C75A";
    }
}

function focusOutInputBox(event) {
    let box = event.target.closest('div');
    if (event.target.value != "") {
        box.style.border = "2px solid #03C75A";
    }
}

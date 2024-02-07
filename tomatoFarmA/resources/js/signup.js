const nameBox = document.getElementById('nameBox');
const genderUl = document.getElementById('genderUl');
const emailSelectBox = document.getElementById("emailSelectBox");
const emailWriteBox = document.getElementById("emailWriteBox");

let idCheck = false;
let pwCheck = false;
let nameCheck = false;
let phoneCheck = false;

let addressCheck = false;
let mailCheck = false;
let genderCheck = false;
let birthdayCheck = false;



function focusInputBox() {
    nameBox.style.border = "2px solid #9B1B30";
}

function blurInputBox() {
    console.log(nameBox.children[1].value)
    if (nameBox.children[1].value.length > 0 && nameBox.children[1].value.length < 5) {
        idCheck = true;
    }

    if (idCheck) {
        // 통과했을때
        nameBox.style.border = "2px solid #03C75A";
    } else {
        nameBox.style.border = "2px solid red";
        // 불통했을때
    }
}

function selectGender(event) {
    if (document.getElementById('genderChecked') != null) {
        document.getElementById('genderChecked').removeAttribute("id");
    }
    event.target.closest('li').setAttribute("id", "genderChecked");
}

function changeSelectBox(event) {
    if (event.target.value == "write") {
        emailSelectBox.style.display = "none";
        emailWriteBox.style.display = "inline-block";
        emailWriteBox.focus();
    }
}

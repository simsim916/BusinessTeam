const width = document.querySelector("#sortBt>div:nth-child(1)");
const column = document.querySelector("#sortBt>div:nth-child(2)");

console.log(column);


// ****************** css 파일 자체를 바꾸는 방법 ***********************
// width.addEventListener('click', widthView);
// function widthView() {
//     document.getElementById("changeStyle").href = "CSS/test.css";
// }

// column.addEventListener('click', columnView);
// function columnView() {
//     document.getElementById("changeStyle").href = "CSS/test2.css";
// }


// ********************* 팝업창 열기 ********************************
// window.open('url','name','option')
width.addEventListener('click', widthView);
column.addEventListener('click', columnView);

function widthView() {
    // 팝업창을 열거면 새로운html 파일을 열도록 해야 겠다.
    window.open('http://192.168.0.84:5500/company/eventPage2.html', '_blank', 'width=1200, height=900, top=50, left=50, scrollbars=yes')
}

function columnView() {
}











// 1. 체크박스 선택시 전체선택,해제되도록 만들기
// 2. 인풋 radio타입은 하나만 선택되어야 하는데 여러개 선택되는
//    문제 해결하기
// 3.
//
//
//
//
//
//
//
//
//
//
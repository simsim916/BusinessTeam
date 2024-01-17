function insertOrderedOrder() {
    const orderedList = document.querySelector(".orderedListYH");

    const makeDiv = document.createElement("div");
    makeDiv.className = "insertRowYH";

    orderedList.appendChild(makeDiv);
    for (let i = 0; i < 22; i++) {
        makeInnerDiv = document.createElement("div");
        makeDiv.appendChild(makeInnerDiv);
    }
}

insertOrderedOrder();



function insertCurrentList() {
    const currentOrder = document.querySelector(".currentOrderYH");

    const makeDiv = document.createElement("div");
    makeDiv.className = "insertRowCurrentYH";

    currentOrder.appendChild(makeDiv);
    for (let i = 0; i < 8; i++) {
        makeInnerDiv = document.createElement("div");
        makeDiv.appendChild(makeInnerDiv);
    }
}


insertCurrentList();







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
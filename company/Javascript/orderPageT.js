
function selectAll() {
    const checkboxes = document.getElementsByClassName(".chk");
    // console.log(checkAll);
    if (checkAll.checked) {
        const checkboxes = document.querySelectorAll('.chk');

        for (const a of checkboxes) {
            a.checked = true;
        }
    } else {
        const checkboxes = document.querySelectorAll('.chk');

        for (const a of checkboxes) {
            a.checked = false;
        }
    }
}

function uncheckedAllBox() {
    checkAll.checked = false;
}

function insertData() {
    const orderList = document.querySelector('#insertRowYH');
    const makeDiv = document.createElement("div");

    for (let index = 0; index < 12; index++) {
        if (index == 0) {
            orderList.appendChild(makeDiv);
            const makeInput = makeDiv.createElement("input");
            makeInput.className = "chk";
        } else {
            
        }
        orderList.appendChild(makeDiv);
    }
    orderList.appendChild(makeDiv);
}
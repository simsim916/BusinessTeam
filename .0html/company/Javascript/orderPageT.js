
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
    const makeDiv = document.createElement("div");

    for (let index = 0; index < 12; index++) {
        if (index == 0) {
            orderList.appendChild(makeDiv);
            const makeInput = makeDiv.createElement("input");
            makeInput.className = "chk";
        } else {
            orderList.appendChild(makeDiv);
        }
        orderList.appendChild(makeDiv);
    }
    orderList.appendChild(makeDiv);
}


// =============================================
// =============================================
let row = document.getElementsByClassName('excelColumn');
let excelBox = document.getElementById('excelBox');


function plusColumn() {
    excelBox.innerHTML += `
        <div class="excelColumn">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
        </div>
    `
}


function getExcelData() {
    let test;
    let sum = "";
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < row[i].childElementCount; j++) {
            sum += row[i].children[j].value + ",";
        }
        test = `
        INSERT INTO ITEM(code,sort1,sort2,sort3,brand,name,weight,storage,packing,delivery,price,vat,origin,sales,stock,admin)
        VALUES(${sum});
         `;
    }

    let result = `
    INSERT INTO ITEM(code,sort1,sort2,sort3,brand,name,weight,storage,packing,delivery,price,vat,origin,sales,stock,admin)
    VALUES(${sum});
    `;

    return result;
}
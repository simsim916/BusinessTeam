'use strict'

function a(str) {
    console.log(str);
}

function selectAnn(ele) {
    ele.innerHTML = `<i class="fa-solid fa-chevron-up">${ele.innerText}</i>`;
    ele.style.height = '100px';
}



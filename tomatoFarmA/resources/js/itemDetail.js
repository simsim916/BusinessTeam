'use strict'

function a(str) {
    console.log(str)
}

function changeMainImg(event) {
    event.preventDefault();
    let ele = event.target.closest('div');
    ele.style.opacity = 1;
    ele.parentNode.previousElementSibling.children[0].src = ele.children[0].src;
    for (let i = 0; i < ele.parentNode.childElementCount; i++) {
        if (ele.parentNode.children[i] != ele) {
            ele.parentNode.children[i].style.opacity = '0.5';
        }
    }
    return false;
}

function count(event, type) {
    let target = event.target.closest("#countBox");
    let value = target.children[1].value
    if ("-" === type) {
        if (value > 0)
            value--;
    }
    else
        value++;

    target.children[1].value = value;
    sumTotal(value);
}

function sumTotal(value) {
    const title6Value = document.getElementById('title6').innerText.replace('원', '');
    const priceBox = document.getElementById('price');
    priceBox.children[0].innerText = `${value * title6Value} 원`;
}

function inputCount(event) {
    const inputBox = document.getElementById('inputCount');
    const countBox = document.getElementById('price');
    countBox.children[1].innerText = inputBox;
}


// function showItemDetail(ele) {
//     let itemIntro = ele.previousElementSibling;
//     if (itemIntro.classList.contains('heightAuto'))
//         itemIntro.classList.remove('heightAuto');
//     else {
//         itemIntro.classList.add('heightAuto');
//         introItemBtn.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`;
//     }
//     return null;
// }


// function showItemDetail(ele) {
//     const itemIntro = document.getElementById('introItem');
//     const introItemBtn = document.getElementById('detailButton'); // '상품정보 접기' 버튼

//     itemIntro.classList.add('heightAuto');
//     introItemBtn.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`; // 버튼의 텍스트 변경
// }

function showItemDetail(ele) {
<<<<<<< HEAD
    const itemIntro = document.getElementById('introItem');
    if (e) {
        itemIntro.classList.add('heightAuto');
=======
    let itemIntro = ele.previousElementSibling;
    if (itemIntro.classList.contains('heightAuto'))
>>>>>>> 90400316109198a5f49c9a59567209398a6e1ce6
        itemIntro.classList.remove('heightAuto');
    } else {
        itemIntro.classList.add('heightAuto');
        introItemBtn.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`;
        //ele.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`;
    }
    return null;
}

<<<<<<< HEAD

// function detailClick(event) {
//     const targetTab = event.target.textContent.trim();
//     const itemIntroBtn = document.getElementById('detailClick');

//     // 해당 탭에 따라 상품디테일설명 열기
//     switch (targetTab) {
//         case '상품설명':
//             showItemDetail(itemIntroBtn);
//             break;
//         case '상세정보':
//             // 상세정보 탭에 대한 동작 구현
//             break;
//         case '후기':
//             // 후기 탭에 대한 동작 구현
//             break;
//         case '문의':
//             // 문의 탭에 대한 동작 구현
//             break;
//         default:
//             break;
//     }
// }
// document.getElementById('detailClick').addEventListener('click', detailButtonClick);





function reivewDetail(event) {
    event.stopPropagation();
    const reviewImg = document.getElementsByClassName('reviewDetail').children[2];
    reviewImg.style.width = 100;
    reviewImg.style.height = 100;
=======
function reivewImgDetail(event){
>>>>>>> 90400316109198a5f49c9a59567209398a6e1ce6

}






<<<<<<< HEAD
// function detailClick(event) {
//     const detailClick = document.getElementById('detailClick');
    
//     if (detailClick.children[1]) {
//         detailClick.addEventListener("showItemDetail", function(e) {
            
//             window.scrollTo({ top: 900, behavior: 'smooth' })
//         });
//     } else if(detailClick.children[2]){
//         window.scrollTo({ top: 900, behavior: 'smooth' })
        
//     }
// }

// function reivewImgDetail(event) {
//     const rievewImg = document.getElementById('reviewImg');

// }

=======

// function reivewDetail(event) {
//     event.stopPropagation();
//     const reviewImg = document.getElementsByClassName('reviewDetail').children[2];
//     reviewImg.style.width = 100;
//     reviewImg.style.height = 100;

// }

// function detailClick(event) {
//     const detailClick = document.getElementById('detailClick');
//     let itemIntro = ele.previousElementSibling;

//     if (detailClick.children[1]) {
//         window.scrollTo({ top: 900, behavior: 'smooth' })
//         container.classList.add('heightAuto');
//         introItemBtn.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`;
//         // return showItemDetail(ele);
//     } else if (detailClick.children[2]) {
//         window.scrollTo({ top: 900, behavior: 'smooth' })

//     }
// }


// function showItemDetail(element) {
//     const itemIntro = document.getElementById('introItem');
//     itemIntro.classList.add('heightAuto');
//     element.innerHTML = `상품정보 접기<i class="fa-solid fa-chevron-up"></i>`;
// }

// function detailButtonClick(event) {
//     const targetTab = event.target.textContent.trim();
//     const itemIntroBtn = document.getElementById('detailButton');

//     switch (targetTab) {
//         case '상품설명':
//             showItemDetail(itemIntroBtn);
//             break;
//         case '상세정보':
//             break;
//         case '후기':
//             break;
//         case '문의':
//             break;
//         default:
//             break;
//     }
// }

// document.getElementById('detailClick').addEventListener('click', detailButtonClick);
>>>>>>> 90400316109198a5f49c9a59567209398a6e1ce6

'use strict'

function a(str) {
    console.log(str)
}

function otherCategory(ele) {
    ele.style.backgroundColor = '#9b1b1f63';
    for (let i = 0; i < ele.parentNode.childElementCount; i++) {
        if (ele.parentNode.children[i] != ele) {
            ele.parentNode.children[i].style.backgroundColor = 'white';
        }
    }
}

function showContent(ele) {
    if (ele.children[5].className == 'contentBox disappear') {
        ele.children[5].className = 'contentBox appear';
        for (let i = 1; i < ele.parentNode.childElementCount; i++) {
            if (ele.parentNode.children[i] != ele) {
                ele.parentNode.children[i].children[5].className = 'disappear';
            }
        }
    } else {
        ele.children[5].className = 'contentBox disappear';
    }
}


// function changePage(ele) {
//     let chess = document.getElementById('tomatoChess');
//     a(ele.getAttribute('value'));
//     switch (ele.getAttribute('value')) {
//         case '2': {
//             chess.style.transform = 'translateX(60px)';
//             chess.style.transitionDuration = '1s';
//         } break;
//         case '3': {
//             chess.style.transform = 'translateX(120px)';
//             chess.style.transitionDuration = '1s';
//         } break;
//         case '4': {
//             chess.style.transform = 'translateX(180px)';
//             chess.style.transitionDuration = '1s';
//         } break;
//         case '5': {
//             chess.style.transform = 'translateX(240px)';
//             chess.style.transitionDuration = '1s';
//         } break;
//         case '1': {
//             chess.style.transform = 'translateX(300px)';
//             chess.style.transitionDuration = '1s';
//         } break;
//     }
// }
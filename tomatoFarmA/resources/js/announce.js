'use strict'

function a(str) {
    console.log(str)
}

function otherCategory(ele) {
    ele.style.boxShadow = '0px 0px 3px 3px #9B1B20';
    ele.style.fontWeight = 'bold';
    for (let i = 0; i < ele.parentNode.childElementCount; i++) {
        if (ele.parentNode.children[i] != ele) {
            ele.parentNode.children[i].style.boxShadow = '0px 0px 0px 0px white';
            ele.parentNode.children[i].style.fontWeight = 'initial';
        }
    }
}

function showContent(ele) {
    if (ele.children[5].className == 'contentBox disappear') {
        ele.children[5].className = 'contentBox appear';
        ele.style.boxShadow = '0px 0px 5px 3px #9B1B20';
        for (let i = 1; i < ele.parentNode.childElementCount; i++) {
            if (ele.parentNode.children[i] != ele) {
                ele.parentNode.children[i].children[5].className = 'disappear';
                ele.parentNode.children[i].style.boxShadow = '0px 0px 0px 0px white';
            }
        }
    } else {
        ele.children[5].className = 'contentBox disappear';
        ele.style.boxShadow = '0px 0px 0px 0px white';
    }
}


function changePage(ele) {
    let chess = document.getElementById('tomatoChess');
    a(ele.getAttribute('value'));
    switch (ele.getAttribute('value')) {
        case '1': {
            chess.style.transform = 'translateX(0)';
            chess.style.transitionDuration = '1s';
        } break;
        case '2': {
            chess.style.transform = 'translateX(55px)';
            chess.style.transitionDuration = '1s';
        } break;
        case '3': {
            chess.style.transform = 'translateX(110px)';
            chess.style.transitionDuration = '1s';
        } break;
        case '4': {
            chess.style.transform = 'translateX(165px)';
            chess.style.transitionDuration = '1s';
        } break;
        case '5': {
            chess.style.transform = 'translateX(220px)';
            chess.style.transitionDuration = '1s';
        } break;
        default: {
            for (let i = 1; i < ele.parentNode.childElementCount-1; i++) {
                if (ele.parentNode.children[i].getAttribute('value') != ele.getAttribute('value')) {
                    ele.parentNode.children[i].innerText = ele.ele.parentNode.children[i].getAttribute('value');
                }
            }
        }
    }
}


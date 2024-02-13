const slideBox = document.getElementsByClassName("slideBox");
const secondSlideBtn = document.getElementById("secondSlideBtn");


let secondContainerSlideMargin = 0,
    thirdContainerSlide0Margin = 0;



function secondContainerSlideLeftBtn() {
    document.getElementById('secondSlideBtnSelected').removeAttribute("id");
    if (secondContainerSlideMargin < 2200) {
        secondContainerSlideMargin += 440;
    }
    secondSlideBtn.children[`${5 - secondContainerSlideMargin / 440}`].setAttribute("id", "secondSlideBtnSelected")
    slideBox[0].style.marginLeft = `${secondContainerSlideMargin}px`;
}

function secondContainerSlideRightBtn() {
    document.getElementById('secondSlideBtnSelected').removeAttribute("id");
    if (secondContainerSlideMargin > -2200) {
        secondContainerSlideMargin -= 440;
    }
    secondSlideBtn.children[`${5 - secondContainerSlideMargin / 440}`].setAttribute("id", "secondSlideBtnSelected");
    slideBox[0].style.marginLeft = `${secondContainerSlideMargin}px`;
}

function secondContainerSlideBtn(event) {
    let target = event.target;
    if (event.target.id != 'secondSlideBtn') {
        document.getElementById('secondSlideBtnSelected').removeAttribute("id");
        event.target.setAttribute("id", "secondSlideBtnSelected");
        let index = 0;
        for (a of secondSlideBtn.children) {
            if (target == a) {
                break;
            }
            ++index;
        }
        secondContainerSlideMargin = 2200 - (440 * index);
        slideBox[0].style.marginLeft = `${secondContainerSlideMargin}px`;
    }
}

function thirdContainerSlideRightBth() {
    if (thirdContainerSlide0Margin > -660) {
        thirdContainerSlide0Margin -= 220;
        a(thirdContainerSlide0Margin)
        slideBox[1].style.marginLeft = `${thirdContainerSlide0Margin}px`;
    }
}
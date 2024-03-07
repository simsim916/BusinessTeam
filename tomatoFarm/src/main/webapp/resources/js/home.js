

const slideBox = document.getElementsByClassName("slideBox");
const secondContainer = document.getElementById('secondContainer');
const thirdContainer = document.getElementById('thirdContainer');
let secondSlideBtn;
const adImgBox = document.getElementById('adImgBox');
const canvas = adImgBox.querySelector('canvas');
let idx = 0;
let writeTarget = ['프레시지', '김구원선생', '마이셰프', '하림', '하루한킷'];
const adImgList = ['fresheasy.jpg', 'mychef.jpg', 'signup.jpg', 'review.jpg']

window.onload = writeSlideContainer();

// write
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollHeight - innerHeight - scrollY < 600) {
        if (writeTarget.length > idx) {
            writePresentBox(writeTarget[idx++]);
        }
    }
});

function changeAdImgBox(ele, event) {
    event.stopPropagation();
    let index = 0;
    for (let e of ele.closest('#adRightTab').children) {
        if (e == ele) break;
        index++;
    }
    ele.closest('#adImg').children[0].src = `../resources/img/adimg/${adImgList[index]}`;
}

function secondContainerSlideLeftbth(event) {
    document.getElementById('secondSlideBtnSelected').removeAttribute("id");
    let margin = event.target.closest('#secondContainerList').children[0].style.marginLeft.replace('px', '');
    if (margin < 2200) {
        margin = +margin + 440;
    }
    secondSlideBtn.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected")
    slideBox[0].style.marginLeft = `${margin}px`;
}

function secondContainerSlideRightbth(event) {
    document.getElementById('secondSlideBtnSelected').removeAttribute("id");
    let margin = event.target.closest('#secondContainerList').children[0].style.marginLeft.replace('px', '');
    if (margin > -2200) {
        margin -= 440;
    }
    secondSlideBtn.children[`${5 - margin / 440}`].setAttribute("id", "secondSlideBtnSelected");
    slideBox[0].style.marginLeft = `${margin}px`;
}

function secondContainerSlideBtn(event) {
    let target = event.target;
    if (event.target.id != 'secondSlideBtn') {
        document.getElementById('secondSlideBtnSelected').removeAttribute("id");
        event.target.setAttribute("id", "secondSlideBtnSelected");
        let index = 0;
        for (let a of secondSlideBtn.children) {
            if (target == a) {
                break;
            }
            ++index;
        }
        slideBox[0].style.marginLeft = `${2200 - (440 * index)}px`;
    }
}

function thirdContainerSlideRightBth(event) {
    let box = event.target.closest('.typeBoxList').children;
    let margin = box[0].style.marginLeft.replace('px', '');
    let maxMargin = -220 * (box[0].children.length - 2);
    if (margin > maxMargin) {
        margin -= 220;
        box[0].style.marginLeft = `${margin}px`;
    }
    if (margin == maxMargin) {
        box[2].style.display = "none";
    }
    if (margin != 0) {
        box[1].style.display = "block";
    }
}

function thirdContainerSlideLeftBth(event) {
    let box = event.target.closest('.typeBoxList').children;
    let margin = box[0].style.marginLeft.replace('px', '');
    let maxMargin = -220 * (box[0].children.length - 2);
    if (margin >= maxMargin) {
        margin = +margin + 220;
        box[0].style.marginLeft = `${margin}px`;
    }
    if (margin == 0) {
        box[1].style.display = "none";
    }
    if (margin != 0) {
        box[2].style.display = "block";
    }
}

function writeSlideContainer() {
    let uri = "/item/eventitem";
    let result = '';
    axios.get(uri
    ).then(response => {

        result += `
            <div id="secondContainerList">
            <div class="slideBox">
        `;

        for (const e of response.data) {
            result += `
             <div class="itemBox">
                    <div class="itemImg">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <img src="/resources/img/itemImg/${e.code}_1.jpg" alt="${e.name}">
                        <div></div>
                    </div>
                    <div class="itemName">${e.name}</div>
                    <div class="itemInfo">${e.brand}<br></div>
                    <p class="itemPrice">${e.price}원</p>
                    <div class="itemOption">${e.delivery}원</div>
                </div>
            `;
        }

        result += `
        </div>
            <div id="secondSlideBtn" onclick="secondContainerSlideBtn(event)">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="secondSlideBtnSelected"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="secondContainerLeftBtn" onclick="secondContainerSlideLeftbth(event)"><i
                    class="fa-sharp fa-solid fa-arrow-left"></i></div>
            <div id="secondContainerRightBtn" onclick="secondContainerSlideRightbth(event)"><i
                    class="fa-sharp fa-solid fa-arrow-right"></i></div>
        ` ;
        secondContainer.innerHTML += result;
        secondSlideBtn = document.getElementById("secondSlideBtn");
    }).catch(err => {
        console.log("writeSlideContainer 에러 :" + err.massage);
        alert("writeSlideContainer 에러 :" + err.massage);
    });

}

function writePresentBox(brand) {
    let uri = "/item/branditem/" + brand;
    let result;
    axios.get(uri
    ).then(response => {
        let data = response.data;
        result = `
            <div class="typeBox hide">
                <div class="typeBoxTag">
                    <div class="typeBoxTagTitle"><img src="../resources/img/brand/${brand}.png"
                            alt="category_vitamin">${brand}
                    </div>
                    <ul class="typeBoxTagList">
                        <li><a href="">스테이크</a></li>
                        <li><a href="">파스타</a></li>
                        <li><a href="">감바스</a></li>
                    </ul>
                </div>
                <a href="/item/detail/${data[0].code}" class="typeBoxImg">
                    <img src="../resources/img/itemImg/${data[0].code}_1.jpg" alt="${data[0].name}">
                    <div class="typeBoxImgTitle">
                        <div class="typeBoxImgTitleName">
                            ${data[0].name}
                        </div>
                        <p class="typeBoxImgTitlePrice">${data[0].price}원</p>
                    </div>
                    <div class="typeBoxImgTitleBest">Best 상품</div>
                </a>
            <div class="typeBoxList">
                <div class="slideBox">
        `;
        for (let i = 1; i < 6; i++) {
            result += `
                <a href="/item/detail/${data[i].code}" class="itemBox">
                    <div class="itemImg">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <img src="../resources/img/itemImg/${data[i].code}_1.jpg" alt="${data[i].name}">
                        <div></div>
                    </div>
                    <div class="itemName">${data[i].name}</div>
                    <div class="itemInfo">${data[i].brand}<br></div>
                    <p class="itemPrice">${data[i].price}원</p>
                    <div class="itemOption">무료배송</div>
                </a>
            `;
        }
        result += `
                    <a href="" class="linkBox">
                        <p>" ${data[0].brand} "</p>
                        <i class="fa-regular fa-circle-play"></i> 상품 더 보러가기
                    </a>
                </div>
                <div onclick="thirdContainerSlideLeftBth(event)" class="thirdContainerLeftBtn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
                <div onclick="thirdContainerSlideRightBth(event)" class="thirdContainerRightBtn">
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        `;
        thirdContainer.innerHTML += result;
    }).catch(err => {
        console.log("writePresentBox 에러 :" + err.massage);
        alert("writePresentBox 에러 :" + err.massage);
    })
}
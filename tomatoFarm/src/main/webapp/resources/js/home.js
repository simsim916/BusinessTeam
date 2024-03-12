'use strict';
/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 모듈예정 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
// 쉼표 찍기
function makeComa(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// itemBox 작성하기
function writeItemBox(data) {
    let result = `
        <div class="itemBox">
            <div class="itemImg">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <img src="/resources/img/itemImg/${data.code < 10000 ? 'default' : data.code}_1.jpg" alt="${data.name}">
            <div></div>
        </div>
        <div class="itemName">${data.name}</div>
        <div class="itemInfo">${data.brand}<br></div>
        <p class="itemPrice">${makeComa(data.price)}원</p>
        `;
    if (data.delivery > 0) {
        result += `
            <div class="itemDelivery"><span>배송비&nbsp;&nbsp;</span>${makeComa(data.delivery)}원</div>
            `;
    } else {
        result += `
            <div class="itemDelivery">무료배송</div>
        `;
    }
    result += `
        <div class="itemOption">
        `;
    if (data.delivery == 0) {
        result += `
            <div class="itemOptionFreeDelivery">무료배송</div>
            `;
    }
    if (data.event != null && data.event.length > 0) {
        result += `
            <div class="itemOptionEvent">${data.event}</div>
            `;
    }
    result += `
            </div>
        </div>
        `;

    return result;
}

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 모듈예정 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */

const slideBox = document.getElementsByClassName("slideBox");
const secondContainer = document.getElementById('secondContainer');
const thirdContainer = document.getElementById('thirdContainer');
let secondSlideBtn;
const adImgBox = document.getElementById('adImgBox');
const main = document.getElementById('main');
const header = document.getElementsByTagName('header')[0];

/* list */
let listfilter;;

const adImgList = ['fresheasy.jpg', 'mychef.jpg', 'signup.jpg', 'review.jpg']

let idx = 0;
let writeTarget = ['프레시지', '김구원선생', '마이셰프', '하림', '하루한킷'];

/* home */
// write
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollHeight - innerHeight - scrollY < 600) {
        if (writeTarget.length > idx) {
            writePresentBox(writeTarget[idx++]);
        }
    }
});

writeSlideContainer()

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Home View 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */

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

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Header 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */

/* 📗📗📗📗 TAG 📗📗📗📗 */

let firstCategory; // 카테고리 리스트
let searchBoxInput; // 헤더 메인 검색창 input 테그

writeHeader()

/* 📖📖📖📖 view 📖📖📖📖*/

function resetInputBox(ele) {
    searchBoxInput.value = '';
    searchBoxInput.focus();
    ele.closest("form").children[1].style.visibility = "hidden"
}

function appearinputBoxResetButton(ele) {
    ele.closest("form").children[1].style.visibility = "visible"
}

function sperateKorWord(str) {
    const kor_starts = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    const kor_middles = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
    const kor_ends = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

    const unicode_kor_start_num = 44032;
    const unicode_kor_end_num = 55203;

    const unicodeNum = str.charCodeAt(0);

    if (unicodeNum < unicode_kor_start_num || unicodeNum > unicode_kor_end_num) {
        return str;
    }

    // const kor_starts_index
}

function seachCategory(ele) {
    let key = ele.value;
    let liBox = ele.closest('ul').children;
    for (let i = 2; i < liBox.length; i++) {
        if (!liBox[i].innerText.includes(key)) {
            liBox[i].style.display = "none";
        } else {
            liBox[i].style.display = "block";
        }
    }
}

function searchBox(event) {
    event.preventDefault();
    let keyword = event.target.closest('form').children[0].value;
    changePageToList(keyword);
}

function searchBoxEnterKey(event) {
    if (event.which == 13) {
        searchBox(event)
    }
}

async function writeHeader() {
    let content = `
        <div id="loginBar">
            <div class="container">
                <a href="">고객센터</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="/member/login">로그인</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="">회원가입</a>
            </div>
        </div>

        <div id="searchBar">
            <div class="container">
                <div id="logoBox">
                    <a href="/">
                        <img src="../resources/img/logo.png" alt="로고">
                        <h1>토마토팜 tomatoFarm</h1>
                    </a>
                </div>
                <form id="searchBox">
                    <input onkeyup="searchBoxEnterKey(event)" oninput="appearinputBoxResetButton(this)"
                        id="searchBoxInput" type="text" placeholder="검색어를 입력해주세요.">
                    <i onclick="resetInputBox(this)" class="fa-solid fa-circle-xmark"></i>
                    <button onclick="searchBox(event)"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div id="searchRightBox">
                    <div id="myPage">
                        <a href="/"><i class="fa-solid fa-user"></i></a>
                    </div>
                    <div id="myCart">
                        <a href="/"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    <div id="myItem">
                        <a href="/"><i class="fa-solid fa-box-archive"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <nav>
            <div class="container">
                <div id="categoryBox">
                    <div id="categoryTag"><i class="fa-solid fa-bars"></i>&nbsp;&nbsp;&nbsp;카테고리</div>
                    <ul id="firstCategory">
                        <li></li>
                        <li id="firstCategorySearch">
                            <div>
                                <input onkeyup="seachCategory(this)" oninput="appearinputBoxResetButton2(this)"
                                    type="text"><i onclick="resetInputBox2(this)" class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul id="navBar">
                    <li><a href="">밀키트 주문</a></li>
                    <li><a href="">식단 주문</a></li>
                    <li><a href="">재료 주문</a></li>
                    <li><a href="">이벤트</a></li>
                </ul>
            </div>
        </nav>
    `;
    header.innerHTML = content;

    firstCategory = document.getElementById("firstCategory");
    searchBoxInput = document.getElementById("searchBoxInput");

    firstCategory.innerHTML += await makeHeader();

}

/* 💻💻💻💻 view model 💻💻💻💻*/
async function makeHeader() {
    let result = '';
    const data = await getSortList();
    for (let e of data) {
        result += `
                <li><img src="../resources/img/${e}.png" alt="${e} 이미지">${e}</li>
                `;
    }
    return result;
}

/* 📦📦📦📦 model 📦📦📦📦*/
async function getSortList() {
    let uri = '/item/sort';
    let response = await axios.get(uri);
    // console.log("🚨🚨🚨🚨 getSortList 에러 🚨🚨🚨🚨");
    return response.data;
}


/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Home 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
/* 💻💻💻💻 view model 💻💻💻💻*/
async function writeSlideContainer() {
    let data = await getEventItem();
    let result = `
            <div id="secondContainerList">
            <div class="slideBox">
        `;

    for (const e of data) {
        result += writeItemBox(e);
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
    secondContainer.innerHTML = result;
    secondSlideBtn = document.getElementById('secondSlideBtn');
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
                        <p class="typeBoxImgTitlePrice">${makeComa(data[0].price)}원</p>
                    </div>
                    <div class="typeBoxImgTitleBest">Best 상품</div>
                </a>
            <div class="typeBoxList">
                <div class="slideBox">
        `;
        for (let i = 1; i < 6; i++) {
            result += writeItemBox(data[i]);
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
    })
}

/* 📦📦📦📦 model 📦📦📦📦*/
async function getEventItem() {
    let uri = "/item/eventitem";
    const response = await axios.get(uri);
    return response.data;
}

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 List 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
/* 💻💻💻💻 view model 💻💻💻💻*/

function changePageToList(keyword) {
    main.innerHTML = `
        <div id="searchTitle" class="container">"<b>${keyword}</b>"<span>에 대한 검색 결과</span></div>
        <div class="container"><div>
    `;
    writeListFilter();
    writeItemList(keyword);
}

function writeListFilter() {
    main.children[1].innerHTML += `
        <div id="listfilter">
            <ul>
                <li onclick="showList(event)" class="sortB">
                    <i onclick="checkALL(event)" class="fa-regular fa-circle-check"></i>
                    <span>밀키트</span>
                    <ul>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>채선당</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>도리깨침</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>김구원선생</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>바른식</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>푸드어셈블</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>프레시지</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>마이셰프</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>LITTLENECK</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>하림</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>최현석의 쵸이닷</li>
                        <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>하루한킷</li>
                    </ul>

                    <hr>
                </li>
                <li onclick="showList(event)" class="sortB">
                    <i onclick="checkALL(event)" class="fa-regular fa-circle-check"></i>식재료
                    <ul>
                        <li><i onclick="checkALL(event)" class="fa-regular fa-circle-check"></i><span>건강식품</span>
                            <ul>
                                <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>영양보충제</li>
                                <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>특수분유</li>
                                <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>영장제</li>
                                <li onclick="checkSort(event)"><i class="fa-regular fa-circle-check"></i>기타</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>계육
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>닭</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭가슴살</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭근위</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭날개</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭다리</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭발</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭뼈</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭토막</li>
                                <li><i class="fa-regular fa-circle-check"></i>오리</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>농산가공
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>감자</li>
                                <li><i class="fa-regular fa-circle-check"></i>강낭콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>건포도</li>
                                <li><i class="fa-regular fa-circle-check"></i>구아카몰</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>드라이토마토</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>땅콩버터</li>
                                <li><i class="fa-regular fa-circle-check"></i>라즈베리쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>리치</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘</li>
                                <li><i class="fa-regular fa-circle-check"></i>마카다미아</li>
                                <li><i class="fa-regular fa-circle-check"></i>망고</li>
                                <li><i class="fa-regular fa-circle-check"></i>망고쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>매실</li>
                                <li><i class="fa-regular fa-circle-check"></i>무피클</li>
                                <li><i class="fa-regular fa-circle-check"></i>무화과</li>
                                <li><i class="fa-regular fa-circle-check"></i>믹스넛</li>
                                <li><i class="fa-regular fa-circle-check"></i>밤</li>
                                <li><i class="fa-regular fa-circle-check"></i>버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이키드빈스</li>
                                <li><i class="fa-regular fa-circle-check"></i>복숭아캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>블루베리쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>사과쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>스프레드</li>
                                <li><i class="fa-regular fa-circle-check"></i>아몬드</li>
                                <li><i class="fa-regular fa-circle-check"></i>아스파라거스</li>
                                <li><i class="fa-regular fa-circle-check"></i>양송이캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지필</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>올리브</li>
                                <li><i class="fa-regular fa-circle-check"></i>올리브슬라이스</li>
                                <li><i class="fa-regular fa-circle-check"></i>올리브홀</li>
                                <li><i class="fa-regular fa-circle-check"></i>완두콩캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>자두</li>
                                <li><i class="fa-regular fa-circle-check"></i>죽순캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>체리캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>초고버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>캐슈넛</li>
                                <li><i class="fa-regular fa-circle-check"></i>컬리플라워</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩고기</li>
                                <li><i class="fa-regular fa-circle-check"></i>크랜베리</li>
                                <li><i class="fa-regular fa-circle-check"></i>키드니빈스</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토홀</li>
                                <li><i class="fa-regular fa-circle-check"></i>파인애플캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>팥앙금</li>
                                <li><i class="fa-regular fa-circle-check"></i>팥캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도쨈</li>
                                <li><i class="fa-regular fa-circle-check"></i>표고캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>피스타치오</li>
                                <li><i class="fa-regular fa-circle-check"></i>피칸</li>
                                <li><i class="fa-regular fa-circle-check"></i>피클</li>
                                <li><i class="fa-regular fa-circle-check"></i>할라피뇨</li>
                                <li><i class="fa-regular fa-circle-check"></i>호두</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박앙금</li>
                                <li><i class="fa-regular fa-circle-check"></i>홀스레디쉬</li>
                                <li><i class="fa-regular fa-circle-check"></i>후르츠칵테일</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>돈육
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>삼겹살</li>
                                <li><i class="fa-regular fa-circle-check"></i>족발</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈지방</li>
                                <li><i class="fa-regular fa-circle-check"></i>목살</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈뼈</li>
                                <li><i class="fa-regular fa-circle-check"></i>껍데기</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈갈비</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈안심</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈등심</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈목심</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈사태</li>
                                <li><i class="fa-regular fa-circle-check"></i>전지</li>
                                <li><i class="fa-regular fa-circle-check"></i>후지</li>
                                <li><i class="fa-regular fa-circle-check"></i>항정살</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>면류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>컵라면</li>
                                <li><i class="fa-regular fa-circle-check"></i>봉지라면</li>
                                <li><i class="fa-regular fa-circle-check"></i>라면</li>
                                <li><i class="fa-regular fa-circle-check"></i>칼국수</li>
                                <li><i class="fa-regular fa-circle-check"></i>우동</li>
                                <li><i class="fa-regular fa-circle-check"></i>쫄면</li>
                                <li><i class="fa-regular fa-circle-check"></i>냉면</li>
                                <li><i class="fa-regular fa-circle-check"></i>당면</li>
                                <li><i class="fa-regular fa-circle-check"></i>국수</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌀국수</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩국수</li>
                                <li><i class="fa-regular fa-circle-check"></i>파스타</li>
                                <li><i class="fa-regular fa-circle-check"></i>중화면</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타면</li>
                                <li><i class="fa-regular fa-circle-check"></i>마카로니</li>
                                <li><i class="fa-regular fa-circle-check"></i>메밀면</li>
                                <li><i class="fa-regular fa-circle-check"></i>비빔면</li>
                                <li><i class="fa-regular fa-circle-check"></i>스파게티</li>
                                <li><i class="fa-regular fa-circle-check"></i>수제비</li>
                                <li><i class="fa-regular fa-circle-check"></i>새알심</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>분말류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>감자전분</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마전분</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수전분</li>
                                <li><i class="fa-regular fa-circle-check"></i>엿기름</li>
                                <li><i class="fa-regular fa-circle-check"></i>밀가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>호밀가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>빵가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>도토리가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>메밀가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>부침가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>튀김가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>녹두가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫도그가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫케익가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌀가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>미숫가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>코코넛가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨믹스</li>
                                <li><i class="fa-regular fa-circle-check"></i>케이준가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>이스트</li>
                                <li><i class="fa-regular fa-circle-check"></i>오트밀가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>젤라틴</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이킹파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>율무가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>호떡믹스</li>
                                <li><i class="fa-regular fa-circle-check"></i>슈가파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>데코파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박분말</li>
                                <li><i class="fa-regular fa-circle-check"></i>현미가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>초코렛파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>헤이즐넛파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>와플가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>흑미가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>브라우니가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>마가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>요거트파우더</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>생활용품
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>건전지</li>
                                <li><i class="fa-regular fa-circle-check"></i>마스크</li>
                                <li><i class="fa-regular fa-circle-check"></i>양초</li>
                                <li><i class="fa-regular fa-circle-check"></i>전구</li>
                                <li><i class="fa-regular fa-circle-check"></i>구두솔</li>
                                <li><i class="fa-regular fa-circle-check"></i>휴지통</li>
                                <li><i class="fa-regular fa-circle-check"></i>청소용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>빗자루</li>
                                <li><i class="fa-regular fa-circle-check"></i>목욕용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>대야</li>
                                <li><i class="fa-regular fa-circle-check"></i>비누곽</li>
                                <li><i class="fa-regular fa-circle-check"></i>바구니</li>
                                <li><i class="fa-regular fa-circle-check"></i>건조대</li>
                                <li><i class="fa-regular fa-circle-check"></i>PET컵</li>
                                <li><i class="fa-regular fa-circle-check"></i>전자기기</li>
                                <li><i class="fa-regular fa-circle-check"></i>종이컵</li>
                                <li><i class="fa-regular fa-circle-check"></i>걸레</li>
                                <li><i class="fa-regular fa-circle-check"></i>슬리퍼</li>
                                <li><i class="fa-regular fa-circle-check"></i>호스</li>
                                <li><i class="fa-regular fa-circle-check"></i>분무기</li>
                                <li><i class="fa-regular fa-circle-check"></i>기름종이</li>
                                <li><i class="fa-regular fa-circle-check"></i>휴대용가스렌지</li>
                                <li><i class="fa-regular fa-circle-check"></i>빨대</li>
                                <li><i class="fa-regular fa-circle-check"></i>요지</li>
                                <li><i class="fa-regular fa-circle-check"></i>쓰레기봉투</li>
                                <li><i class="fa-regular fa-circle-check"></i>홀더</li>
                                <li><i class="fa-regular fa-circle-check"></i>매트</li>
                                <li><i class="fa-regular fa-circle-check"></i>변기솔</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇼핑백</li>
                                <li><i class="fa-regular fa-circle-check"></i>안전용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>거름망</li>
                                <li><i class="fa-regular fa-circle-check"></i>집게</li>
                                <li><i class="fa-regular fa-circle-check"></i>장화</li>
                                <li><i class="fa-regular fa-circle-check"></i>소모품</li>
                                <li><i class="fa-regular fa-circle-check"></i>가전제품</li>
                                <li><i class="fa-regular fa-circle-check"></i>수세미</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>장갑</li>
                                <li><i class="fa-regular fa-circle-check"></i>냅킨</li>
                                <li><i class="fa-regular fa-circle-check"></i>바가지</li>
                                <li><i class="fa-regular fa-circle-check"></i>감자칼</li>
                                <li><i class="fa-regular fa-circle-check"></i>젓가락</li>
                                <li><i class="fa-regular fa-circle-check"></i>숟가락</li>
                                <li><i class="fa-regular fa-circle-check"></i>계란절단기</li>
                                <li><i class="fa-regular fa-circle-check"></i>다시멸치통</li>
                                <li><i class="fa-regular fa-circle-check"></i>망</li>
                                <li><i class="fa-regular fa-circle-check"></i>냄비</li>
                                <li><i class="fa-regular fa-circle-check"></i>양념통</li>
                                <li><i class="fa-regular fa-circle-check"></i>소스용기</li>
                                <li><i class="fa-regular fa-circle-check"></i>위생백</li>
                                <li><i class="fa-regular fa-circle-check"></i>지퍼백</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이킹컵</li>
                                <li><i class="fa-regular fa-circle-check"></i>김발</li>
                                <li><i class="fa-regular fa-circle-check"></i>포크</li>
                                <li><i class="fa-regular fa-circle-check"></i>접시</li>
                                <li><i class="fa-regular fa-circle-check"></i>컵</li>
                                <li><i class="fa-regular fa-circle-check"></i>주방용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>식기</li>
                                <li><i class="fa-regular fa-circle-check"></i>수저</li>
                                <li><i class="fa-regular fa-circle-check"></i>행주</li>
                                <li><i class="fa-regular fa-circle-check"></i>가위</li>
                                <li><i class="fa-regular fa-circle-check"></i>칼</li>
                                <li><i class="fa-regular fa-circle-check"></i>밀폐용기</li>
                                <li><i class="fa-regular fa-circle-check"></i>쟁반</li>
                                <li><i class="fa-regular fa-circle-check"></i>뒤지개</li>
                                <li><i class="fa-regular fa-circle-check"></i>국자</li>
                                <li><i class="fa-regular fa-circle-check"></i>물병</li>
                                <li><i class="fa-regular fa-circle-check"></i>위생장갑</li>
                                <li><i class="fa-regular fa-circle-check"></i>거품기</li>
                                <li><i class="fa-regular fa-circle-check"></i>고무장갑</li>
                                <li><i class="fa-regular fa-circle-check"></i>호일</li>
                                <li><i class="fa-regular fa-circle-check"></i>주걱</li>
                                <li><i class="fa-regular fa-circle-check"></i>건지기</li>
                                <li><i class="fa-regular fa-circle-check"></i>도시락</li>
                                <li><i class="fa-regular fa-circle-check"></i>용기</li>
                                <li><i class="fa-regular fa-circle-check"></i>그릇</li>
                                <li><i class="fa-regular fa-circle-check"></i>산적꼬지</li>
                                <li><i class="fa-regular fa-circle-check"></i>앞치마</li>
                                <li><i class="fa-regular fa-circle-check"></i>위생모</li>
                                <li><i class="fa-regular fa-circle-check"></i>랩</li>
                                <li><i class="fa-regular fa-circle-check"></i>롤팩</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이킹용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>오프너</li>
                                <li><i class="fa-regular fa-circle-check"></i>커피여과지</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬짜기</li>
                                <li><i class="fa-regular fa-circle-check"></i>도마</li>
                                <li><i class="fa-regular fa-circle-check"></i>칼갈이</li>
                                <li><i class="fa-regular fa-circle-check"></i>저울</li>
                                <li><i class="fa-regular fa-circle-check"></i>온도계</li>
                                <li><i class="fa-regular fa-circle-check"></i>뚝배기</li>
                                <li><i class="fa-regular fa-circle-check"></i>후라이팬</li>
                                <li><i class="fa-regular fa-circle-check"></i>치약</li>
                                <li><i class="fa-regular fa-circle-check"></i>비누</li>
                                <li><i class="fa-regular fa-circle-check"></i>칫솔</li>
                                <li><i class="fa-regular fa-circle-check"></i>물티슈</li>
                                <li><i class="fa-regular fa-circle-check"></i>티슈</li>
                                <li><i class="fa-regular fa-circle-check"></i>화장지</li>
                                <li><i class="fa-regular fa-circle-check"></i>키친타올</li>
                                <li><i class="fa-regular fa-circle-check"></i>헤어망</li>
                                <li><i class="fa-regular fa-circle-check"></i>헤어용품</li>
                                <li><i class="fa-regular fa-circle-check"></i>펜</li>
                                <li><i class="fa-regular fa-circle-check"></i>테이프</li>
                                <li><i class="fa-regular fa-circle-check"></i>고무줄</li>
                                <li><i class="fa-regular fa-circle-check"></i>네임텍</li>
                                <li><i class="fa-regular fa-circle-check"></i>탈취제</li>
                                <li><i class="fa-regular fa-circle-check"></i>방향제</li>
                                <li><i class="fa-regular fa-circle-check"></i>영양사까운</li>
                                <li><i class="fa-regular fa-circle-check"></i>조리사유니폼</li>
                                <li><i class="fa-regular fa-circle-check"></i>조리원유니폼</li>
                                <li><i class="fa-regular fa-circle-check"></i>근무화</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>세제류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>세정제</li>
                                <li><i class="fa-regular fa-circle-check"></i>락스</li>
                                <li><i class="fa-regular fa-circle-check"></i>식기세척기세제</li>
                                <li><i class="fa-regular fa-circle-check"></i>세제</li>
                                <li><i class="fa-regular fa-circle-check"></i>주방세제</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>섬유유연제</li>
                                <li><i class="fa-regular fa-circle-check"></i>세탁보조제</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>수산가공
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>새우까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>생선까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>곤약</li>
                                <li><i class="fa-regular fa-circle-check"></i>깐쇼새우</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우버거</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우완자</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어링</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어바</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어볼</li>
                                <li><i class="fa-regular fa-circle-check"></i>타코야끼</li>
                                <li><i class="fa-regular fa-circle-check"></i>해물완자</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우볼</li>
                                <li><i class="fa-regular fa-circle-check"></i>삼치구이</li>
                                <li><i class="fa-regular fa-circle-check"></i>게맛살</li>
                                <li><i class="fa-regular fa-circle-check"></i>집게맛살</li>
                                <li><i class="fa-regular fa-circle-check"></i>크래미</li>
                                <li><i class="fa-regular fa-circle-check"></i>꼬치어묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>찐어묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>어묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫바</li>
                                <li><i class="fa-regular fa-circle-check"></i>골뱅이캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>꽁치캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>참치캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>고등어캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>엔쵸비</li>
                                <li><i class="fa-regular fa-circle-check"></i>달팽이캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>김가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>김자반</li>
                                <li><i class="fa-regular fa-circle-check"></i>김밥김</li>
                                <li><i class="fa-regular fa-circle-check"></i>전장김</li>
                                <li><i class="fa-regular fa-circle-check"></i>도시락김</li>
                                <li><i class="fa-regular fa-circle-check"></i>미역</li>
                                <li><i class="fa-regular fa-circle-check"></i>김</li>
                                <li><i class="fa-regular fa-circle-check"></i>다시마</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>야채
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>양상추</li>
                                <li><i class="fa-regular fa-circle-check"></i>양배추</li>
                                <li><i class="fa-regular fa-circle-check"></i>파슬리</li>
                                <li><i class="fa-regular fa-circle-check"></i>브로컬리</li>
                                <li><i class="fa-regular fa-circle-check"></i>샐러리</li>
                                <li><i class="fa-regular fa-circle-check"></i>컬리플라워</li>
                                <li><i class="fa-regular fa-circle-check"></i>아스파라거스</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타양채</li>
                                <li><i class="fa-regular fa-circle-check"></i>오크라</li>
                                <li><i class="fa-regular fa-circle-check"></i>열무</li>
                                <li><i class="fa-regular fa-circle-check"></i>배추</li>
                                <li><i class="fa-regular fa-circle-check"></i>상추</li>
                                <li><i class="fa-regular fa-circle-check"></i>치커리</li>
                                <li><i class="fa-regular fa-circle-check"></i>케일</li>
                                <li><i class="fa-regular fa-circle-check"></i>청경채</li>
                                <li><i class="fa-regular fa-circle-check"></i>비타민</li>
                                <li><i class="fa-regular fa-circle-check"></i>겨자잎</li>
                                <li><i class="fa-regular fa-circle-check"></i>로메인</li>
                                <li><i class="fa-regular fa-circle-check"></i>근대</li>
                                <li><i class="fa-regular fa-circle-check"></i>비트</li>
                                <li><i class="fa-regular fa-circle-check"></i>당귀</li>
                                <li><i class="fa-regular fa-circle-check"></i>쑥갓</li>
                                <li><i class="fa-regular fa-circle-check"></i>시금치</li>
                                <li><i class="fa-regular fa-circle-check"></i>깻잎</li>
                                <li><i class="fa-regular fa-circle-check"></i>부추</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추잎</li>
                                <li><i class="fa-regular fa-circle-check"></i>미나리</li>
                                <li><i class="fa-regular fa-circle-check"></i>유채</li>
                                <li><i class="fa-regular fa-circle-check"></i>롤라로사</li>
                                <li><i class="fa-regular fa-circle-check"></i>아욱</li>
                                <li><i class="fa-regular fa-circle-check"></i>얼갈이</li>
                                <li><i class="fa-regular fa-circle-check"></i>시래기</li>
                                <li><i class="fa-regular fa-circle-check"></i>적채</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘쫑</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>고수</li>
                                <li><i class="fa-regular fa-circle-check"></i>무</li>
                                <li><i class="fa-regular fa-circle-check"></i>당근</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마</li>
                                <li><i class="fa-regular fa-circle-check"></i>감자</li>
                                <li><i class="fa-regular fa-circle-check"></i>연근</li>
                                <li><i class="fa-regular fa-circle-check"></i>토란</li>
                                <li><i class="fa-regular fa-circle-check"></i>우엉</li>
                                <li><i class="fa-regular fa-circle-check"></i>더덕</li>
                                <li><i class="fa-regular fa-circle-check"></i>인삼</li>
                                <li><i class="fa-regular fa-circle-check"></i>레디쉬</li>
                                <li><i class="fa-regular fa-circle-check"></i>마</li>
                                <li><i class="fa-regular fa-circle-check"></i>알타리</li>
                                <li><i class="fa-regular fa-circle-check"></i>엄나무</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박오가리</li>
                                <li><i class="fa-regular fa-circle-check"></i>가지</li>
                                <li><i class="fa-regular fa-circle-check"></i>오이</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박</li>
                                <li><i class="fa-regular fa-circle-check"></i>피망</li>
                                <li><i class="fa-regular fa-circle-check"></i>대추</li>
                                <li><i class="fa-regular fa-circle-check"></i>파프리카</li>
                                <li><i class="fa-regular fa-circle-check"></i>밤</li>
                                <li><i class="fa-regular fa-circle-check"></i>치자</li>
                                <li><i class="fa-regular fa-circle-check"></i>구기자</li>
                                <li><i class="fa-regular fa-circle-check"></i>둥굴레</li>
                                <li><i class="fa-regular fa-circle-check"></i>은행</li>
                                <li><i class="fa-regular fa-circle-check"></i>호두</li>
                                <li><i class="fa-regular fa-circle-check"></i>잣</li>
                                <li><i class="fa-regular fa-circle-check"></i>피스타치오</li>
                                <li><i class="fa-regular fa-circle-check"></i>아몬드</li>
                                <li><i class="fa-regular fa-circle-check"></i>해바라기씨</li>
                                <li><i class="fa-regular fa-circle-check"></i>캐슈넛</li>
                                <li><i class="fa-regular fa-circle-check"></i>계피</li>
                                <li><i class="fa-regular fa-circle-check"></i>오미자</li>
                                <li><i class="fa-regular fa-circle-check"></i>황기</li>
                                <li><i class="fa-regular fa-circle-check"></i>가시오가피</li>
                                <li><i class="fa-regular fa-circle-check"></i>감초</li>
                                <li><i class="fa-regular fa-circle-check"></i>단호박</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추</li>
                                <li><i class="fa-regular fa-circle-check"></i>양파</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘</li>
                                <li><i class="fa-regular fa-circle-check"></i>파</li>
                                <li><i class="fa-regular fa-circle-check"></i>생강</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>표고버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>양송이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>느타리버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>목이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>팽이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>백만송이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>새송이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>송이버섯</li>
                                <li><i class="fa-regular fa-circle-check"></i>식용꽃</li>
                                <li><i class="fa-regular fa-circle-check"></i>싹채소</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이비채소</li>
                                <li><i class="fa-regular fa-circle-check"></i>라디치오</li>
                                <li><i class="fa-regular fa-circle-check"></i>알파파</li>
                                <li><i class="fa-regular fa-circle-check"></i>민트</li>
                                <li><i class="fa-regular fa-circle-check"></i>루꼴라</li>
                                <li><i class="fa-regular fa-circle-check"></i>아이순</li>
                                <li><i class="fa-regular fa-circle-check"></i>무순</li>
                                <li><i class="fa-regular fa-circle-check"></i>바실</li>
                                <li><i class="fa-regular fa-circle-check"></i>토란대</li>
                                <li><i class="fa-regular fa-circle-check"></i>고사리</li>
                                <li><i class="fa-regular fa-circle-check"></i>도라지</li>
                                <li><i class="fa-regular fa-circle-check"></i>곤드레</li>
                                <li><i class="fa-regular fa-circle-check"></i>방풍</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마순</li>
                                <li><i class="fa-regular fa-circle-check"></i>취나물</li>
                                <li><i class="fa-regular fa-circle-check"></i>고비</li>
                                <li><i class="fa-regular fa-circle-check"></i>연잎</li>
                                <li><i class="fa-regular fa-circle-check"></i>계란</li>
                                <li><i class="fa-regular fa-circle-check"></i>메추리알</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>양곡류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>현미</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌀</li>
                                <li><i class="fa-regular fa-circle-check"></i>찹쌀</li>
                                <li><i class="fa-regular fa-circle-check"></i>흑미</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타쌀</li>
                                <li><i class="fa-regular fa-circle-check"></i>현미찹쌀</li>
                                <li><i class="fa-regular fa-circle-check"></i>적미</li>
                                <li><i class="fa-regular fa-circle-check"></i>보리</li>
                                <li><i class="fa-regular fa-circle-check"></i>찰보리</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수</li>
                                <li><i class="fa-regular fa-circle-check"></i>조</li>
                                <li><i class="fa-regular fa-circle-check"></i>기장</li>
                                <li><i class="fa-regular fa-circle-check"></i>율무</li>
                                <li><i class="fa-regular fa-circle-check"></i>수수</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타잡곡</li>
                                <li><i class="fa-regular fa-circle-check"></i>혼합곡</li>
                                <li><i class="fa-regular fa-circle-check"></i>참깨</li>
                                <li><i class="fa-regular fa-circle-check"></i>백태콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>강낭콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>땅콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>팥</li>
                                <li><i class="fa-regular fa-circle-check"></i>녹두</li>
                                <li><i class="fa-regular fa-circle-check"></i>완두콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>검정콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타콩</li>
                                <li><i class="fa-regular fa-circle-check"></i>동부콩</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>양육
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>프렌치랙</li>
                                <li><i class="fa-regular fa-circle-check"></i>정육</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>어패류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>능성어</li>
                                <li><i class="fa-regular fa-circle-check"></i>조기</li>
                                <li><i class="fa-regular fa-circle-check"></i>굴비</li>
                                <li><i class="fa-regular fa-circle-check"></i>동태</li>
                                <li><i class="fa-regular fa-circle-check"></i>가자미</li>
                                <li><i class="fa-regular fa-circle-check"></i>임연수</li>
                                <li><i class="fa-regular fa-circle-check"></i>갈치</li>
                                <li><i class="fa-regular fa-circle-check"></i>꽁치</li>
                                <li><i class="fa-regular fa-circle-check"></i>고등어</li>
                                <li><i class="fa-regular fa-circle-check"></i>연어</li>
                                <li><i class="fa-regular fa-circle-check"></i>방어</li>
                                <li><i class="fa-regular fa-circle-check"></i>병어</li>
                                <li><i class="fa-regular fa-circle-check"></i>대구</li>
                                <li><i class="fa-regular fa-circle-check"></i>명태</li>
                                <li><i class="fa-regular fa-circle-check"></i>장어</li>
                                <li><i class="fa-regular fa-circle-check"></i>삼치</li>
                                <li><i class="fa-regular fa-circle-check"></i>메기</li>
                                <li><i class="fa-regular fa-circle-check"></i>우럭</li>
                                <li><i class="fa-regular fa-circle-check"></i>도미</li>
                                <li><i class="fa-regular fa-circle-check"></i>미꾸라지</li>
                                <li><i class="fa-regular fa-circle-check"></i>가오리</li>
                                <li><i class="fa-regular fa-circle-check"></i>아귀</li>
                                <li><i class="fa-regular fa-circle-check"></i>참치</li>
                                <li><i class="fa-regular fa-circle-check"></i>날치</li>
                                <li><i class="fa-regular fa-circle-check"></i>민어</li>
                                <li><i class="fa-regular fa-circle-check"></i>농어</li>
                                <li><i class="fa-regular fa-circle-check"></i>복어</li>
                                <li><i class="fa-regular fa-circle-check"></i>홍어</li>
                                <li><i class="fa-regular fa-circle-check"></i>적어</li>
                                <li><i class="fa-regular fa-circle-check"></i>멸치</li>
                                <li><i class="fa-regular fa-circle-check"></i>뱅어</li>
                                <li><i class="fa-regular fa-circle-check"></i>보리멸</li>
                                <li><i class="fa-regular fa-circle-check"></i>코다리</li>
                                <li><i class="fa-regular fa-circle-check"></i>쥐포</li>
                                <li><i class="fa-regular fa-circle-check"></i>삭스핀</li>
                                <li><i class="fa-regular fa-circle-check"></i>북어</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>디포리</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어</li>
                                <li><i class="fa-regular fa-circle-check"></i>낙지</li>
                                <li><i class="fa-regular fa-circle-check"></i>문어</li>
                                <li><i class="fa-regular fa-circle-check"></i>주꾸미</li>
                                <li><i class="fa-regular fa-circle-check"></i>한치</li>
                                <li><i class="fa-regular fa-circle-check"></i>해파리</li>
                                <li><i class="fa-regular fa-circle-check"></i>꼴뚜기</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우</li>
                                <li><i class="fa-regular fa-circle-check"></i>게</li>
                                <li><i class="fa-regular fa-circle-check"></i>가재</li>
                                <li><i class="fa-regular fa-circle-check"></i>굴</li>
                                <li><i class="fa-regular fa-circle-check"></i>전복</li>
                                <li><i class="fa-regular fa-circle-check"></i>홍합</li>
                                <li><i class="fa-regular fa-circle-check"></i>조개</li>
                                <li><i class="fa-regular fa-circle-check"></i>모시조개</li>
                                <li><i class="fa-regular fa-circle-check"></i>가리비</li>
                                <li><i class="fa-regular fa-circle-check"></i>골뱅이</li>
                                <li><i class="fa-regular fa-circle-check"></i>관자</li>
                                <li><i class="fa-regular fa-circle-check"></i>꼬막</li>
                                <li><i class="fa-regular fa-circle-check"></i>소라</li>
                                <li><i class="fa-regular fa-circle-check"></i>바지락</li>
                                <li><i class="fa-regular fa-circle-check"></i>재첩</li>
                                <li><i class="fa-regular fa-circle-check"></i>해삼</li>
                                <li><i class="fa-regular fa-circle-check"></i>멍게</li>
                                <li><i class="fa-regular fa-circle-check"></i>우렁</li>
                                <li><i class="fa-regular fa-circle-check"></i>동죽</li>
                                <li><i class="fa-regular fa-circle-check"></i>미더덕</li>
                                <li><i class="fa-regular fa-circle-check"></i>개불</li>
                                <li><i class="fa-regular fa-circle-check"></i>성게</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>우육
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>갈비</li>
                                <li><i class="fa-regular fa-circle-check"></i>안심</li>
                                <li><i class="fa-regular fa-circle-check"></i>등심</li>
                                <li><i class="fa-regular fa-circle-check"></i>목심</li>
                                <li><i class="fa-regular fa-circle-check"></i>사태</li>
                                <li><i class="fa-regular fa-circle-check"></i>도가니</li>
                                <li><i class="fa-regular fa-circle-check"></i>홍두깨</li>
                                <li><i class="fa-regular fa-circle-check"></i>우둔</li>
                                <li><i class="fa-regular fa-circle-check"></i>설도</li>
                                <li><i class="fa-regular fa-circle-check"></i>전각</li>
                                <li><i class="fa-regular fa-circle-check"></i>양지</li>
                                <li><i class="fa-regular fa-circle-check"></i>채끝</li>
                                <li><i class="fa-regular fa-circle-check"></i>안창</li>
                                <li><i class="fa-regular fa-circle-check"></i>토시</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>우족</li>
                                <li><i class="fa-regular fa-circle-check"></i>뼈</li>
                                <li><i class="fa-regular fa-circle-check"></i>지방</li>
                                <li><i class="fa-regular fa-circle-check"></i>차돌박이</li>
                                <li><i class="fa-regular fa-circle-check"></i>머리</li>
                                <li><i class="fa-regular fa-circle-check"></i>꼬리</li>
                                <li><i class="fa-regular fa-circle-check"></i>곱창</li>
                                <li><i class="fa-regular fa-circle-check"></i>설깃</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>유제품
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>요구르트</li>
                                <li><i class="fa-regular fa-circle-check"></i>우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>바나나우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>커피우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>초코우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>호상요구르트</li>
                                <li><i class="fa-regular fa-circle-check"></i>액상요구르트</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타우유</li>
                                <li><i class="fa-regular fa-circle-check"></i>치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>버터</li>
                                <li><i class="fa-regular fa-circle-check"></i>두유</li>
                                <li><i class="fa-regular fa-circle-check"></i>샤워크림</li>
                                <li><i class="fa-regular fa-circle-check"></i>휘핑크림</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>연유</li>
                                <li><i class="fa-regular fa-circle-check"></i>마가린</li>
                                <li><i class="fa-regular fa-circle-check"></i>크림</li>
                                <li><i class="fa-regular fa-circle-check"></i>모짜렐라치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>크림치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>파마산치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>고르곤졸라치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>까망베르치즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>분유</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>유지류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>식용유</li>
                                <li><i class="fa-regular fa-circle-check"></i>올리브유</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도씨유</li>
                                <li><i class="fa-regular fa-circle-check"></i>참기름</li>
                                <li><i class="fa-regular fa-circle-check"></i>들기름</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추기름</li>
                                <li><i class="fa-regular fa-circle-check"></i>대두유</li>
                                <li><i class="fa-regular fa-circle-check"></i>오일</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇼트닝</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>음료차
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>곡물음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>식혜</li>
                                <li><i class="fa-regular fa-circle-check"></i>콜라</li>
                                <li><i class="fa-regular fa-circle-check"></i>사이다</li>
                                <li><i class="fa-regular fa-circle-check"></i>탄산음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>탄산수</li>
                                <li><i class="fa-regular fa-circle-check"></i>과즙음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>감귤주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>당근주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>망고주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>파인애플주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>야채주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>알로에주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬에이드</li>
                                <li><i class="fa-regular fa-circle-check"></i>자몽주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>매실주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>사과주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>복숭아주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>배주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>블루베리주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>키위주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>석류주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>혼합주스</li>
                                <li><i class="fa-regular fa-circle-check"></i>생수</li>
                                <li><i class="fa-regular fa-circle-check"></i>얼음</li>
                                <li><i class="fa-regular fa-circle-check"></i>우엉차</li>
                                <li><i class="fa-regular fa-circle-check"></i>녹차</li>
                                <li><i class="fa-regular fa-circle-check"></i>코코아</li>
                                <li><i class="fa-regular fa-circle-check"></i>둥글레차</li>
                                <li><i class="fa-regular fa-circle-check"></i>율무차</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수차</li>
                                <li><i class="fa-regular fa-circle-check"></i>쟈스민차</li>
                                <li><i class="fa-regular fa-circle-check"></i>생강차</li>
                                <li><i class="fa-regular fa-circle-check"></i>대추차</li>
                                <li><i class="fa-regular fa-circle-check"></i>모과차</li>
                                <li><i class="fa-regular fa-circle-check"></i>유자차</li>
                                <li><i class="fa-regular fa-circle-check"></i>홍차</li>
                                <li><i class="fa-regular fa-circle-check"></i>현미차</li>
                                <li><i class="fa-regular fa-circle-check"></i>인삼차</li>
                                <li><i class="fa-regular fa-circle-check"></i>국화차</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌍화차</li>
                                <li><i class="fa-regular fa-circle-check"></i>결명자차</li>
                                <li><i class="fa-regular fa-circle-check"></i>보리차</li>
                                <li><i class="fa-regular fa-circle-check"></i>꿀차</li>
                                <li><i class="fa-regular fa-circle-check"></i>대추생강차</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수수염차</li>
                                <li><i class="fa-regular fa-circle-check"></i>메밀차</li>
                                <li><i class="fa-regular fa-circle-check"></i>아이스티</li>
                                <li><i class="fa-regular fa-circle-check"></i>페퍼민트차</li>
                                <li><i class="fa-regular fa-circle-check"></i>캐모마일차</li>
                                <li><i class="fa-regular fa-circle-check"></i>허브차</li>
                                <li><i class="fa-regular fa-circle-check"></i>마테차</li>
                                <li><i class="fa-regular fa-circle-check"></i>오미자차</li>
                                <li><i class="fa-regular fa-circle-check"></i>혼합차</li>
                                <li><i class="fa-regular fa-circle-check"></i>헛개차</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬차</li>
                                <li><i class="fa-regular fa-circle-check"></i>복숭아차</li>
                                <li><i class="fa-regular fa-circle-check"></i>귤차</li>
                                <li><i class="fa-regular fa-circle-check"></i>믹스커피</li>
                                <li><i class="fa-regular fa-circle-check"></i>캔커피</li>
                                <li><i class="fa-regular fa-circle-check"></i>원두커피</li>
                                <li><i class="fa-regular fa-circle-check"></i>커피</li>
                                <li><i class="fa-regular fa-circle-check"></i>자몽농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>수정과농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>식혜농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>매실농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>살구농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>키위농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>파인애플농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>복분자농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>유자농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>오미자농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>석류농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>다시마농축액</li>
                                <li><i class="fa-regular fa-circle-check"></i>이온음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>섬유음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>인삼음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>에너지음료</li>
                                <li><i class="fa-regular fa-circle-check"></i>비타민음료</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>일반가공
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>또띠아</li>
                                <li><i class="fa-regular fa-circle-check"></i>라이스페이퍼</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>참치샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>감자샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>단호박샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>콘샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>에그샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>파스타샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>마카로니샐러드</li>
                                <li><i class="fa-regular fa-circle-check"></i>반찬류</li>
                                <li><i class="fa-regular fa-circle-check"></i>카레</li>
                                <li><i class="fa-regular fa-circle-check"></i>짜장</li>
                                <li><i class="fa-regular fa-circle-check"></i>하이라이스</li>
                                <li><i class="fa-regular fa-circle-check"></i>HMR</li>
                                <li><i class="fa-regular fa-circle-check"></i>우거지국</li>
                                <li><i class="fa-regular fa-circle-check"></i>알탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>전골</li>
                                <li><i class="fa-regular fa-circle-check"></i>용기스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>북어해장국</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>즉석밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>곰탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>갈비탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>삼계탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>영양밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>삼각김밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>볶음밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>죽</li>
                                <li><i class="fa-regular fa-circle-check"></i>육개장</li>
                                <li><i class="fa-regular fa-circle-check"></i>된장국</li>
                                <li><i class="fa-regular fa-circle-check"></i>피자</li>
                                <li><i class="fa-regular fa-circle-check"></i>미역국</li>
                                <li><i class="fa-regular fa-circle-check"></i>김치찌개</li>
                                <li><i class="fa-regular fa-circle-check"></i>국</li>
                                <li><i class="fa-regular fa-circle-check"></i>추어탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>그라탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>누룽지</li>
                                <li><i class="fa-regular fa-circle-check"></i>부대찌개</li>
                                <li><i class="fa-regular fa-circle-check"></i>주먹밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>떡볶이</li>
                                <li><i class="fa-regular fa-circle-check"></i>샌드위치</li>
                                <li><i class="fa-regular fa-circle-check"></i>도시락</li>
                                <li><i class="fa-regular fa-circle-check"></i>덮밥</li>
                                <li><i class="fa-regular fa-circle-check"></i>브로컬리스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>양송이스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>크림스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇠고기스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>야채스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>감자스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>전병</li>
                                <li><i class="fa-regular fa-circle-check"></i>만두</li>
                                <li><i class="fa-regular fa-circle-check"></i>고기만두</li>
                                <li><i class="fa-regular fa-circle-check"></i>군만두</li>
                                <li><i class="fa-regular fa-circle-check"></i>김치만두</li>
                                <li><i class="fa-regular fa-circle-check"></i>물만두</li>
                                <li><i class="fa-regular fa-circle-check"></i>딤섬</li>
                                <li><i class="fa-regular fa-circle-check"></i>꽃빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>춘권</li>
                                <li><i class="fa-regular fa-circle-check"></i>춘권피</li>
                                <li><i class="fa-regular fa-circle-check"></i>덴까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>양파튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>야채튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>김말이튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>고구마튀김</li>
                                <li><i class="fa-regular fa-circle-check"></i>고로케</li>
                                <li><i class="fa-regular fa-circle-check"></i>냉동감자</li>
                                <li><i class="fa-regular fa-circle-check"></i>치즈스틱</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>제과
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>젤리</li>
                                <li><i class="fa-regular fa-circle-check"></i>푸딩</li>
                                <li><i class="fa-regular fa-circle-check"></i>팝콘</li>
                                <li><i class="fa-regular fa-circle-check"></i>스낵</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>건빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우깡</li>
                                <li><i class="fa-regular fa-circle-check"></i>씨리얼</li>
                                <li><i class="fa-regular fa-circle-check"></i>양파링</li>
                                <li><i class="fa-regular fa-circle-check"></i>초코파이</li>
                                <li><i class="fa-regular fa-circle-check"></i>쿠키</li>
                                <li><i class="fa-regular fa-circle-check"></i>웨하스</li>
                                <li><i class="fa-regular fa-circle-check"></i>샤브레</li>
                                <li><i class="fa-regular fa-circle-check"></i>와플</li>
                                <li><i class="fa-regular fa-circle-check"></i>죠리퐁</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어칩</li>
                                <li><i class="fa-regular fa-circle-check"></i>붕어빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>쿠크다스</li>
                                <li><i class="fa-regular fa-circle-check"></i>과자</li>
                                <li><i class="fa-regular fa-circle-check"></i>크리스피롤</li>
                                <li><i class="fa-regular fa-circle-check"></i>꿀꽈배기</li>
                                <li><i class="fa-regular fa-circle-check"></i>프링글스</li>
                                <li><i class="fa-regular fa-circle-check"></i>크래커</li>
                                <li><i class="fa-regular fa-circle-check"></i>칼로리바란스</li>
                                <li><i class="fa-regular fa-circle-check"></i>롤케익</li>
                                <li><i class="fa-regular fa-circle-check"></i>치아바타</li>
                                <li><i class="fa-regular fa-circle-check"></i>타르트</li>
                                <li><i class="fa-regular fa-circle-check"></i>식빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>팥빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>크림빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>케익</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>햄버거빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫도그빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>모닝빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>소보루빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>페스트리</li>
                                <li><i class="fa-regular fa-circle-check"></i>호밀빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>찐빵/호빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>머핀</li>
                                <li><i class="fa-regular fa-circle-check"></i>카스텔라</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이글</li>
                                <li><i class="fa-regular fa-circle-check"></i>바게트</li>
                                <li><i class="fa-regular fa-circle-check"></i>생지</li>
                                <li><i class="fa-regular fa-circle-check"></i>호떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>크로와상</li>
                                <li><i class="fa-regular fa-circle-check"></i>마들렌</li>
                                <li><i class="fa-regular fa-circle-check"></i>파운드빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>도너츠</li>
                                <li><i class="fa-regular fa-circle-check"></i>만주</li>
                                <li><i class="fa-regular fa-circle-check"></i>마카롱</li>
                                <li><i class="fa-regular fa-circle-check"></i>슈</li>
                                <li><i class="fa-regular fa-circle-check"></i>파이</li>
                                <li><i class="fa-regular fa-circle-check"></i>피자빵</li>
                                <li><i class="fa-regular fa-circle-check"></i>브라우니</li>
                                <li><i class="fa-regular fa-circle-check"></i>사탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>초콜릿</li>
                                <li><i class="fa-regular fa-circle-check"></i>카라멜</li>
                                <li><i class="fa-regular fa-circle-check"></i>비스켓</li>
                                <li><i class="fa-regular fa-circle-check"></i>아이스경단</li>
                                <li><i class="fa-regular fa-circle-check"></i>아이스크림</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>조리식품
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>콩나물</li>
                                <li><i class="fa-regular fa-circle-check"></i>숙주</li>
                                <li><i class="fa-regular fa-circle-check"></i>감자전</li>
                                <li><i class="fa-regular fa-circle-check"></i>김치전</li>
                                <li><i class="fa-regular fa-circle-check"></i>깻잎전</li>
                                <li><i class="fa-regular fa-circle-check"></i>부추전</li>
                                <li><i class="fa-regular fa-circle-check"></i>산적</li>
                                <li><i class="fa-regular fa-circle-check"></i>오코노미야끼</li>
                                <li><i class="fa-regular fa-circle-check"></i>옥수수전</li>
                                <li><i class="fa-regular fa-circle-check"></i>해물파전</li>
                                <li><i class="fa-regular fa-circle-check"></i>호박전</li>
                                <li><i class="fa-regular fa-circle-check"></i>녹두전</li>
                                <li><i class="fa-regular fa-circle-check"></i>동태전</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타전</li>
                                <li><i class="fa-regular fa-circle-check"></i>얼갈이김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>깻잎김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>열무김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>갓김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>동치미</li>
                                <li><i class="fa-regular fa-circle-check"></i>보쌈김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>백김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>겉절이김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>깍두기</li>
                                <li><i class="fa-regular fa-circle-check"></i>배추김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>냉면김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>나박김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>묵은지김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>볶음김치</li>
                                <li><i class="fa-regular fa-circle-check"></i>섞박지</li>
                                <li><i class="fa-regular fa-circle-check"></i>진미채무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>계란말이</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈육조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>명태무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>버섯볶음</li>
                                <li><i class="fa-regular fa-circle-check"></i>명엽채볶음</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어볶음</li>
                                <li><i class="fa-regular fa-circle-check"></i>쥐어채볶음</li>
                                <li><i class="fa-regular fa-circle-check"></i>단무지</li>
                                <li><i class="fa-regular fa-circle-check"></i>락교</li>
                                <li><i class="fa-regular fa-circle-check"></i>짜사이</li>
                                <li><i class="fa-regular fa-circle-check"></i>해초무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>더덕무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>무말랭이무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>무우지</li>
                                <li><i class="fa-regular fa-circle-check"></i>깻잎지</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추지</li>
                                <li><i class="fa-regular fa-circle-check"></i>오복지</li>
                                <li><i class="fa-regular fa-circle-check"></i>오이지</li>
                                <li><i class="fa-regular fa-circle-check"></i>우엉조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>초생강</li>
                                <li><i class="fa-regular fa-circle-check"></i>연근조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>자반</li>
                                <li><i class="fa-regular fa-circle-check"></i>양배추절임</li>
                                <li><i class="fa-regular fa-circle-check"></i>시소노미구라게</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘쫑지</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘지</li>
                                <li><i class="fa-regular fa-circle-check"></i>땅콩조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추잎무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>고들빼기무침</li>
                                <li><i class="fa-regular fa-circle-check"></i>명이나물지</li>
                                <li><i class="fa-regular fa-circle-check"></i>튀각</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>매실장아찌</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌈무</li>
                                <li><i class="fa-regular fa-circle-check"></i>멸치볶음</li>
                                <li><i class="fa-regular fa-circle-check"></i>명란젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타젓갈</li>
                                <li><i class="fa-regular fa-circle-check"></i>꼴뚜기젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>낙지젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>새우젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>창란젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>멸치젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>까나리액젓</li>
                                <li><i class="fa-regular fa-circle-check"></i>유부</li>
                                <li><i class="fa-regular fa-circle-check"></i>두부</li>
                                <li><i class="fa-regular fa-circle-check"></i>콩비지</li>
                                <li><i class="fa-regular fa-circle-check"></i>도토리묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>동부묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>올방개묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타묵</li>
                                <li><i class="fa-regular fa-circle-check"></i>순두부</li>
                                <li><i class="fa-regular fa-circle-check"></i>연두부</li>
                                <li><i class="fa-regular fa-circle-check"></i>두부완자</li>
                                <li><i class="fa-regular fa-circle-check"></i>두부스테이크</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>인절미</li>
                                <li><i class="fa-regular fa-circle-check"></i>송편</li>
                                <li><i class="fa-regular fa-circle-check"></i>가래떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>꿀떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>찹쌀떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>절편</li>
                                <li><i class="fa-regular fa-circle-check"></i>떡볶이떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>떡국떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>빙수떡</li>
                                <li><i class="fa-regular fa-circle-check"></i>경단</li>
                                <li><i class="fa-regular fa-circle-check"></i>백설기</li>
                                <li><i class="fa-regular fa-circle-check"></i>조랑떡</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>조미식품
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>참깨</li>
                                <li><i class="fa-regular fa-circle-check"></i>들깨</li>
                                <li><i class="fa-regular fa-circle-check"></i>흑임자</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>석류드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>아일랜드드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>오리엔탈드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>요거트드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>유자드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>이탈리안드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>케이준드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>키위드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>타르타르소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>깨드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>발사믹드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>코울슬로드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>양파드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>시저드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>사과드레싱</li>
                                <li><i class="fa-regular fa-circle-check"></i>발사믹식초</li>
                                <li><i class="fa-regular fa-circle-check"></i>빙초산</li>
                                <li><i class="fa-regular fa-circle-check"></i>식초</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타식초</li>
                                <li><i class="fa-regular fa-circle-check"></i>와인식초</li>
                                <li><i class="fa-regular fa-circle-check"></i>가쓰오육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>냉면육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>메밀육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>멸치육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>바지락육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>사골육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇠고기육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌀국수육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>해물육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭고기육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>북어육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>짬뽕육수</li>
                                <li><i class="fa-regular fa-circle-check"></i>일식된장</li>
                                <li><i class="fa-regular fa-circle-check"></i>간장</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추장</li>
                                <li><i class="fa-regular fa-circle-check"></i>쌈장</li>
                                <li><i class="fa-regular fa-circle-check"></i>청국장</li>
                                <li><i class="fa-regular fa-circle-check"></i>춘장</li>
                                <li><i class="fa-regular fa-circle-check"></i>된장</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타장류</li>
                                <li><i class="fa-regular fa-circle-check"></i>낫또</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추씨</li>
                                <li><i class="fa-regular fa-circle-check"></i>후추</li>
                                <li><i class="fa-regular fa-circle-check"></i>월계수잎</li>
                                <li><i class="fa-regular fa-circle-check"></i>로즈마리가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>정향</li>
                                <li><i class="fa-regular fa-circle-check"></i>바닐라향</li>
                                <li><i class="fa-regular fa-circle-check"></i>캡사이신</li>
                                <li><i class="fa-regular fa-circle-check"></i>타임가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>바질가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>산초</li>
                                <li><i class="fa-regular fa-circle-check"></i>오레가노</li>
                                <li><i class="fa-regular fa-circle-check"></i>계피</li>
                                <li><i class="fa-regular fa-circle-check"></i>파슬리가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>생강가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>구연산</li>
                                <li><i class="fa-regular fa-circle-check"></i>너트맥</li>
                                <li><i class="fa-regular fa-circle-check"></i>파프리카씨즈닝</li>
                                <li><i class="fa-regular fa-circle-check"></i>케이퍼</li>
                                <li><i class="fa-regular fa-circle-check"></i>식용색소</li>
                                <li><i class="fa-regular fa-circle-check"></i>큐민</li>
                                <li><i class="fa-regular fa-circle-check"></i>칠리파우더</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타시즈닝</li>
                                <li><i class="fa-regular fa-circle-check"></i>피클링스파이스</li>
                                <li><i class="fa-regular fa-circle-check"></i>바닐라빈</li>
                                <li><i class="fa-regular fa-circle-check"></i>탕수육소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토페이스트</li>
                                <li><i class="fa-regular fa-circle-check"></i>냉채소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>라멘소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>짜장소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈부리소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>매운닭소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>나시고랭소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈까스소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>데미그라스소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>데리야끼소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>굴소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>케찹</li>
                                <li><i class="fa-regular fa-circle-check"></i>마요네즈</li>
                                <li><i class="fa-regular fa-circle-check"></i>바베큐소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>우스타소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>두반장소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>머스타드소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>발사믹소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>마파소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>스테이크소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>칠리소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>락토소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>카라멜소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>페이스트</li>
                                <li><i class="fa-regular fa-circle-check"></i>블랙빈소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>살사소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>에이원소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>피쉬소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>해선장</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘고추소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>참치소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>오징어먹물</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭꼬치소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>땅콩소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>XO소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>초콜렛소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>타코야끼소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭요리소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>오코노미소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>치즈소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>마늘소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>월남쌈소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>호이신소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>크림소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>페퍼소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>강정소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>깐풍기소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>양파소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>페스토소스</li>
                                <li><i class="fa-regular fa-circle-check"></i>후르츠퓨레</li>
                                <li><i class="fa-regular fa-circle-check"></i>소금</li>
                                <li><i class="fa-regular fa-circle-check"></i>겨자</li>
                                <li><i class="fa-regular fa-circle-check"></i>와사비</li>
                                <li><i class="fa-regular fa-circle-check"></i>꿀</li>
                                <li><i class="fa-regular fa-circle-check"></i>뉴슈가</li>
                                <li><i class="fa-regular fa-circle-check"></i>시럽</li>
                                <li><i class="fa-regular fa-circle-check"></i>물엿</li>
                                <li><i class="fa-regular fa-circle-check"></i>설탕</li>
                                <li><i class="fa-regular fa-circle-check"></i>올리고당</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타당류</li>
                                <li><i class="fa-regular fa-circle-check"></i>라면스프</li>
                                <li><i class="fa-regular fa-circle-check"></i>맛술</li>
                                <li><i class="fa-regular fa-circle-check"></i>액상조미료</li>
                                <li><i class="fa-regular fa-circle-check"></i>가스오부시</li>
                                <li><i class="fa-regular fa-circle-check"></i>미원</li>
                                <li><i class="fa-regular fa-circle-check"></i>혼다시</li>
                                <li><i class="fa-regular fa-circle-check"></i>후리가케</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>다시다</li>
                                <li><i class="fa-regular fa-circle-check"></i>시치미</li>
                                <li><i class="fa-regular fa-circle-check"></i>소다</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇠고기가루</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭갈비양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>짬뽕양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>소갈비양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>찌개양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>된장양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>장어양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>육개장양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>고추장양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>간장양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>소불고기양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>찜닭양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>돼지불고기양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>볶음양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>갈비양념</li>
                                <li><i class="fa-regular fa-circle-check"></i>비빔양념장</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>청과
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>혼합과일</li>
                                <li><i class="fa-regular fa-circle-check"></i>망고스틴</li>
                                <li><i class="fa-regular fa-circle-check"></i>라즈베리</li>
                                <li><i class="fa-regular fa-circle-check"></i>과일세트</li>
                                <li><i class="fa-regular fa-circle-check"></i>사과</li>
                                <li><i class="fa-regular fa-circle-check"></i>배</li>
                                <li><i class="fa-regular fa-circle-check"></i>감</li>
                                <li><i class="fa-regular fa-circle-check"></i>곶감</li>
                                <li><i class="fa-regular fa-circle-check"></i>포도</li>
                                <li><i class="fa-regular fa-circle-check"></i>딸기</li>
                                <li><i class="fa-regular fa-circle-check"></i>파인애플</li>
                                <li><i class="fa-regular fa-circle-check"></i>귤</li>
                                <li><i class="fa-regular fa-circle-check"></i>오렌지</li>
                                <li><i class="fa-regular fa-circle-check"></i>키위</li>
                                <li><i class="fa-regular fa-circle-check"></i>살구</li>
                                <li><i class="fa-regular fa-circle-check"></i>망고</li>
                                <li><i class="fa-regular fa-circle-check"></i>리치</li>
                                <li><i class="fa-regular fa-circle-check"></i>자두</li>
                                <li><i class="fa-regular fa-circle-check"></i>레몬</li>
                                <li><i class="fa-regular fa-circle-check"></i>석류</li>
                                <li><i class="fa-regular fa-circle-check"></i>블루베리</li>
                                <li><i class="fa-regular fa-circle-check"></i>자몽</li>
                                <li><i class="fa-regular fa-circle-check"></i>람부탄</li>
                                <li><i class="fa-regular fa-circle-check"></i>아보카도</li>
                                <li><i class="fa-regular fa-circle-check"></i>무화과</li>
                                <li><i class="fa-regular fa-circle-check"></i>과일</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>건포도</li>
                                <li><i class="fa-regular fa-circle-check"></i>용과</li>
                                <li><i class="fa-regular fa-circle-check"></i>오디</li>
                                <li><i class="fa-regular fa-circle-check"></i>두리안</li>
                                <li><i class="fa-regular fa-circle-check"></i>라임</li>
                                <li><i class="fa-regular fa-circle-check"></i>방울토마토</li>
                                <li><i class="fa-regular fa-circle-check"></i>토마토</li>
                                <li><i class="fa-regular fa-circle-check"></i>메론</li>
                                <li><i class="fa-regular fa-circle-check"></i>바나나</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>축산가공
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>송화단</li>
                                <li><i class="fa-regular fa-circle-check"></i>탈피난류</li>
                                <li><i class="fa-regular fa-circle-check"></i>계란후라이</li>
                                <li><i class="fa-regular fa-circle-check"></i>지단</li>
                                <li><i class="fa-regular fa-circle-check"></i>깐메추리알</li>
                                <li><i class="fa-regular fa-circle-check"></i>깐계란</li>
                                <li><i class="fa-regular fa-circle-check"></i>깐풍기</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨너겟</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨텐더</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨볼</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨완자</li>
                                <li><i class="fa-regular fa-circle-check"></i>기타</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>미니돈까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>스테이크</li>
                                <li><i class="fa-regular fa-circle-check"></i>함박스테이크</li>
                                <li><i class="fa-regular fa-circle-check"></i>치킨까스</li>
                                <li><i class="fa-regular fa-circle-check"></i>비엔나소시지</li>
                                <li><i class="fa-regular fa-circle-check"></i>소시지</li>
                                <li><i class="fa-regular fa-circle-check"></i>스팸</li>
                                <li><i class="fa-regular fa-circle-check"></i>햄</li>
                                <li><i class="fa-regular fa-circle-check"></i>후랑크소시지</li>
                                <li><i class="fa-regular fa-circle-check"></i>미니소시지</li>
                                <li><i class="fa-regular fa-circle-check"></i>베이컨</li>
                                <li><i class="fa-regular fa-circle-check"></i>훈제오리</li>
                                <li><i class="fa-regular fa-circle-check"></i>훈제족발</li>
                                <li><i class="fa-regular fa-circle-check"></i>훈제치킨</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭간장</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭고추장</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈육간장</li>
                                <li><i class="fa-regular fa-circle-check"></i>우육간장</li>
                                <li><i class="fa-regular fa-circle-check"></i>돈육고추장</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭가슴살캔</li>
                                <li><i class="fa-regular fa-circle-check"></i>장조림</li>
                                <li><i class="fa-regular fa-circle-check"></i>번데기</li>
                                <li><i class="fa-regular fa-circle-check"></i>삼겹살찜</li>
                                <li><i class="fa-regular fa-circle-check"></i>쇠고기고명</li>
                                <li><i class="fa-regular fa-circle-check"></i>떡갈비</li>
                                <li><i class="fa-regular fa-circle-check"></i>고기완자</li>
                                <li><i class="fa-regular fa-circle-check"></i>탕수육</li>
                                <li><i class="fa-regular fa-circle-check"></i>육포</li>
                                <li><i class="fa-regular fa-circle-check"></i>너비아니</li>
                                <li><i class="fa-regular fa-circle-check"></i>고기산적</li>
                                <li><i class="fa-regular fa-circle-check"></i>섭산적</li>
                                <li><i class="fa-regular fa-circle-check"></i>미트볼</li>
                                <li><i class="fa-regular fa-circle-check"></i>족발</li>
                                <li><i class="fa-regular fa-circle-check"></i>핫도그</li>
                                <li><i class="fa-regular fa-circle-check"></i>동그랑땡</li>
                                <li><i class="fa-regular fa-circle-check"></i>순대</li>
                                <li><i class="fa-regular fa-circle-check"></i>고기말이</li>
                                <li><i class="fa-regular fa-circle-check"></i>닭가슴살</li>
                                <li><i class="fa-regular fa-circle-check"></i>불고기</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>포장용품
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>박스류</li>
                                <li><i class="fa-regular fa-circle-check"></i>종이케이스</li>
                                <li><i class="fa-regular fa-circle-check"></i>포장지류</li>
                                <li><i class="fa-regular fa-circle-check"></i>비닐</li>
                                <li><i class="fa-regular fa-circle-check"></i>용기류</li>
                                <li><i class="fa-regular fa-circle-check"></i>스티커류</li>
                                <li><i class="fa-regular fa-circle-check"></i>랩</li>
                                <li><i class="fa-regular fa-circle-check"></i>트레이</li>
                                <li><i class="fa-regular fa-circle-check"></i>세트띠지</li>
                                <li><i class="fa-regular fa-circle-check"></i>박스</li>
                                <li><i class="fa-regular fa-circle-check"></i>소모품</li>
                                <li><i class="fa-regular fa-circle-check"></i>식품갱지</li>
                                <li><i class="fa-regular fa-circle-check"></i>잡자재</li>
                                <li><i class="fa-regular fa-circle-check"></i>유산지</li>
                            </ul>
                        <li><i class="fa-regular fa-circle-check"></i>해조류
                            <ul>
                                <li><i class="fa-regular fa-circle-check"></i>매생이</li>
                                <li><i class="fa-regular fa-circle-check"></i>파래</li>
                                <li><i class="fa-regular fa-circle-check"></i>미역</li>
                                <li><i class="fa-regular fa-circle-check"></i>다시마</li>
                                <li><i class="fa-regular fa-circle-check"></i>톳</li>
                                <li><i class="fa-regular fa-circle-check"></i>모자반</li>
                                <li><i class="fa-regular fa-circle-check"></i>김</li>
                                <li><i class="fa-regular fa-circle-check"></i>한천</li>
                            </ul>
                    </ul>
                    <hr>
                </li>
                <li>
                    <i class="fa-regular fa-circle-check"></i>행사
                    <ul>
                        <li><i class="fa-regular fa-circle-check"></i>채선당</li>
                        <li><i class="fa-regular fa-circle-check"></i>도리깨침</li>
                    </ul>
                    <hr>
                </li>
                <li id="filterPrice"><i class="fa-regular fa-circle-check"></i>가격
                    <form>
                        <input type="text" placeholder="0">
                        &nbsp;&nbsp;~&nbsp;&nbsp;
                        <input type="text" placeholder="1000000">
                        </form>
                        </li>
                        </ul>
                        </div>
                        `;
    window.addEventListener('scroll', function () {
        listfilter = document.getElementById("listfilter");
        listfilter.style.height = `calc(100vh - 320px - 30px + ${window.scrollY}px)`;
        if (window.scrollY <= 300) {
            listfilter.style.top = `calc(325px - ${window.scrollY}px)`;
        } else {
            listfilter.style.top = `30px`;
        }
    });
}

function writeItemList(keyword) {

    axios.get(uri
    ).then(response => {
        let data = response.data;
        let result = `
            <div id="listContainer">
                <div id="containerOption">
                    <div id="total">총 <span>${data.length}</span> 개</div>
                    <div id="listOption">
                        <div>최신상품순</div> <!-- item/sortlist 요청 -->
                        <div>인기상품순</div>
                        <div>가격낮은순</div>
                        <div>가격높은순</div>
                    </div>
                </div>
        `;
        for (let e of data) {
            result += writeItemBox(e);
        }

        result += `
                </div>
            `;
        main.children[1].innerHTML += result;
    }).catch(err => {
        console.log("writeItemList 에러 :" + err.massage);
    });
}

/* 📦📦📦📦 model 📦📦📦📦*/

async function getItemList(keyword) {
    let uri = "/item/search?keyword=" + keyword;
    const response = await axios.get
}

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Header 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
/* 💻💻💻💻 view model 💻💻💻💻*/
/* 📦📦📦📦 model 📦📦📦📦*/

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Header 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
/* 💻💻💻💻 view model 💻💻💻💻*/
/* 📦📦📦📦 model 📦📦📦📦*/

/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Header 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */
/* 💻💻💻💻 view model 💻💻💻💻*/
/* 📦📦📦📦 model 📦📦📦📦*/
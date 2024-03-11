
const firstCategory = document.getElementById("firstCategory");
const searchBoxInput = document.getElementById("searchBoxInput");

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

writeHeader()
/* 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 Header 🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅 */

async function writeHeader() {
	let uri = '/item/sort';
	let result = '';
	await axios.get(uri).then(response => {
		for (let e of response.data) {
			result += `
                <li><img src="../resources/img/${e}.png" alt="${e} 이미지">${e}</li>
                `;
		}
		firstCategory.innerHTML += result;
	}).catch(err => {
		console.log("writeSlideContainer 에러 :" + err.massage);
	})

}
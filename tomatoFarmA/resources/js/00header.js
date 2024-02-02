"use strict"

function a(str) {
	console.log(str);
}

const firstCategory = document.getElementById("firstCategory");
const searchBoxInput = document.getElementById("searchBoxInput");


function firstCategoryVisible() {
	firstCategory.style.display = "block";
}

function firstCategoryHidden() {
	firstCategory.style.display = "none";
}

function resetInputBox(ele) {
	searchBoxInput.value = '';
	searchBoxInput.focus();
	ele.closest("form").children[1].style.visibility = "hidden"
}

function appearinputBoxResetButton(ele) {
	ele.closest("form").children[1].style.visibility = "visible"
}
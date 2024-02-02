"use strict"

function a(str){
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

function resetInputBox(event){
	a(event);
	searchBoxInput.value='';
	searchBoxInput.focus();
}

function appearinputBoxResetButton(){
	searchBoxInput.value='';
}
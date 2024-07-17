const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

function isPalindrome(str) {
	const para = document.createElement("p");
	let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	let reversedStr = formattedStr.split("").reverse().join("");
	if (formattedStr === reversedStr) {
		result.className = "results-div";
		result.appendChild(para);
		return (para.innerText = `${str} is a palindrom`);
	} else {
		result.className = "results-div";
		result.appendChild(para);
		return (para.innerText = `${str} is not a palindrom`);
	}
}

function inputValue() {
	const str = textInput.value;
	return str;
}

function checkBtn(event) {
	event.preventDefault();
	if (!textInput.value) {
		alert("Please input a value");
	}
	if (textInput.value) {
		setTimeout(() => {
			textInput.value = "";
			location.reload();
		}, 3000);
		const str = textInput.value;
		isPalindrome(textInput.value);
		return str;
	}
}

// TODO -- configure enter key for palindrome checker
const onKeyPress = (event) => {
	// Key
	console.log(event.key);
	// KeyCode
	console.log(event.keyCode);

	// code
	console.log(event.code);
};
textInput.addEventListener("input", inputValue);
checkButton.addEventListener("click", checkBtn);

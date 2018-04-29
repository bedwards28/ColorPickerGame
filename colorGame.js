var numSquares = 6;
var colors = generateRandomColors(numSquares);

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function() {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");

	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");

	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	// generate new colors
	colors = generateRandomColors(numSquares);

	// pick a new random color from array
	pickedColor = pickColor();

	// set colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.background = "steelblue";

	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// get color of clicked square
		var clickedColor = this.style.backgroundColor;

		// compare clickedColor to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make empty array
	var arr = [];

	// populate array with random colors
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	// return array
	return arr;
}

function randomColor() {
	// pick a red from 0 to -255
	var r = Math.floor(Math.random() * 256);

	// pick a green from 0 to -255
	var g = Math.floor(Math.random() * 256);

	// pick a blue from 0 to -255
	var b = Math.floor(Math.random() * 256);

	// rgb(r, g, b)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
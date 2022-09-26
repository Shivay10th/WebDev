/** @format */

function changeColor(color) {
	document.body.style.backgroundColor = color;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	document.body.style.backgroundColor =
		'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function reset() {
	document.body.style.backgroundColor = 'white';
}

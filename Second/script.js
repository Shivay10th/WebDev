/** @format */

let images = [
	'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1575540325855-4b5d285a3845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
];

let c = 0;
function nextImg() {
	c = c + 1 >= images.length ? 0 : c + 1;

	let p = images[c];

	document.getElementById('slider').src = p;
}
function preImg() {
	c = c - 1 < 0 ? images.length - 1 : c - 1;

	let p = images[c];

	document.getElementById('slider').src = p;
}

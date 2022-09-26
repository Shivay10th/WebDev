/** @format */

const numberBtn = (num) => {
	let inputField = document.getElementById('calc-typed');
	inputField.value += num;
};

const handleOperator = (opt) => {
	let inputField = document.getElementById('calc-typed');
	let operationField = document.getElementById('calc-operation');
	if (inputField.value !== '') {
		inputField.value += opt;
		operationField.innerText += inputField.value;
		inputField.value = '';
	}
};

const handleEqual = () => {
	let operationField = document.getElementById('calc-operation');
	let inputField = document.getElementById('calc-typed');

	let expression = operationField.innerText;
	let numStr = '';
	let num2 = parseInt(inputField.value);
	let ans = '';
	console.log(expression);
	for (let c of expression) {
		if (c === '%') {
			ans = parseInt(numStr) % num2;
			operationField.innerText = '';
			inputField.value = ans;
		} else if (c === '÷') {
			ans = parseInt(numStr) / num2;
			inputField.value = ans;
			operationField.innerText = '';
		} else if (c === '×') {
			ans = parseInt(numStr) * num2;
			operationField.innerText = '';
			inputField.value = ans;
		} else if (c === '+') {
			ans = parseInt(numStr) + num2;
			inputField.value = ans;
			operationField.innerText = '';
		} else if (c === '-') {
			ans = parseInt(numStr) - num2;
			inputField.value = ans;
			operationField.innerText = '';
		} else numStr += c;
	}
};

const reset = () => {
	let inputField = document.getElementById('calc-typed');
	let operationField = document.getElementById('calc-operation');
	operationField.innerHTML = '';
	inputField.value = '';
};

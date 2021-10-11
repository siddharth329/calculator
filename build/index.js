const numkeys = document.querySelectorAll('.calculator__numkey');
const display = document.querySelector('.calculator__display');

let nums = '1 2 3 4 5 6 7 8 9 0 00 .';
let operators = 'x + - / %';
let expression = '';

const addValueToExpression = (value) => {
	expression += value;
	updateDisplay();
};

const updateDisplay = () => (display.textContent = expression);
const evaluateAnswer = () => {
	const ans = eval(expression);
	expression = '';
	display.textContent = ans;
};

numkeys.forEach((numkey) =>
	numkey.addEventListener('click', (event) => {
		let value = event.target.innerText;

		if ((nums + ' ' + operators).split(' ').includes(value)) {
			if (value === 'X' || value === 'x') value = '*';
			if (expression === '' && value === '.') value = '0.';
			return addValueToExpression(value);
		}

		if (value === 'C') {
			expression = expression.slice(0, expression.length - 1);
			updateDisplay();
		}

		if (value === 'AC') {
			expression = '';
			updateDisplay();
		}

		if (value === '=') {
			evaluateAnswer();
		}
	})
);

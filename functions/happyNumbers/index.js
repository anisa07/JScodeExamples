let round = 0;
let initialNumber = 0;

function convertNumberToArr (number) {
	const numbers = [];
	if (number < 10) {
		numbers.push(number);
	} else {
		let k = number;
		while (k > 9) {
			numbers.push(k % 10);
			k = Math.floor(k / 10);
			if (k < 10) {
				numbers.push(k);
			}
		}
	}
	return numbers;
};

function merryNumber(number) {
	if (initialNumber === 0) {
		initialNumber = number;
	}
	round++;
	const result = convertNumberToArr(number).map(n => n*n).reduce((acc, current) => acc + current);

	if (result === 1) {
		return `number ${initialNumber} is happy`
	}

	if (round > 10) {
		return `number ${initialNumber} is unhappy`
	}

	return merryNumber(result);
}

for (let i = 10; i < 20; i++) {
	console.log(merryNumber(i));
	round = 0;
	initialNumber = 0;
}




for (let index = 1; index < 100; index++) {
	let printResult = '';

	if (index % 3 === 0 || index.toString().includes(3)) {
		printResult = 'Fizz';
	}

	if (index % 5 === 0 || index.toString().includes(5)) {
		printResult += 'Buzz';
	}

	printResult = printResult ? printResult : index;

	console.log(printResult);
}

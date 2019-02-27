const dict = new Map();
dict.set('I', 1);
dict.set('V', 5);
dict.set('X', 10);
dict.set('L', 50);
dict.set('C', 100);
dict.set('D', 500);
dict.set('M', 1000);

function convertRomanToDecimal(romanNumber = 'I') {
	const romanNumberReversedArray = romanNumber.split('').reverse();

	let previous = 0;
	let group = 0;
	let decimalNumber = 0;

	if (romanNumberReversedArray.length === 1) {
		return dict.get(romanNumberReversedArray[0]);
	}

	romanNumberReversedArray.forEach((romanItem, index) => {
		if (!previous && !group ) {
			previous = dict.get(romanItem);
			group = dict.get(romanItem);

			return;
		}

		if (dict.get(romanItem) < previous) {
			group -= dict.get(romanItem);
			previous = dict.get(romanItem);
		} else if (dict.get(romanItem) >= previous) {
			decimalNumber += group;
			group = dict.get(romanItem);
			previous = dict.get(romanItem);
		}

		if (index === romanNumberReversedArray.length - 1) {
			decimalNumber += group;
		}
	});

	return decimalNumber;
}

console.log(convertRomanToDecimal('XLII'));
console.log(convertRomanToDecimal('XCIX'));
console.log(convertRomanToDecimal('MMXIII'));

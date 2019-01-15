const fs = require('fs'),
	path = require('path'),
	filePath = path.join(__dirname, 'test.csv');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
	if (!err) {
		if (data) {
			const dataArr = [];
			const strLen = [];
			const result = [];

			data.split('\n').forEach(row => {
				dataArr.push(row.split(','));
			});
			dataArr.pop();
			dataArr.forEach(row => {
				row.forEach((cell, index) => {
					strLen[index] = strLen[index] ? strLen[index] : 0;
					if (cell && (cell.length > strLen[index])) {
						strLen[index] = cell.length;
					}
				});
			});
			dataArr.splice(1, 0, []);
			dataArr.forEach((row, i) => {
				if (i !== 1) {
					row.forEach((cell, index) => {
						row[index] = cell ? `${cell.padEnd(strLen[index], ' ')}|` : `${''.padEnd(strLen[index], ' ')}|`
					});
				} else {
					strLen.forEach((item, index) => {
						row[index] = `${''.padEnd(strLen[index], '-')}+`;
					});
				}
				result[i] = `${row.join('')}`;
			});
			console.log(`${result.join('\n')}`);
		}
	} else {
		console.log(err);
	}
});

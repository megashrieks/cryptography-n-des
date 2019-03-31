//function to split the string to blocks and then padd it
//splitting by blocks of 16 characters each
//padding the remaining characters with 101010...
//input : hexadecimal string
//output : array of 16 characters each

const split_and_padd = hex_string => {
	const len = hex_string.length;
	const divisions = ~~(len / 16);
	const remaining = len % 16;
	if (remaining)
		for (let i = 0; i < 16 - remaining; ++i) hex_string += (i + 1) & 1;
	let result = [];
	let altered_length = hex_string.length;
	for (let i = 15; i < altered_length; i += 16) {
		result.push(hex_string.substr(i - 15, 16));
	}
	return result;
};
module.exports = split_and_padd;

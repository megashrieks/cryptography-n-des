//convert a given bit string to integer
//input : bit string
//output : integer

const string_to_no = bit_string => {
	let num = 0;
	let len = bit_string.length;
	for (let i = len - 1; i >= 0; --i) {
		num = num + (1 << i) * (bit_string[len - i - 1] * 1);
	}
	return num;
};
module.exports = string_to_no;

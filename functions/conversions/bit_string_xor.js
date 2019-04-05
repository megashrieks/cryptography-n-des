//function to do bitwise XOR operation
//on 2 given strings
//input : str1 str2 of equal lengths
//output : string containing XORd bits of str1 and str2

const bit_string_xor = (str1, str2) => {
	let result = "";
	const len = str1.length;
	for (let i = 0; i < len; ++i) {
		result += (str1[i] * 1) ^ (str2[i] * 1);
	}
	return result;
};
module.exports = bit_string_xor;

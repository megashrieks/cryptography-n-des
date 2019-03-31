//function defined for processing the left and right
//in the 16-length loop
//input :R - right half of the message
//       Key - i-th key
//output : 32 bit string

const permute = require("./permute");
const bit_string_xor = require("./bit_string_xor");
const string_to_no = require("../conversions/string_to_no");
const no_to_string = require("../conversions/no_to_string");
const { expansion_function, permutation } = require("../../dependencies");

const split_to_blocks = bit_string => {
	let result = [];
	const len = bit_string.length;
	for (let i = 0; i < len; i += 6) {
		result.push({
			row: string_to_no(bit_string[i] + bit_string[i + 5]),
			col: string_to_no(bit_string.substr(i + 1, 4))
		});
	}
	return result;
};

const process_fn = (R, K, SBOX) => {
	const ER = permute(expansion_function, R);
	const xor_ER_K = bit_string_xor(ER, K);
	let row_col = split_to_blocks(xor_ER_K);
	let result = "";
	for (let i = 0; i < 8; ++i) {
		result += no_to_string(SBOX[i][row_col[i].row][row_col[i].col], 4);
	}
	result = permute(permutation, result);
	return result;
};

module.exports = process_fn;

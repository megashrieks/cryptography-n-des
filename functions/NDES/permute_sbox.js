//function to permute the sbox given the current key
//input : SBOXES = ordered array of S-BOXES
//        key = i-th key in the n-des algorithm
//return : permuted S-BOX array containing 8 S-BOXES

const hex_to_binary = require("../conversions/hex_to_binary");
const string_to_no = require("../conversions/string_to_no");

//function to increase the value to ensure equal distribution
//of the given index
//this helps in equal distribution when the number of sboxes
//are very large and an 8 bit integer provided from the 2 characters
//of hex in the key cant cover all the SBOXES
const ensure_equal_distribution = (value, minimum) => {
	let result = value;
	while (result < minimum) result = result * result;
	return result;
};

const permute_sbox = (SBOXES, key) => {
	let result = [];
	const total = SBOXES.length;
	for (var i = 0; i < 16; i += 2) {
		const hex_index = key.substr(i, 2);
		const binary_index = hex_to_binary(hex_index);
		let index = string_to_no(binary_index);
		index = ensure_equal_distribution(index, total);
		result.push(SBOXES[(index * (2 * i)) % total]);
	}
	return result;
};
module.exports = permute_sbox;

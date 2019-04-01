//module to generate the 16 keys based on the permutation
//arguments : key
//return : 16 permuted keys

const hex_to_binary = require("../conversions/hex_to_binary");
const rotate_left = require("./rotate_left");
const {
	PC_box_1_left,
	PC_box_1_right,
	PC_box_2
} = require("../../dependencies");
const permute = require("./permute");
const PC = PC_box_1_left.concat(PC_box_1_right);

const keygen = (key, enc) => {
	const binary_key = hex_to_binary(key).join("");
	const p_key = permute(PC, binary_key);
	const p_key_len = p_key.length;
	let left = p_key.substr(0, p_key_len / 2);
	let right = p_key.substr(p_key_len / 2);
	let keys = [];
	let rotate_schedule = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
	for (let i = 0; i < 16; ++i) {
		left = rotate_left(rotate_schedule[i], left);
		right = rotate_left(rotate_schedule[i], right);
		if (enc) keys.push(permute(PC_box_2, left + right));
		else keys = [permute(PC_box_2, left + right)].concat(keys);
	}
	return keys;
};

module.exports = keygen;

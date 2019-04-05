const hex_to_binary = require("../conversions/hex_to_binary");
const permute = require("./permute");
const bit_string_xor = require("../conversions/bit_string_xor");
const process_fn = require("./process_fn");
const keygen = require("./keygen");
const binary_to_hex = require("../conversions/binary_to_hex");
const {
	initial_permutation,
	final_permutation
} = require("../../dependencies");
const DES = ({ key, message, enc, SBOX }) => {
	const binary_message = hex_to_binary(message).join("");
	const keys = keygen(key, enc);
	const message_ip = permute(initial_permutation, binary_message);
	const message_ip_len = message_ip.length;
	let key_count = 0;
	let l = message_ip.substr(0, message_ip_len / 2),
		r = message_ip.substr(message_ip_len / 2);
	for (let i = 0; i < 16; ++i) {
		let temp = l;
		l = r;
		r = bit_string_xor(temp, process_fn(r, keys[key_count++], SBOX));
	}
	let final_permuted = permute(final_permutation, r + l);
	const final_len = final_permuted.length;
	let result = "";
	for (let i = 0; i < final_len; i += 4) {
		result += binary_to_hex(final_permuted.substr(i, 4));
	}
	return result;
};
module.exports = DES;

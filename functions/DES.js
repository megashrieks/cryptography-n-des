const hex_to_binary_string = require("./hextobinarystring");
const permute = require("./permute");
const bit_string_xor = require("./bit_string_xor");
const process_fn = require("./process_fn");
const keygen = require("./keygen");
const { initial_permutation, final_permutation } = require("../dependencies");
const SBOX = require("../input/sboxes");
const DES = ({ key, message }) => {
	const binary_message = hex_to_binary_string(message).join("");
	const keys = keygen(key);
	const message_ip = permute(initial_permutation, binary_message);
	const message_ip_len = message_ip.length;
	let key_count = 0;
	let message_ip_left = message_ip.substr(0, message_ip_len / 2);
	let message_ip_right = message_ip.substr(message_ip_len / 2);
	let l = message_ip_left,
		r = message_ip_right;
	for (let i = 0; i < 16; ++i) {
		let temp = l;
		l = r;
		r = bit_string_xor(temp, process_fn(r, keys[key_count++], SBOX));
	}
	return permute(final_permutation, r + l);
};
console.log(
	DES({
		key: "133457799BBCDFF1",
		message: "0123456789ABCDEF"
	})
);

module.export = DES;

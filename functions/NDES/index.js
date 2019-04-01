//function to perform DES n-times
//alternate turns are for decryption
//for each turn different keys are used
//each turn the S-BOXes are permuted according to the bits in the key

const split_and_padd = require("./split_and_padd");
const DES = require("../DES/DES");
const permute_sbox = require("./permute_sbox");
const NDES = ({ message, key, SBOXES, enc }) => {
	let transformed = split_and_padd(message);
	for (let j in transformed) {
		transformed[j] = DES({
			message: transformed[j],
			key: key,
			SBOX: SBOXES,
			enc: enc
		});
	}
	return transformed.join("");
};
const encrypt = ({ message, keys, SBOXES }) => {
	let res = message;
	if (!(keys.length & 1)) keys.push(keys[0]);
	for (let i = 0; i < keys.length; ++i) {
		const permuted_sbox = permute_sbox(SBOXES, keys[i]);
		res = NDES({
			message: res,
			key: keys[i],
			SBOXES: permuted_sbox,
			enc: (i + 1) & 1
		});
	}
	return res;
};
const decrypt = ({ message, keys, SBOXES }) => {
	let res = message;
	if (!(keys.length & 1)) keys.push(keys[0]);
	for (let i = 0; i < keys.length; ++i) {
		const permuted_sbox = permute_sbox(SBOXES, keys[keys.length - i - 1]);
		res = NDES({
			message: res,
			key: keys[keys.length - i - 1],
			SBOXES: permuted_sbox,
			enc: i & 1
		});
	}
	return res;
};
const test = () => {
	const keys = require("../../input/keys");
	const message = require("../../input/message");
	const SBOXES = require("../../input/sboxes");
	let res = encrypt({
		message,
		keys,
		SBOXES
	});
	let test = decrypt({
		message: res,
		keys,
		SBOXES
	});
	console.log(
		"Encrypting message '" +
			split_and_padd(message) +
			"' with keys from 'keys' file."
	);
	console.log("Cipher text : '" + res + "'");
	console.log(
		"\nDecrypting cipher text '" + res + "' with keys from 'keys' file."
	);
	console.log("Plain text obtained : '" + test + "'\n");
	console.log(
		"Status : " + (split_and_padd(message) == test ? "PASS" : "FAILED")
	);
	return split_and_padd(message) == test;
};
module.exports = { encrypt, decrypt, test };

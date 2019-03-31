//function to perform DES n-times
//alternate turns are for decryption
//for each turn different keys are used
//each turn the S-BOXes are permuted according to the bits in the key

const split_and_padd = require("./split_and_padd");
const DES = require("../DES/DES");
const reverse = arr => {
	const len = arr.length;
	for (let i = 0; i < len; ++i) arr = [arr.pop()].concat(arr);
	return arr;
};
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
const keys = ["1399BB577DF1FC34", "7D34F1F1399BB57C", "1F1399BB577D34FC"];
const message = "0123456789ABCDEF";
const encrypt = ({ message, keys, SBOXES }) => {
	let res = message;
	if (!(keys.length & 1)) keys.push(keys[0]);
	for (let i = 0; i < keys.length; ++i) {
		res = NDES({
			message: res,
			key: keys[i],
			SBOXES,
			enc: (i + 1) & 1
		});
	}
	return res;
};
const decrypt = ({ message, keys, SBOXES }) => {
	let res = message;
	if (!(keys.length & 1)) keys.push(keys[0]);
	for (let i = 0; i < keys.length; ++i) {
		res = NDES({
			message: res,
			key: keys[keys.length - i - 1],
			SBOXES,
			enc: i & 1
		});
	}
	return res;
};
let res = encrypt({
	message,
	keys,
	SBOXES: require("../../input/sboxes")
});
console.log("once");
let test = decrypt({
	message: res,
	keys,
	SBOXES: require("../../input/sboxes")
});
console.log(res, test);
console.log(test == "0123456789ABCDEF");

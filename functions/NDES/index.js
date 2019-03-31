//function to perform DES n-times
//alternate turns are for decryption
//for each turn different keys are used
//each turn the S-BOXes are permuted according to the bits in the key

const split_and_padd = require("./split_and_padd");
const DES = require("../DES/DES");
const NDES = ({ message, keys, SBOXES, enc }) => {
	let transformed = split_and_padd(message);
	let turns = keys.length;
	turns += !(turns & 1);
	for (let i = 0; i < turns; ++i) {
		for (let j in transformed) {
			transformed[j] = DES({
				message: transformed.join(""),
				key: keys[i % keys.length],
				SBOX: SBOXES,
				enc: (i + enc) & 1
			});
		}
	}
	return transformed.join("");
};
let res = NDES({
	message: "1234567890ABCDEF",
	keys: ["133457799BBCDFF1", "1399BBC34577DFF1"],
	SBOXES: require("../../input/sboxes"),
	enc: 1
});
let test = NDES({
	message: res,
	keys: ["133457799BBCDFF1", "1399BBC34577DFF1"],
	SBOXES: require("../../input/sboxes"),
	enc: 0
});
console.log(res, test);
console.log(test == "1234567890ABCDEF");

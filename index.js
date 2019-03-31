//n-des
//basically performing des n-times with some varied parameter.
//i.e permuting the s-boxes according to the bits in the key
const keys = require("./input/keys");
const message = require("./input/message");
const { DES } = require("./functions");
console.log(
	DES({
		key: keys[0],
		message,
		enc: 1,
		SBOX: require("./input/sboxes")
	})
);

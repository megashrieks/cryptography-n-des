//function to pre-process the given input
//pre-processing include
//1. Adding padding-length bit
//2. adding 1010101010...padding at the end
//3. updating the padding length bit
//4. split the data into 64-bit length array and output the hexadecimal

const split_and_padd = require("./split_and_padd");
const no_to_string = require("../conversions/no_to_string");
const binary_to_hex = require("../conversions/binary_to_hex");
const pre_process_input = input => {
	let padd_length_bit_input = "0" + input;
	const without_padd_length = padd_length_bit_input.length;
	let transformed_input = split_and_padd(padd_length_bit_input);
	const padd_length = transformed_input.join("").length - without_padd_length;
	const padd_hex = binary_to_hex(no_to_string(padd_length, 4));
	transformed_input[0] = padd_hex + transformed_input[0].substr(1);
	return transformed_input.join("");
};
module.exports = pre_process_input;

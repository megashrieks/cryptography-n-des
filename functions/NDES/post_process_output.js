//function to post process and remove
//padded bits and padd length bits
//input : pre processed string
//return :reverse the pre processed string
//working : 1. Read the first hexadecimal character 'n'
//          2. Remove the trailing 'n' characters

const hex_to_binary = require("../conversions/hex_to_binary");
const string_to_no = require("../conversions/string_to_no");

const post_process_output = pre_processed_string => {
	let no_of_padded_bits = pre_processed_string[0];
	no_of_padded_bits = string_to_no(hex_to_binary(no_of_padded_bits)[0]);
	const len = pre_processed_string.length;
	return pre_processed_string.substr(1, len - no_of_padded_bits - 1);
};
module.exports = post_process_output;

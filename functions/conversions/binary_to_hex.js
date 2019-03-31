//function to return the hexadecimal value of a given binary string
//input : 4 bit binary string
//output : character of hexadecimal value of the binary

const string_to_no = require("./string_to_no");

const binary_to_hex = bin_string => {
	const num = string_to_no(bin_string);
	if (num < 10) return "" + num;
	else return String.fromCharCode(55 + num);
};
module.exports = binary_to_hex;

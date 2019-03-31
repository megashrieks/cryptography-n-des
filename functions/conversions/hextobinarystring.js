const num_to_binary = number => {
	let binary = "";
	let times = 4;
	while (times--) {
		binary = (number & 1) + binary;
		number = number >> 1;
	}
	return binary;
};
const hex_to_binary_string = hex_string => {
	let binary_string = hex_string.split("").map(char => {
		const char_code = char.charCodeAt(0);
		if (char_code <= 57) return num_to_binary(char_code - 48);
		else return num_to_binary(char_code - 55);
	});
	return binary_string;
};
module.exports = hex_to_binary_string;

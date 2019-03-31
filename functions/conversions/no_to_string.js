//function to convert integer to bit string
//input : integer , trunc = no of bits
//output : binary string

const no_to_string = (number, trunc) => {
	let bin_string = "";
	for (let i = 0; i < trunc; ++i) {
		bin_string = (number & 1) + bin_string;
		number = number >> 1;
	}
	return bin_string;
};

module.exports = no_to_string;

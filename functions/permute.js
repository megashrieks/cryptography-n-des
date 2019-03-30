//function to permute the binary string given a P-Box
//arguments P-Box , binary string

const permute = (p_box, binary_string) => {
	return p_box
		.map(row => {
			return row
				.map(col => {
					return binary_string[col - 1];
				})
				.join("");
		})
		.join("");
};

module.exports = permute;

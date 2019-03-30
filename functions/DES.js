const hex_to_binary_string = require("./hextobinarystring");
const { PC_box_1_left, PC_box_1_right } = require("../dependencies");
const permute = require("./permute");
const PC = PC_box_1_left.concat(PC_box_1_right);

const DES = ({ key, message }) => {
	const binary_message = hex_to_binary_string(message).join("");
	const binary_key = hex_to_binary_string(key).join("");
	const message_len = binary_message.length;
	const binary_message_left = binary_message.substr(0, message_len / 2);
	const binary_message_right = binary_message.substr(message_len / 2);

	const P_plus = permute(PC, binary_key);
	console.log(P_plus);
};
DES({
	key: "133457799BBCDFF1",
	message: "0123456789ABCDEF"
});

module.export = DES;

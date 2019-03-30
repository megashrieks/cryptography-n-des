const hex_to_binary_string = require("./hextobinarystring");
const keygen = require("./keygen");

const DES = ({ key, message }) => {
	const binary_message = hex_to_binary_string(message).join("");
	const message_len = binary_message.length;
	const binary_message_left = binary_message.substr(0, message_len / 2);
	const binary_message_right = binary_message.substr(message_len / 2);
	const keys = keygen(key);
};
DES({
	key: "133457799BBCDFF1",
	message: "0123456789ABCDEF"
});

module.export = DES;

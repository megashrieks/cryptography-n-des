//function to get a character and return the hex form of the character
//input : character
//return : 2 hexadecimal characters

const no_to_string = require("./no_to_string");
const binary_to_hex = require("./binary_to_hex")
const ascii_to_hex = char => {
    const char_code = char.charCodeAt(0);
    let left_half = (char_code >> 4);
    let right_half = (char_code & 31);
    let left_binary = no_to_string(left_half,4);
    let left_hex = binary_to_hex(left_binary);
    let right_binary = no_to_string(right_half,4);
    let right_hex = binary_to_hex(right_binary);
    return left_hex+right_hex;
}
module.exports = ascii_to_hex
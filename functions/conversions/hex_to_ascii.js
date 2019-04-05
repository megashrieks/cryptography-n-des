//function to convert 2 hexadecimal characters to ascii
//input : 2 hexadecimal characters
//return 1 ascii character

const hex_to_binary = require("./hex_to_binary");
const string_to_no = require("./string_to_no");

const hex_to_ascii = hexadecimal => {
    let left_half = string_to_no(hex_to_binary(hexadecimal[0])[0]);
    let right_half = string_to_no(hex_to_binary(hexadecimal[1])[0]);
    return String.fromCharCode((left_half << 4) + right_half)
}
module.exports = hex_to_ascii;
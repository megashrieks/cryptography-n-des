//function to perform cryptanalysis and to check the Strict avalanche criterion
//input : message from the message file
//output : comparison of the message with the changed message with 1 bit difference

const {encrypt} = require("../NDES");
const hex_to_binary = require("../conversions/hex_to_binary");
const bit_string_xor = require("../conversions/bit_string_xor");
const message1 = "aaaa"
const message2 = "aaab"
const keys = require("../../input/keys");
const SBOXES = require("../../input/sboxes")
const enc_message = message => hex_to_binary(encrypt({
    message,
    keys,
    SBOXES
})).join("")
const m1_enc = enc_message(message1);
const m2_enc = enc_message(message2);
const xor = bit_string_xor(m1_enc,m2_enc);
let count = 0;
for(let i = 0;i < xor.length;++i)
    count += xor[i] * 1;
console.log(count/xor.length)
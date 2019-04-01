//n-des
//basically performing des n-times with some varied parameter.
//i.e permuting the s-boxes according to the bits in the key
const keys = require("./input/keys");
const message = require("./input/message");
const SBOXES = require("./input/sboxes");
const { encrypt, decrypt, test } = require("./functions");
test();

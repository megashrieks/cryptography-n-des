const DES = require("./DES/DES");
const NDES_functions = require("./NDES");

module.exports = { DES, ...NDES_functions };

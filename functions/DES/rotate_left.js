//function to rotate the given string to the left
//argument : string
//return : rotated string

const rotate_left = (times, str) => {
	const len = str.length;
	let counter = times % len;

	return str.substr(counter, len - counter) + str.substr(0, counter);
};
module.exports = rotate_left;

# N-DES

An algorithm derived from DES to make DES encryption more secure.

## Steps

-   Take N - keys
-   Take variable length message
-   Take negotiated S-BOXES
-   perform the DES algorithm N-Times
    -   for each round take the i-th key as encryption key
    -   permute the S-BOX for that round with the i-th key
    -   for every alternate round, Decryption is performed (like the Triple-DES algorithm).

## Choosing of S-BOXES

The S-BOX are chosen for each round by processing the key for that round and obtaining the permutation for that specific key.

Since the permutation function automatically wraps the hash with the total no of S-BOXES the no of S-BOXES provided for the program can vary to any length.

## Permutation algorithm

For choosing the S-BOXES for that round the order of the S-BOXES must be found.

This is done using a specific permutation algorithm which is already known for both the sender and the receiver.

The function used for permuting the S-BOXES in this repository is given below :

```javascript
//Note that the given algorithm is just an example
//for how the permutation can be done and
//may not neccesarily distribute the keys with equal probabilities.
const permute_sbox = (SBOXES, key) => {
	let result = [];
	const total = SBOXES.length;
	for (var i = 0; i < 16; i += 2) {
		const hex_index = key.substr(i, 2);
		const binary_index = hex_to_binary(hex_index);
		let index = string_to_no(binary_index);
		index = ensure_equal_distribution(index, total);
		result.push(SBOXES[(index * (2 * i)) % total]);
	}
	return result;
};
```

Here `ensure_equal_distribution` is shown below:

```javascript
//function to increase the value to ensure equal distribution
//of the given index
//this helps in equal distribution when the number of sboxes
//are very large and an 8 bit integer provided from the 2 characters
//of hex in the key cant cover all the SBOXES
const ensure_equal_distribution = (value, minimum) => {
	let result = value;
	while (result < minimum) result = result * result;
	return result;
};
```

## Additional measures which can be taken

-   Make the distribution algorithm for S-BOXES random and make the seed for the random function as the product of an operation which is performed on all the keys combined
-   Make the algorithm to permute the keys private to provide extra security

### References

-   [DES Algorithm](http://page.math.tu-berlin.de/~kant/teaching/hess/krypto-ws2006/des.htm)
-   [Triple DES Algorithm](https://www.tutorialspoint.com/cryptography/triple_des.htm)
-   [DES supplementary materials](https://en.wikipedia.org/wiki/DES_supplementary_material)

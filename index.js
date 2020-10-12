import { encrypt_string, decrypt_string, hex_from_chars } from './desWithConversion.js';

import { Generator } from './generator.js';

let key = '133457799bbcdff1'; // HEXs
let encryptString = "abcd1234"; // TEXT

const encrypted = encrypt_string(encryptString, key);
const decrypted = decrypt_string(encrypted, key);

console.log(encrypted, decrypted);

const numberOfPairs = 2**13;
const plaintexts = Generator.generatePlaintexts(8, numberOfPairs);
const ciphertexts = Generator.generateCiphertexts(plaintexts, key);

confirmValidPlaintextsCiphertexts(plaintexts, ciphertexts);


console.log(plaintexts.map(hex_from_chars), ciphertexts);


function confirmValidPlaintextsCiphertexts (plaintexts, ciphertexts) {
	for (let i = 0; i < plaintexts.length; ++i) {
		if (plaintexts[i] !== decrypt_string(ciphertexts[i], key)) {
			throw "something wrong";
		};
	}
}
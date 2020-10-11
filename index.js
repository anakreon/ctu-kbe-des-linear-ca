import { des } from './des.js';

/*
import CryptoJS from 'crypto-js';

// 16 rounds
var encrypted = CryptoJS.DES.encrypt("Message", "5555555555555555");

console.log(encrypted.toString());

var decrypted = CryptoJS.DES.decrypt(encrypted, "5555555555555555");

console.log(decrypted.toString()); // in HEX for some reason



// 8 rounds
var encrypted = CryptoJS.DES.encrypt("Message", "Secret Passphrase", { rounds: 8 });

console.log(encrypted.toString());

var decrypted = CryptoJS.DES.decrypt(encrypted, "Secret Passphrase", { rounds: 8 });

console.log(decrypted.toString()); // in HEX for some reason

*/

// 16 rounds
// U2FsdGVkX1+fSQqEny7pV1nJ7K2y9Q3e
// 4d657373616765

// 8 rounds
// U2FsdGVkX19DQiH70LIHJskMs741FLE1
// 4d657373616765


let globalKey = '133457799bbcdff1'; // HEX
let globalVector = '';//'bda20c45101a615f'; // HEX

let encryptString = "123456789abcdef1"; // TEXT
let decryptString = "82ab1c0cb7524170ab2e055d716bc227"; // TEXT
let result = '';

//encrypt_string();
decrypt_string();

console.log(result);

// end key generator stuff
function chars_from_hex(inputstr) {
	var outputstr = '';
	inputstr = inputstr.replace(/^(0x)?/g, '');
	inputstr = inputstr.replace(/[^A-Fa-f0-9]/g, '');
	inputstr = inputstr.split('');
	for(var i=0; i<inputstr.length; i+=2) {
		outputstr += String.fromCharCode(parseInt(inputstr[i]+''+inputstr[i+1], 16));
	}
	return outputstr;
}
function hex_from_chars(inputstr) {
	var delimiter = '';
	var outputstr = '';
	var hex = "0123456789abcdef";
	hex = hex.split('');
	var i, n;
	var inputarr = inputstr.split('');
	for(var i=0; i<inputarr.length; i++) {
		if(i > 0) outputstr += delimiter;
		if(!delimiter && i % 32 == 0 && i > 0) outputstr += '\n';
		n = inputstr.charCodeAt(i);
		outputstr += hex[(n >> 4) & 0xf] + hex[n & 0xf];
	}
	return outputstr;
}
function encrypt_string() {
    var input = encryptString;
    var key = globalKey;
    key = chars_from_hex(key);
    var vector = globalVector;
    vector = chars_from_hex(vector);
    var vector = (vector.length > 7) ? vector : null;
    var output = des(key, input, 1, vector ? 1 : 0, vector);
    result = hex_from_chars(output);
}
function decrypt_string() {
    var input = decryptString;
    var key = globalKey;
    key = chars_from_hex(key);
    var vector = globalVector;
    vector = chars_from_hex(vector);
    var vector = (vector.length > 7) ? vector : null;
    input = chars_from_hex(input);
    result = des(key, input, 0, vector ? 1 : 0, vector);
}

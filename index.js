import CryptoJS from 'crypto-js';

// 16 rounds
var encrypted = CryptoJS.DES.encrypt("Message", "Secret Passphrase");

console.log(encrypted.toString());

var decrypted = CryptoJS.DES.decrypt(encrypted, "Secret Passphrase");

console.log(decrypted.toString()); // in HEX for some reason



// 8 rounds
var encrypted = CryptoJS.DES.encrypt("Message", "Secret Passphrase", { rounds: 8 });

console.log(encrypted.toString());

var decrypted = CryptoJS.DES.decrypt(encrypted, "Secret Passphrase", { rounds: 8 });

console.log(decrypted.toString()); // in HEX for some reason


// 16 rounds
// U2FsdGVkX1+fSQqEny7pV1nJ7K2y9Q3e
// 4d657373616765

// 8 rounds
// U2FsdGVkX19DQiH70LIHJskMs741FLE1
// 4d657373616765

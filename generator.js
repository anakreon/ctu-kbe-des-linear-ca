import cryptoRandomString from 'crypto-random-string';
import { encrypt_string, decrypt_string, hex_from_chars } from './desWithConversion.js';


export class Generator {
    static generatePlaintexts (length, number) {
        const type = 'alphanumeric';
        let result = [];
        for (let i = 0; i < number; ++i) {
            result.push(cryptoRandomString({ length, type }));
        }
        return result;
    }
    static generateCiphertexts (plaintexts, key) {
        return plaintexts.map((plaintext) => encrypt_string(plaintext, key));
    }
}
import { des } from './des.js';

export function chars_from_hex(inputstr) {
	var outputstr = '';
	inputstr = inputstr.replace(/^(0x)?/g, '');
	inputstr = inputstr.replace(/[^A-Fa-f0-9]/g, '');
	inputstr = inputstr.split('');
	for(var i=0; i<inputstr.length; i+=2) {
		outputstr += String.fromCharCode(parseInt(inputstr[i]+''+inputstr[i+1], 16));
	}
	return outputstr;
}
export function hex_from_chars(inputstr) {
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
export function encrypt_string(input, hexkey, hexvector = '') {
    const key = chars_from_hex(hexkey);
    let vector = chars_from_hex(hexvector);
    vector = (vector.length > 7) ? vector : null;
    var output = des(key, input, 1, vector ? 1 : 0, vector);
    return hex_from_chars(output);
}
export function decrypt_string(input, hexkey, hexvector = '') {
    const key = chars_from_hex(hexkey);
    let vector = chars_from_hex(hexvector);
    vector = (vector.length > 7) ? vector : null;
    input = chars_from_hex(input);
    return des(key, input, 0, vector ? 1 : 0, vector);
}
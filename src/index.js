const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decode = '';

    for (let i = 0; i < expr.length; i += 10) {
        decode += getChar(expr.slice(i, i + 10));
    }

    return decode;
}

function getChar(string) {
    if (string === '**********'){
        return ' ';
    }
    let str = '';
    for (let i = 0; i < 10; i += 2) {
        let char = string.slice(i, i + 2);
        if (char === '00'){
            continue;
        }
        if (char === '10'){
            str += '.';
        } 
        if (char === '11'){
            str += '-';
        } 
    }
    return MORSE_TABLE[str];
}

module.exports = {
    decode
}
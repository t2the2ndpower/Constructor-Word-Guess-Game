var letter = require("./letter");


args = process.argv;
console.log(args);

var fs = require("fs");


function Wrd(wordChars, wordStg ) {
    this.wordChars = wordChars;
    this.wordStg = wordStg;
};

console.log("this is the word.js file");


module.exports = Wrd;
var letter = require("./letter");


args = process.argv;
console.log(args);

var fs = require("fs");


function Wrd(wordStg) {
    this.letArray = wordStg.split('').map(function(char){
        return new letter(char)
    })
    // this.wordChars = wordChars;
    // this.wordStg = wordStg;

    this.word = function(){
        this.letArray.forEach(function(letObj){
            letObj.printMatch()
        })
    }
};

const gWord = new Wrd("stephan")
gWord.word()
console.log("this is the word.js file");


module.exports = Wrd;
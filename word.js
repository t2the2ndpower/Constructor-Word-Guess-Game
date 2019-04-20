var letter = require("./letter");

const array = []
args = process.argv;
console.log(args);

var fs = require("fs");


function Wrd(wordStg) {
    this.letArray = wordStg.split('').map(function (char) {
        return new letter(char)
    })
    // this.wordChars = wordChars;
    // this.wordStg = wordStg;

    this.word = function () {
        const newArray = this.letArray.map(function (letObj) {
            return letObj.printMatch()
        })
        console.log('newArray', newArray)
        return newArray
    }
};

const gWord = new Wrd("stephan")
const word = gWord.word()
word.forEach((obj, i) => {
    console.log(typeof obj)
    if (typeof obj === 'undefined') {
        return
    } else {
        array[obj.index] = obj.char
    }
})
console.log(array.length)
for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "undefined") {
        array[i] = "-"
    }
}
console.log(array.join(''))
console.log("this is the word.js file");


module.exports = Wrd;
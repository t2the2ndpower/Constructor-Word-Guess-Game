// args = process.argv;
// console.log(args);

var fs = require("fs");

var char = process.argv[2];

function Ltr(char) {
    this.word = 'dave'.split('')
    const newArray = this.word.map(function(char){
        return '-'
    })
    
    this.char = char;

    this.printMatch = function () {
        
        if (this.word.indexOf(char) !== -1) {
            console.log(this.word[this.word.indexOf(char)]);
            return {
                char,
                index: this.word.indexOf(char)
            }
            // fs.appendFile("hangman.txt", this.char,

            //     function (err) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("Letter Added!");
            //         }
            //     })

        } else {
            console.log("_");

            // fs.appendFile("hangman.txt", "__",

            //     function (err) {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("Yeah, not so much");
            //         }
            //     })
        }
    };

    this.isMatch = function (x) {
        if (x == this.char) {
            this.isGuessed = true;

        } else {
            this.isGuessed = false;
        }
    }
};


console.log("this is the letter.js file");

module.exports = Ltr;

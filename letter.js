args = process.argv;
console.log(args);

var fs = require("fs");

function Ltr(char, isGuessed) {
    this.char = char;
    this.isGuessed = isGuessed;

    this.printMatch = function () {
        if (isGuessed === true) {
            console.log(Ltr.char);
            fs.appendFile("hangman.txt", ltr.char,

                function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Letter Added!");
                    }
                })

        } else {
            console.log("__");

            fs.appendFile("hangman.txt", "__",

                function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Yeah, not so much");
                    }
                })
        }
    };

    this.isMatch = function (x) {
        if (x == Ltr.char) {
            this.isGuessed = true;

        } else {
            this.isGuessed = false;
        }
    }
};

module.exports = LETTER;

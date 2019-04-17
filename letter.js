args = process.argv;
console.log(args);

var fs = require("fs");

function Ltr(letter, isGuessed){
    this.letter = letter,
    this.isGuessed = isGuessed,

    this.printMatch = function(){
        if(isGuessed === true){
            console.log(Ltr.letter);
            fs.appendFile("hangman.txt", ltr.letter,
            
            function(err){
                if(err){
                  console.log(err);
                } else{
                  console.log("Content Added!");
                }
              })
            
        } else {
            console.log("__");

            fs.appendFile("hangman.txt", "___",
            
            function(err){
                if(err){
                  console.log(err);
                } else{
                  console.log("Content Added!");
                }
              })
        }
    },

    this.isMatch = function(x){
        if(x == Ltr.letter){
            this.isGuessed = true;

        } else{
            this.isGuessed = false;
        }
    }
}
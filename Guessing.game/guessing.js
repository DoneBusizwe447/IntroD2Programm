


var secret= Math.floor(Math.random()* 10)+ 1;

var startButton=document.getElementById("startbutton");
startButton.onclick= myGuess;

function myGuess(){
    var answer= prompt("Please guess a number(1-10).");
    answer=Number(answer);
    checkAnswer(answer);

}

function checkAnswer(guess){
    if(guess===secret){
        alert("Correct!!,your '"+ guess +"' is right.")
    }else if(guess< secret){
        alert("Incorrect!!, Your guess is too low.");
    }else if(guess> secret){
        alert("Incorrect!!, Your guess is too high")
    }
}
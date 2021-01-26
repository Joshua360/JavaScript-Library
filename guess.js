const numberToGuess = 7;
let correctGuess = false;
const guess = prompt("What is your name? ");



if(numberToGuess === parseInt(guess)){
    console.log("My nigga. You've guessed the number");

}else{
    console.log(`sorry :(: The number was ${numberToGuess})`)
}

//both let and const do no allow any declared variable to be declared again
//variable names should be descriptive
//JavaScript has a long list of RESERVED WORDS you cannot use as variable names
//strings are objects because they have methods and properties.
//Math calculations can be done inside the curly braces inside string literals : `${3*3}`


const message = "I love you motherfucker";
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());

console.log(message);



console.log(`Hi ${name}. I am glad you could join us`);








//words to shout
// const word =  prompt("Which word do you wanna shout?");

// document.querySelector("main").innerHTML = `word to shout: ${word.toUpperCase()}`;




// 1. Declare variables and capture input.

const yourName = prompt("What is your name?");
const gender = prompt("Gender: ");

let sex;
if(gender.toLowerCase() === "male"){
     sex = "he";

}else if(gender.toLowerCase() === "female"){
    sex = "she";
}

const yourAge = prompt("How old are you?");
const maritalStatus = prompt("Marital status?");

// 2. Combine the input with other words to create a story.
let story = `<p>${yourAge}-year old ${yourName} is ${maritalStatus}.
 We don't know if this is true but that's what ${sex} has told us</p>`;

// 3. Display the story as a <p> inside the <main> element.

document.querySelector("main").innerHTML = story;




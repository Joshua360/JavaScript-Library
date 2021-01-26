/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/


let correctAnswers = 0;

// 2. Store the rank of a player
// let rank = 0;


// 3. Select the <main> HTML element

const pinnacle = document.querySelector("main");


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const questions = [
  {
    quiz:"What is one plus one [Answer in words]",
    answer: "Two"
  },
  {
    quiz:"Which programming language is used to add interactivity to web pages?",
    answer: "JavaScript"
  },
  {
    quiz:"Who founded Teamtreehouse",
    answer: "Ryan Carson"
  },
  {
    quiz:"Where was Joshua Ouma born?",
    answer: "Katolo"
  },
  {
    quiz:"Node.js is a runtime environment used to execute JavaScript cod outside the browser. YES or No",
    answer: "Yes"
  }

];

for(let i =0; i< questions.length; i++){
  const userAnswer = prompt(questions[i].quiz);

  if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
    correctAnswers += 1;

  }
}


let message = `<h2>You've got ${correctAnswers} questions out of ${questions.length}</h2>

`;

if(correctAnswers === 0 ){
  message += `<p> No Crown Earned</p>`;
}else if(correctAnswers === 1 || correctAnswers === 2){
  message += `<p> Crown Earned: Bronze</p>`;

}else if(correctAnswers === 3 || correctAnswers === 4){
  message += `<p> Crown Earned: Silver</p>`;

}else if(correctAnswers === questions.length){
  message += `<p> Crown Earned: Gold</p>`;

}




pinnacle.innerHTML = message;
//questions.forEach();

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element


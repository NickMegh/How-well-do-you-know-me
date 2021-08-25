//console.log("Let's see how well do you know Nikhil 😉");
var readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.hex('#FF8800')("Let's see how well do you know NIKHIL 😉 \n"));
var userName = readlineSync.question(chalk.magentaBright("Please enter your name : \n"));
console.log(chalk.hex('#6366F1')("\nHi & Welcome " + userName + " ❤️"));
//console.log("Welcome "+ userName + " do you know NIKHIL");
//console.log(chalk.hex('#DEADED').bold("Welcome "+ userName + " do you know NIKHIL"));
console.log(chalk.black.bold.bgWhite("\nRemember: for each correct answer you will be given 1 point\n"));
console.log(chalk.white.bold.bgBlack("Note:please Enter a/ b/ c as answers for each question\n"));
var score = 0;
//play function
function play(question,answer){
var userAns = readlineSync.question(question);
if (userAns.toUpperCase() === answer.toUpperCase()){
console.log(chalk.green.bold(userName +" Congo you are right!"));
score++;
} 
else{
  console.log(chalk.red.bold("You have chosen the wrong answer!"));
}
console.log("Your current score: "+score);
console.log("\n----------------------\n")
}

var allQuestion =[
        {question:"1. Where do NIKHIL live?\nA.Pune\nB.Bangalore\nC.Delhi\nD.Jaipur\n", answer:"D"},
        {question:"2. When is my birthday?\nA.18 feb\nB.16 march\nC.11 may\nD.16 July\n", answer:"D"},
        {question:"3. What is my age? \nA.21\nB.25\nC.24\nD.26\n", answer:"C"},
        {question:"4. What is my professional degree?\nA.MBBS\nB.M.Com\nC.B.tech\nD.B.E.\n", answer:"D"},
        {question:"5. When is my Engineering branch?\nA.CSE\nB.ECE\nC.EEE\nD.ME\n", answer:"C"},
        {question:"6. What is my favourite color?\nA.Whtie\nB.Blue\nC.Grey\nD.Black\n", answer:"C"},
        {question:"7. What pet do i have?\nA.Dog\nB.Cat\nC.Rabbit\nD.Monkey\n", answer:"B"},
        {question:"8. What is my cat's name?\nA.Sniffy\nB.Ninja\nC.Percy\nD.Rixie\n", answer:"A"},
        {question:"9. Who is my spirit animal?\nA.Oggy\nB.Kiteretsu\nC.Shifu\nD.Shinchan\n", answer:"D"},
        {question:"10.Who is my favourite Superhero?\nA.Superman\nB.Captain America\nC.Black Panther\nD.IronMan\n", answer:"D"}
];
for(var i=0; i<allQuestion.length;i++){
  var currentQuestion = allQuestion[i];
  play(currentQuestion.question, currentQuestion.answer);
}
var highScore =[{name:"Nikhil",topScore:"10"},];

console.log(chalk.keyword('yellow').bold("YOUR FINAL SCORE IS : "+score));

console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));
printScoreBoard(highScore);
var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}
console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.black.bold.bgWhite("Congratulations "+userName+" , you have beaten the SCORE-BOARD. You are my best friend ❤️"));

  console.log(chalk.keyword('orange').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard \n\n\n\n");
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you were so close to be my best friend 🙃"));
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.cyan.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}
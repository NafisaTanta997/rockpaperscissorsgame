//code for RPS game

console.log("rps game");

//var userChoice = prompt("Do you use Rock, Paper or Scissors?");
//returns random number between range
//var userChoice = "";
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "Rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

//-----------------------------------------------FOR ROCK BUTTON--------------------------------------------------------
//Step One: Select the button you would like to interact with and put it in a variable
let rButton = document.querySelector("#saveForm1");
//Step Two: Confirm that you have selected your button by logging it into the console
console.log(rButton);
//Step 3: Select the div with the id of “status” and put it into a variable
let stat1 = document.querySelector("#status1");
//Step 4: Confirm that you have selected the right element by logging it into the console
console.log(stat1);

//-----------------------------------------------FOR PAPER BUTTON--------------------------------------------------------
//Step One: Select the button you would like to interact with and put it in a variable
let pButton = document.querySelector("#saveForm2");
//Step Two: Confirm that you have selected your button by logging it into the console
console.log(pButton);
//Step 3: Select the div with the id of “status” and put it into a variable
let stat2 = document.querySelector("#status2");
//Step 4: Confirm that you have selected the right element by logging it into the console
console.log(stat2);

//-----------------------------------------------FOR SCISSORS BUTTON--------------------------------------------------------
//Step One: Select the button you would like to interact with and put it in a variable
let sButton = document.querySelector("#saveForm3");
//Step Two: Confirm that you have selected your button by logging it into the console
console.log(sButton);
//Step 3: Select the div with the id of “status” and put it into a variable
let stat3 = document.querySelector("#status3");
//Step 4: Confirm that you have selected the right element by logging it into the console
console.log(stat3);

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;


//Step 5: Add an event listener to the rButton
rButton.addEventListener('click', (e) => {
  console.log('It works!');
  counter1 += 1;
  if (counter1 == 1) {
    var userChoice = "Rock";
    if (userChoice == computerChoice) {
      stat1.innerHTML = `<h6> It's a tie! 👔 </h6>`
    } else if (computerChoice == "Paper") {
      stat1.innerHTML = `<h6> Computer wins! </h6>`
    } else {
      stat1.innerHTML = `<h6> You win! </h6>`
    }
  }
});

//Step 5: Add an event listener to the pButton
pButton.addEventListener('click', (e) => {
  console.log('It works!');
  counter2 += 1;
  if (counter2 == 1) {
    var userChoice = "Paper";
    if (userChoice == computerChoice) {
      stat2.innerHTML = `<h6> It's a tie! 👔 </h6>`
    } else if (computerChoice == "Scissors") {
      stat2.innerHTML = `<h6> Computer wins! </h6>`
    } else {
      stat2.innerHTML = `<h6> You win! </h6>`
    }
  }
});

//Step 5: Add an event listener to the sButton
sButton.addEventListener('click', (e) => {
  console.log('It works!');
  counter3 += 1;
  if (counter3 == 1) {
    var userChoice = "Scissors";
    if (userChoice == computerChoice) {
      stat3.innerHTML = `<h6> It's a tie! 👔 </h6>`
    } else if (computerChoice == "Rock") {
      stat3.innerHTML = `<h6> Computer wins! </h6>`
    } else {
      stat3.innerHTML = `<h6> You win! </h6>`
    }
  }
});


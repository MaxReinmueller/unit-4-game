// stored variables
var compPick = [''];
var crystal1 = [''];
var crystal2 = [''];
var crystal3 = [''];
var crystal4 = [''];
var userScore = [''];



// after window.onload, 
$(document).ready(function() {
// computer picks a number between 19 - 120 and stores it


// computer picks a number between 1 - 12 for each of the 4 crystals. stored number is not displayed to user
var crystalStart = Math.floor(Math.random() * 4);
console.log(crystalStart);
}); 

// user clicks on one of the crystals and the score is displayed below the crystal, each click, the score is added to the old number
// if user score matches computer number, user is given a win. game is reset
// if user score goes over computer number, user is given a loss. game is reset
// wins and losses are tracked
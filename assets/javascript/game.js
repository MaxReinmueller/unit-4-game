// stored variables
var compPick = [];
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];
var userScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function gameStart() {

    // computer picks a number between 19 - 120 and stores it
    var compStart = Math.floor(Math.random() * (120 - 19)) + 19;
    compPick.push(compStart);
    $("#compNumBox").html("<h2><strong>" + compPick + "</strong></h2>");

    // picks crystal numbers
    // crystal 1
    var crystalStart1 = Math.floor(Math.random() * 12) + 1;
    crystal1.push(crystalStart1);
    $("#crystalOne").src += crystal1;
    console.log(crystal1, "C1");

    // crystal 2
    var crystalStart2 = Math.floor(Math.random() * 12) + 1;
    crystal2.push(crystalStart2);
    console.log(crystal2, "C2");

    // crystal 3
    var crystalStart3 = Math.floor(Math.random() * 12) + 1;
    crystal3.push(crystalStart3);
    console.log(crystal3, "C3");

    // crystal 4
    var crystalStart4 = Math.floor(Math.random() * 12) + 1;
    crystal4.push(crystalStart4);
    console.log(crystal4, "C4");

    $("#userScoreBox").html("<h2><strong>" + userScore + "</strong></h2>");    
});


// On click event for crystals
$("#crystalOne").on("click", function () {
    userScore = (Number(crystal1) + Number(userScore));
    console.log(crystal1, "working");
    upDateScore()
    WinsandLosses()

});
$("#crystalTwo").on("click", function () {
    userScore = (Number(crystal2) + Number(userScore));
    console.log(crystal2, "working");
    upDateScore()
    WinsandLosses()

});
$("#crystalThree").on("click", function () {
    userScore = (Number(crystal3) + Number(userScore));
    console.log(crystal3, "working");
    upDateScore()
    WinsandLosses()

});
$("#crystalFour").on("click", function () {
    userScore = (Number(crystal4) + Number(userScore));
    console.log(crystal4, "working");
    upDateScore()
    WinsandLosses()

});

// updates user total score
function upDateScore() {
    $("#userScoreBox").html("<h2><strong>" + userScore + "</strong></h2>");
    losses
}

// keeps track of wins and losses
function WinsandLosses() {
    if (userScore == compPick) {
        alert("You win!")
        wins++;
        $('#win').html('Wins: ' + wins);
        gameReset()
    } else if (userScore > compPick) {
        alert("you lose!")
        losses++;
        $('#loss').html('Losses: ' + losses);
        gameReset()
    }
}

// resets the game
function gameReset() {

    //resets variables
    compPick = [];
    userScore = [];
    crystal1 = [];
    crystal2 = [];
    crystal3 = [];
    crystal4 = [];
    $("#userScoreBox").html("<h2><strong>" + userScore + "</strong></h2>");

    // computer picks new number
    var compStart = Math.floor(Math.random() * (120 - 19)) + 19;
    compPick.push(compStart);
    $("#compNumBox").html("<h2><strong>" + compPick + "</strong></h2>");

    // picks crystal numbers
    // crystal 1
    var crystalStart1 = Math.floor(Math.random() * 12) + 1;
    crystal1.push(crystalStart1);
    $("#crystalOne").src += crystal1;
    console.log(crystal1, "C1");

    // crystal 2
    var crystalStart2 = Math.floor(Math.random() * 12) + 1;
    crystal2.push(crystalStart2);
    console.log(crystal2, "C2");

    // crystal 3
    var crystalStart3 = Math.floor(Math.random() * 12) + 1;
    crystal3.push(crystalStart3);
    console.log(crystal3, "C3");

    // crystal 4
    var crystalStart4 = Math.floor(Math.random() * 12) + 1;
    crystal4.push(crystalStart4);
    console.log(crystal4, "C4");
}
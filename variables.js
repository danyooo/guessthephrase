//puzzle screen
let screen = 1;
let img;
// Set array for possible words to guess
let puzzleOptions = ["pseudocode","test","giraffe", "paleontologist", "cryogenesis", "ambidexterous", "world wide",]
let puzzle;
let lettersleft = 0;
// make an array to contain all the guesses made
let guesses =[]
let GuessesXPos = 100
let GuessesYPos = 100
let guessesSpacing = 30
//make an array to store all the incorrect guesses
let incorrectGuesses = []
//word positions for guessing game
let guess = {
x: 50,
y:150,
spacing: 30
}


// variables
//scores
let player1Score = 0;
let player2Score = 0;
//Screens
//player turn, -1 is player 1, 1 is player 2
let playerturn = 1
// guessing screen is 0, pong game screen would be 1
let Screen = 0;

//ball

let ball = {
  // starting position
x: 50,
y: 50,
  //speed
speedX: 0,
speedY:0,
  //speed
color: "blue",
  // radius
r: 15,
}

// general shared variables for paddles
let paddle ={
// width/height 
w: 10,
//color
color: "blue",
  //speed
speedY: 10

}
// ## paddleplayer1 (left paddle)
 let paddleplayer1 = { 
// position
   // dont set this as 0 will always be the left side and will scale the same
   x: 50,
// set the Y later on after drawing the canvas 
  y:0,
  h: 150
   

 }




// ## paddleplayer2 (right paddle)
 let paddleplayer2 = { 
// position
    //Set the X later on after drawing the canvas
    x: 0,
    //Set the Y later on after drawing the canvas
   y: 0,
h: 150
  


 }

// ### arena
let arena = {
// positions
  x: 10,
  y: 10,
  w: 10,
  h: 10,
// color
  colour: "grey",
// arena image
}
//Goal lines
//position
//left goal
let goal1 = {

X1: 0,
Y1: 0,
X2: 0,
Y2: 0,

}
// right goal
let goal2 = {
X1: 0,
Y1: 0,

X2: 0,
Y2: 0,

}


//set color of goals to red
let GoalColor = ('red')







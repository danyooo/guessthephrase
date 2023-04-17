// Set array for possible words to guess
// let StartPageImg;
let screen = 0;
// when guessing is done, screen++ 
// that means screen is now 1
// when screen is screen one remove the background of guessing screen
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
speedX: 3,
speedY:3,
  //speed
color: "red",
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
// ## paddleplayer1
 let paddleplayer1 = { 
// position
   x: -10,

  y:10,
  h: 10
   

 }




// ## paddleplayer2
 let paddleplayer2 = { 
// position
    x: 10,
   y: 10,
h: 10
  


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
let Goal1X;
let Goal1Y;

let Goal1X2
let Goal1Y2

//right goal
let Goal2X;
let Goal2Y;

let Goal2X2;
let Goal2Y2;

//set color of goals to red
let GoalColor = ('red')





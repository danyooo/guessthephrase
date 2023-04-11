// variables
//scores
let player1Score = 0;
let player2Score = 0;
//Screens
// guessing screen is 0, pong game screen would be 1
let Screen = 0;


//ball

let ball = {
  // starting position
x: 50,
y: 50,
  //speed
ballspeedX: 3,
ballspeedY:3,
  //speed
color: "red",
  // radius
r: 15,
}

// general shared variables for paddles
let paddle ={
// width/height 
w: 10,
h: 10,
//color
color: "blue",
  //speed
speedY: 10
}
// ## paddleplayer1
 let paddleplayer1 = { 
// position
   x: -10,

  y:-10
  
   

 }




// ## paddleplayer2
 let paddleplayer2 = { 
// position
    x: 10,
   y: 10,

  


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
//word positions for guessing game
let guess = {
x: 20,
y:50,
spacing: 15

}


// Set array for possible words to guess
let WordBank = ["pseudocode","test","giraffe", "paleontologist", "cryogenesis", "ambidexterous"]

// make an array to contain all the guesses made
let WordGuesses =[]
let puzzle
let WordguessesXPostion = 100
let WordguessesYPostion = 100
let guessesSpacing = 30
let incorrectGuesses = []



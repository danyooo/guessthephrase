//puzzle screen

let screen = 0;
let screentop;
let screenbottom;
let puzzleOptions = ["pseudocode","test","giraffe", "paleontologist", "cryogenesis", "ambidexterous", "worldwide", "quadratic","elephant","sponge","lightning", "cutting board", "mythology", "exponential","rose","banana","peach","word","preaching","lethargic","illness","shuriken","cat","butter","churn","car","it","green","forest","treehouse","zebra","pizzeria","bread","pterodactyl","joker","ascend","concise","fluorescent","kingdom","handkerchief","judgement","programme","champagne","yarn","queen" ]
// Set array for possible words to guess
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
// player lives

let img;
// variables
//scores
let player1Score = 0;
let player2Score = 0;
//Screens
//player turn, -1 is player 1, 1 is player 2
let playerturn = 1
let whatplayer;

//ball
//declare the ball but  later set it in the setup variable to scale with window

let ball ={
  // starting position
x:"",
y:"",
//speed
speedX: "",
speedY: "",
//color
color: "",
  // radius
r: 10,
}

// general shared variables for paddles
let paddle ={
// width/height 
w: 10,
//color
color: "blue",
  //speed
speed: 10

}
// declare the left paddle as empty to set in setup variable
let paddleplayer1 = {
x:"",
y:"",
h:"",
lives: ""
  
}
//declare the right paddle as empty to set in setup variable
let paddleplayer2 = {
x:"",
y:"",
h:"",
lives: ""
  
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
// declare the Goal lines
//position
//left goal

//set color of goals to red
let GoalColor = ('red')
let goal1 = {

X1:"",
Y1:"",
X2:"",
Y2:""
}
// right goal
let goal2 = {
  
X1:"",
Y1:"",
X2:"",
Y2:"",
}









// create canvas
function setup(){
createCanvas(windowWidth - 20 ,windowHeight - 20)
// set the constraint limits for the paddles, not allowing them to go above or below these
screentop = 0;
screenbottom = windowHeight;
  // set the framerate for how many times the draw function loops
frameRate(60);
//choose word
choosePuzzle()
  // paddle player 1 (left paddle)
  //set paddle player 1's variables here to allow scaling with window
   paddleplayer1 = { 
// // position
   x:windowWidth / 8,
  y:windowHeight /2 + paddleplayer1.h,
 //height
  h: 150,
     //lives
  lives: 5,
 }
  
  // ## paddleplayer2 (right paddle)
  //set paddle player 2's variables here to allow scaling with variable
  paddleplayer2 = { 
// position
x: windowWidth - paddle.w - paddleplayer1.h,
y: windowHeight / 2,
   //height
h: 150,
    //lives
lives: 5
}  
  
  ball = {
  // set the ball's variables
x : windowWidth / 2,
y : windowHeight / 2,
  // set to 0 because the game starts on the guessing screen, set later when is needed
speedX : 2,
speedY : 3,
color : "red",
//set radius / size
r :10,
}
  //set the goal line variables
  // left goal
goal1 = {
// set goal line to be behind the left paddle
X1:windowWidth / 15,
Y1:0,
X2:windowWidth / 15,
Y2:windowHeight,
}
// right goal
goal2 = {
  // set goal line to be behind the right paddle
X1:windowWidth * 0.92,
Y1:0,
X2:windowWidth * 0.92,
Y2:windowHeight,
}

}



function drawGoals(){
  line(goal1.X1, goal1.Y1, goal1.X2, goal1.Y2)

line(goal2.X1,goal2.Y1,goal2.X2,goal2.Y2);


}
 


function drawincorrectguesses(){
  // as long as the screen is on the guessing screen, display incorrect guesses
 if (screen == 0){
textSize(30)
fill('black')
//set letter to incorrect guesses
for(let i = 0; i < incorrectGuesses.length; i++){
let letter = incorrectGuesses[i]
  // display incorrect letter guesses
text(letter,  guess.x + i * guess.spacing, guess.y + 200)
 }
text("incorrect guesses: " + incorrectGuesses.length, guess.x , guess.y+250)
}}

let guessletter;
function drawGuesses(){
  // as long as screen is on guessing screen, display the gueeses
if (screen == 0){
textSize(20)
fill('black')
for(let i= 0; i < guesses.length;i++){
 guessletter = guesses[i]
  // display correct guesses
text(guessletter,  guess.x + i * guess.spacing, guess.y)

  
}}
}

// ### draw loop
function drawBall(){
  // color the ball with blue
fill(ball.color)
  stroke("black")
  // draw the ball at its set location with its size
circle(ball.x,ball.y,ball.r * 2)


  // image(img, 0, 0, width, height);



//if ball goes past left goal, player1 loses a life, screen reset to word guessing.
if (ball.x < goal1.X1 && paddleplayer1.lives > 0){
paddleplayer1.lives -= 1
resetpuzzle()
print("ball has passed goal 1! reset game ")
  print("player 1 lives is " + paddleplayer1.lives)
  }
//ball begins to move with speed values
if(screen == 1){
ball.x += ball.speedX
ball.y+= ball.speedY
}



//right goal
//if ball goes past right goal, player2 loses a life, screen reset to word guessing.
  if (ball.x > goal2.X1 && paddleplayer2.lives > 0){
paddleplayer2.lives -= 1
resetpuzzle()
print("ball has passed goal 2! reset game ")
    print("player 2 lives is " + paddleplayer2.lives)
  }

//if ball hits bottom  of the screen, bounce in opposite direction
if (ball.y + ball.r >= windowHeight ){
ball.speedY *= -1
  
}
  // if ball its the top of the screen, bounce in opposite direction
  else if (ball.y - ball.r <= 0 ){
  ball.speedY *= -1
    
}
  // if ball hits left bounce back
if(ball.x - ball.r <= 0 ) {
  ball.speedX *= -1
}
//if ball hits right side bounce back
  if(ball.x + ball.r >= windowWidth  ){
    ball.speedX *= -1
  }

  //if ball hits the left paddle it bounces back
  if(ball.y > paddleplayer1.y - paddleplayer1.h / 4  && ball.y < paddleplayer1.y + paddleplayer1.h *1.5   && ball.x < paddleplayer1.x + paddle.w   && ball.x > paddleplayer1.x - paddle.w){
ball.speedX *= -1
    // increase the balls speed in the X coordinates in direction it is going in
if(ball.speedX > 0){
ball.speedX += 0.2
}
else if(ball.speedX < 0){
ball.speedX -=0.2
}
// increase balls sppeed in the Y coordinates in the direction it is going in  
if(ball.speedY > 0){
  ball.speedY += 0.2
}
else if(ball.speedY < 0){
  ball.speedY -= 0.2
}
}
// if ball hits the right paddle it bounces back
 if (ball.y > paddleplayer2.y - paddleplayer2.h /4   && ball.y < paddleplayer2.y + paddleplayer2.h *  1.5 && ball.x > paddleplayer2.x - paddle.w  && ball.x < paddleplayer2.x + paddle.w  ){
ball.speedX *= -1
   // increase the balls speed in the X coordinates in the direction it is going in
if(ball.speedX > 0){
ball.speedX += 0.2
}
else if(ball.speedX < 0){
ball.speedX -=0.2
}
// increase balls speed in the Y coordinates in the direction it is going in  
if(ball.speedY > 0){
  ball.speedY += 0.2
}
else if(ball.speedY < 0){
  ball.speedY -= 0.2
}
}

}
 


function drawPaddle1(){
  stroke("black")
  fill(paddle.color)
rect(paddleplayer1.x,paddleplayer1.y,paddle.w,paddleplayer1.h)
//keep paddle within boundaries
  paddleplayer1.y = constrain(paddleplayer1.y, screentop , screenbottom - paddleplayer1.h -10 )
  // if the screen is on the pong game, allow left paddle to be moved
if(screen == 1){
  //if W is pressed, move left paddle up
  if (keyIsDown(87)) {
    paddleplayer1.y -= paddle.speed
  }
  //if S key is pressed, move left paddle down
  else if (keyIsDown(83)){
    paddleplayer1.y += paddle.speed
  }
}
}
//draw right paddle
function drawPaddle2(){
  
  stroke("black")
  fill(paddle.color)
rect(paddleplayer2.x, paddleplayer2.y, paddle.w, paddleplayer2.h)
  //keep paddle within boundaries
  paddleplayer2.y = constrain(paddleplayer2.y, screentop, screenbottom- paddleplayer1.h -10 )
  //if up arrow key is pressed, move right paddle up
  if(keyIsDown(UP_ARROW)){
    paddleplayer2.y -= paddle.speed 
  }

  //if down arrow key is pressed, move right paddle down
  else if (keyIsDown(DOWN_ARROW)){
    paddleplayer2.y += paddle.speed
  }

}
//draws the lives
function drawlives(){
  // if the screen is on the guessing screen
if( screen == 0){
  // display player lives
textSize(15)
fill("black")
text("player1's lives: " + paddleplayer1.lives,0,600)

textSize(15)
fill("black")
text("player2's lives: " + paddleplayer2.lives,windowWidth - 150,600)
}
  
}
function guessingtext(){
  // if the screen is on the guessing screen
  if(playerturn == -1){
    whatplayer = "1"
  }
  else{
    whatplayer = "2"
  }
if(screen == 0){
// display whos turn it is and what to do
textSize(40)
fill("black")
text("It is player " + whatplayer +"'s' " + "turn", windowWidth / 2, 70)
  
textSize(10)
fill("black")
text("each player will take turns guessing. The goal is to guess the word correctly.",windowWidth / 2, 90)

  textSize(10)
fill("black")
text("The player's turns rotate every time a guess is wrong",windowWidth / 2, 110)

  textSize(10)
fill("black")
text("if a guess is wrong, whoever made the wrong guess will have their paddle size lowered",windowWidth / 2, 130)

  textSize(10)
fill("black")
text("Once it is on the pong game stage, players must try to get the ball in the opponents goal. ",windowWidth / 2, 150)

  textSize(10)
fill("black")
text("Once a goal is made, whoever was scored on will lose a life, and guessing starts again.",windowWidth / 2, 170)

  textSize(10)
fill("black")
text("This will keep  going until a player gets to zero lives. Then the game ends",windowWidth / 2, 190)

   textSize(15)
fill("red")
text("make sure caps lock  is off, and only guess with letters and space.",windowWidth / 2, 210)
}
  
}
//function for choosing a random word
function choosePuzzle(){
// puzzle random out of the options given in the array
puzzle = random(puzzleOptions)
print("puzzle is " + puzzle)
for(let i = 0; i < puzzle.length; i++){
  // add letters left everytime a letter is counted
lettersleft++
// cycle through the word chosen and  select letters
let puzzleLetter = puzzle[i]
// display spaces as spaces 
if( puzzleLetter == " "){
guesses.push(" ")
}
  //display words as blanks to be guessed
else{
guesses.push("_")
}
}
}

function resetpuzzle(){
  // set the screen back to the guessing screen
  screen = 0
  // reset the letters remaning
  lettersleft = 0
 
  //resets ball and paddle position
  ball.x = windowWidth / 2
  ball.y = windowHeight / 2
  // reset ball speed
  ball.speedX = 0
  ball.speedY = 0
  paddleplayer1.y = windowWidth / 2 - paddleplayer1.h,
  paddleplayer2.y = windowWidth / 2 - paddleplayer2.h
  // empty out the guesses already made and also the incorrect guesses
  guesses= []
  incorrectGuesses = []
  // choose the puzzle aagain
  choosePuzzle()
  print ("reset puzzle function executed")
  
}
function keyPressed(){
  // only allow guesses when the screen is on the guessing screen
if(screen == 0){
  
// let the letter you guess be equal to a key that you press
let guessedletter = key
  
print("you guessed " + guessedletter)

  
let hits = 0
for(let i = 0; i < puzzle.length; i++){
  // set puzzleletter
let puzzleLetter = puzzle[i]
//if the guess letter matches with puzzle letter, it's correct
if(guessedletter == puzzleLetter){
  // if the guess letter has already been guessed, or is incorrect, do not count it
if(!guesses.includes(guessedletter) && !incorrectGuesses.includes(guessedletter)){

// set the word in puzzle array from "puzzle" to: ["p",u","z","z","l","e"] to be able to be read by the filter detecting all of the letters. Basically, take the string / word "puzzle" and put each letter seperately into an array to be read. Then, check for if the letters guessed are correct. If it is, subract the correct amount of letters from the letters  remaining.  (i.e if 2 o's were guessed, subtract 2 from lettersleft)
lettersleft -= Array.from(puzzle).filter(letter => letter === guessedletter).length
}
  // put the correct letter into the guesses array
guesses[i] = guessedletter
hits++
print("letters left are " + lettersleft)

}
}

if(hits == 0){
  let player1wrongguesses = 0
  let player2wrongguesses = 0
incorrectGuesses.push(guessedletter)
playerturn *=-1
// if it's player 1's turn, decrease player 1's paddle size
if(playerturn == -1){
  if(screen ==0){
  player1wrongguesses++
    // exponentially decrease paddle size the more wrong guesses are made
paddleplayer1.h -= 2 * player2wrongguesses
}
}
// otherwise ,it's player 2's turn, so decrease their paddle size
else{
  if(screen == 0){
    player2wrongguesses++
    // exponentially decrease paddle size the more wrong guesses are  made
paddleplayer2.h -= 2 * player2wrongguesses
  }
}
}
}
}


function drawbackground(){
// If the screen is on the guessing screen, draw a rectangle that is orange as the background
if (screen == 0){
fill(`orange`)
square(0, 0, 2500)
// if the letters left are zero or under (the word has been guessed completely)
if (lettersleft <=0){ 
  //set the screen to the pong screen then allow ball movement
screen = 1;
ball.speedX = 3
ball.speedY =5;
  
lettersleft = "complete"

  
}
}
}
// function mainmenu(){
// //   img = loadImage('path/to/monkey.jpg');
  
// }

// function preload() {
// }
 function gameoverscreen(){
// if any players lives is 0 do game over screen
if(paddleplayer1.lives <= 0 || paddleplayer2.lives <= 0){
  // set screen to game over scren
  screen == 3
stroke(`gray`)
fill(`red`)
  // draw a giant circle as the background
circle(windowWidth / 2, windowHeight / 2, 10000)
  // if player 1's lives are greater than zero
  // that means player 2 was the one who lost all their lives, so  player 2 loses
if (paddleplayer1.lives > 0) {
textSize(32)
  fill(255)
  text("player 2 loses, game over", 50, 50)
}
  // if player 2's lives are greater than 0
  // that means player 1 was the one who lost all their lives,  so player 1 loses
  else if (paddleplayer2.lives  > 0) {
    textSize(32)
    fill(255)
    text ("player 1 loses, game over", 50, 50)
  }
}
}

  
 
function draw(){

clear()
// clear canvas
  // preload()
  // draw ball
drawGoals();
drawBall()
  // draw paddleplayer1
drawPaddle1()
  // draw paddleplayer2
drawPaddle2()
  // draw lives
  // drawguessingscreen
drawbackground()

// draw word
//draw lives remaining
  drawlives()
  // draw guessing turn and also how to play
  guessingtext()
// draw guesses
drawGuesses()
// draw incorrectGuesses
drawincorrectguesses()
 gameoverscreen()
// draw arena
 
// draw paddleplayer2
// ball begins to move with speed values
// if the ball touches the wall in bounces off in the opposite direction and gains a little speed

}



// set the constraint limit for paddles
// let screentop = 0
// let screenbottom = 821
// if <Y1key>(W) is pressed, paddle1 goes up vertically
// if <Y2key> (S) is pressed, paddle1 goes down vertically
// if <Y3key>(up_arrowkey) is pressed, paddle2 goes up vertically
// if <Y4key>(down_arrowkey) is pressed, paddle2 goes down vertically
// if the ball touches the paddle, it bounces off in the opposite direction
// #### if ball goes past the left paddle, the right paddle gains a point
// ballX >= (Score) paddleplayer2score++
// set ball position to middle and do direction coinflip again
// #### if ball goes past the right paddle, left paddle gains a point
// ballX<=(Score2) paddleplayer1score++
// set ball position to middle and do direction coinflip again
 
// function screen(){

// }

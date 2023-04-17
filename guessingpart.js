
// create canvas
function setup(){
createCanvas(windowWidth - 20 ,windowHeight - 20)

//choose word
choosePuzzle()
}  

paddleplayer1.y = windowHeight / 2;
paddleplayer2.y = windowHeight / 2
paddleplayer2.x = windowWidth - paddle.w - paddleplayer1.x;
//set goal value
function drawGoals() {
//color of line
fill ('red')
// draw the left goal  line
line(goal1.X1, goal1.Y1, goal1.X2, goal1.Y2);
//draw the right goal line
line( goal2.X1 , goal2.Y1,goal2.X2, goal2.Y2);
}

function drawincorrectguesses(){
 if (screen == 0){
textSize(30)
fill('black')
for(let i = 0; i < incorrectGuesses.length; i++){
let letter = incorrectGuesses[i]
text(letter,  guess.x + i * guess.spacing, guess.y + 200)
 }
text("incorrect guesses: " + incorrectGuesses.length, guess.x , guess.y+250)
}}

function drawGuesses(){
if (screen == 0){
textSize(20)
fill('black')
for(let i= 0; i < guesses.length;i++){
let guessletter = guesses[i]
text(guessletter,  guess.x + i * guess.spacing, guess.y)

  
}}
}

// ### draw loop
function drawBall(){
fill(ball.color)
circle(ball.x,ball.y,ball.r * 2)
if(screen == 1){
ball.speedX = 3
ball.speedY = 3
}

//ball begins to move with speed values
circle(ball.x + ball.speedX, ball.y +ball.speedY, ball.r * 2);

//ball moves based on speed
ball.x += ball.speedX
ball.y += ball.speedY

//left goal
//if ball goes past left goal, player1 loses a life, screen reset to word guessing.

//right goal
//if ball goes past right goal, player2 loses a life, screen reset to word guessing.

//if ball hits top or bottom of the screen, bounce in opposite direction
if (ball.y - ball.r >= windowHeight - ball.r){
ball.speedY *= -1
}
if (ball.y - ball.r<=0){
  ball.speedY *=-1
}
//if ball hit sides bounce back
if(ball.x - ball.r >= windowWidth - 20) {
ball.speedX *=1

}
if (ball.x - ball.r <=0) {
ball.speedX *=-1
  
}
}
function drawPaddle1(){
rect(paddleplayer1.x,paddleplayer1.y,paddle.w,paddleplayer1.h)

}

function drawPaddle2(){
rect(paddleplayer2.x,paddleplayer2.y,paddle.w,paddleplayer2.h)

}
function choosePuzzle(){
puzzle = random(puzzleOptions)
print("puzzle is " + puzzle)
for(let i = 0; i < puzzle.length; i++){
lettersleft++
let puzzleLetter = puzzle[i]

if( puzzleLetter == " "){
guesses.push(" ")
}
else{
guesses.push("_")
}
}
}
function keyPressed(){
let guessedletter = key
print("you guessed " + guessedletter)
let hits = 0
for(let i = 0; i < puzzle.length; i++){
let puzzleLetter = puzzle[i]
if(guessedletter == puzzleLetter){
guesses[i] = guessedletter
hits++
lettersleft--

print("hits are " + hits)
print("letters left are " + lettersleft)
}
}
 
if(hits == 0){
incorrectGuesses.push(guessedletter)
playerturn *=-1
// if it's player 1's turn, decrease player 1's paddle size
if(playerturn == -1){
paddleplayer1.h -= 1
}
// otherwise ,it's player 2's turn, so decrease their paddle size
else{
paddleplayer2.h -= 1
}
}
}


function drawbackground(){
// If the screen is on the guessing screen, draw a rectangle
if (screen == 0){
fill(`orange`)
square(0, 0, 2500)
if (lettersleft <=0){
screen = 1;
}
}
}

 
function draw(){

// clear canvas
clear()
drawGoals()
drawBall()
drawPaddle1()
drawPaddle2()
drawbackground()

// draw word
// drawguessingscreen
// draw guesses
drawGuesses( )
// draw incorrectGuesses
drawincorrectguesses()
// draw ball
// draw arena
// draw paddleplayer1
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




// create canvas
function setup(){

createCanvas(windowWidth,windowHeight)
  //choose word
  let puzzle = random(WordBank)
  print("puzzle is " + puzzle)
}
function drawgoal () {
  //color of line

  fill ('red')

  line(Goal1X, Goal1Y, Goal1X2, Goal1Y2);
  line( Goal2X , Goal2Y, Goal2X2, Goal2Y2);

}
// ### draw loop
function drawball(){
  fill(ball.color)
 circle(ball.x,ball.y,ball.r * 2)

  //ball moves based on speed
  ball.x += ballspeed.x
  
}

function drawArena() {
fill ('black')
  rect(0, 0, windowowWidth - 5, windowHeight - 5)
}

// set the constraint limit for paddles
let screentop = 0
let screenbottom = 821
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
 
function screen(){

}
// guesses for the letters
function guesses(){
textSize(30)
fill(`black`)
for(let i = 0; i < wordBank.length; i++){
let guessedletter = wordBank[i] 
  }
text(guess.x + guess.spacing * i, guess.y)

  
}
function draw(){
// clear canvas
  clear()

// draw word
// drawguessingscreen
// draw guesses
// draw incorrectGuesses
// draw ball
 drawball()
// draw arena
// draw paddleplayer1
// draw paddleplayer2
// ball begins to move with speed values
// if the ball touches the wall in bounces off in the opposite direction and gains a little speed
}
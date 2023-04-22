
# premise of the game
### Game is played with 2 players. Left and Right side. At the beginning of the game, both players get a word(same  word) and are prompted to press a button to start guessing the word. The goal is to guess the fastest. Players will take turns guessing where 1 player starts guessing ( randomly selected) . The more incorrect guesses are made, the shorter the paddle is upon starting.  After a player guesses incorrectly, the other player takes a turn guessing( the same word). This goes on until one player finishes guessing. Afterwards, you use the paddle to try to attack the opposing player’s heart(lives) by bouncing a ball back and forth, if the ball gets past the opposing player's pong and hits the heart, players will go back into guessing. Paddles will remain the same size and will get even smaller the more wrong guesses there are. Players will move with arrow keys and “W” and “S” keys.



## Entities

### Ball
Position
size
speed
color
shape
movement

## paddleplayer1
position
size
color
speed
shape
movement




### paddleplayer2
size 
colour
postions
speed

### arena
size
shape
color
arena image


## Pseudocode
### Variables
Set array for possible words to guess
make an array to contain all the guesses made
set positions for text
set speed for ball and paddle movement
set color for paddle
set color for ball
set size for ball
set size for paddle
set size for arena
set starting position for ball
set starting position for paddle1
set starting position for paddle2

#### setup
generate word
create canvas

### draw loop
clear()
clear canvas
draw canvas
draw word
drawguessingscreen
draw guesses
draw incorrectGuesses
draw ball
draw paddleplayer1
draw paddleplayer2
ball begins to move with speed values
if the ball touches the wall in bounces off in the opposite direction and gains a little speed

if <Y1key>(W) is pressed, paddle1 goes up vertically
if <Y2key> (S) is pressed, paddle1 goes down vertically
if <Y3key>(up_arrowkey) is pressed, paddle2 goes up vertically
if <Y4key>(down_arrowkey) is pressed, paddle2 goes down vertically
if the ball touches the paddle, it bounces off in the opposite direction
#### if ball goes past the left paddle, the right paddle gains a point
ballX >= (Score) paddleplayer2score++
set ball position to middle and do direction coinflip again
#### if ball goes past the right paddle, left paddle gains a point
ballX<=(Score2) paddleplayer1score++
set ball position to middle and do direction coinflip again



let img;

function preload() {
  img = loadImage('path/to/image.jpg');
}

function setup() {
  createCanvas(400, 
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}

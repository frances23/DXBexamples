// Variables to record position of character.
let x;
let y;

function setup(){
  createCanvas(400, 400);
  fill(0, 0, 255);

  // Start the character off in the middle of the canvas
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(220);

  // Check whether the key is pressed and move character
  // if w, a, s, or d
  if(keyIsPressed){
    if (key == 'w'){
      // Move up
      y -= 10;
    } else if (key == 'a'){
      // Move left
      x -= 10;
    } else if (key == 's'){
      // Move down
      y += 10;
    } else if (key == 'd'){
      // Move right
      x += 10;
    }
  }  

  // Draw the character at the current x, y position
  circle(x, y, 20);
}
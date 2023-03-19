let DarkGreen; 
let LightGreen; 
let DarkPink; 
let LightPink

// Draw a 'robot face' using basic P5js shape functions
function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  background(65, 148, 220);

  // Setting color names
  DarkGreen = color(41,143,23[56]);
  LightGreen = color(81,219,57,[86]);
  DarkPink = color(143,9,105[56]);
  LightPink = color(219,57,173,[86]);
}

function draw() {

  // Draw the background of the face
  fill(LightGreen);
  square(80, 100, 220);

  // Draw the eye
  fill(LightPink);
  ellipse(190, 100, 180, 80);
  circle(160, 100, 20);
  point(160, 100);
  line(100, 70, 140, 50);
  
  // Draw the mouth
  fill(DarkPink);
  rect(140, 230, 180, 60);

  // Draw the nose
  fill(DarkGreen);
  triangle(170, 200, 230, 200, 200, 160);
}

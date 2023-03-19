// Demonstrtes keyboard variables
function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(86);
  noStroke();

  // See tutorial 5 for more info on text functions
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw(){
  // If a key is pressed, make background darker
  if (keyIsPressed){
    background(80);
  } else {
    background(86);
  }
  
  // Use the keyCode to set the hue
  fill(keyCode, 50, 100);
  circle(100, 200, 100);
  circle(300, 200, 100);

  // Draw the 'key' and 'keyCode' variables to the canvas
  // Set the fill so it contrasts with the circle
  fill(360 - keyCode, 100, 50);
  text(key, 100, 200);
  text(keyCode, 300, 200);
}
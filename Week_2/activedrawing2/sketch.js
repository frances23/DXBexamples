// World's simplest drawing program (part 1)
let diameter = 5;
let pinkSpray;
let greenSpray;

function setup() {
  createCanvas(400, 400);
  background(100,191,250);
  noStroke();
  pinkSpray = color(219,79,152,[95]);
  greenSpray = color(98,242,58,[95]);
}

function draw() {
  if (mouseIsPressed) {
    fill(pinkSpray)
  } else {
    fill(greenSpray)
  }
    square(mouseX, mouseY, diameter);
    circle(mouseX + random(30), mouseY + random(30), diameter);
    square(mouseX + random(30), mouseY + random(30), diameter);
    circle(mouseX - random(30), mouseY - random(30), diameter);
    square(mouseX - random(30), mouseY - random(30), diameter);
}
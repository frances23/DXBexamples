// World's simplest drawing program (part 1)
let diameter = 5;
let SprayColor;

function setup() {
  createCanvas(400, 400);
  background(100,191,250);
  noStroke();
  SprayColor = color(219,79,152,[95]);
}

function draw() {
  if (mouseIsPressed) {
    fill(SprayColor)
    circle(mouseX, mouseY, diameter);
    circle(mouseX + random(10), mouseY + random(10), diameter);
    circle(mouseX + random(10), mouseY + random(10), diameter);
    circle(mouseX - random(10), mouseY - random(10), diameter);
    circle(mouseX - random(10), mouseY - random(10), diameter);
  }
}
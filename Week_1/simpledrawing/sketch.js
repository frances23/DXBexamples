// World's simplest drawing program (part 1)
let diameter = 10;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  if (mouseIsPressed) {
    circle(mouseX, mouseY, diameter);
  }

}
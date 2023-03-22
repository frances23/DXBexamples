// load and display an image
let rainbow;
let roses;

function preload(){
  // load the image into the variable
  rainbow = loadImage("data/rainbow.jpg");
  roses = loadImage("data/roses.png");
}

function setup() {
  createCanvas(740, 400);
}

function draw() {
  image(rainbow, 0, 0, width, height);
  tint(255, 127);
  image(roses, 0, -25, width, 450);
}
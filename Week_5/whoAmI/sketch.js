let img;
let name = "FitzChivalry Farseer"
let age = "20"
let hobbies = "Adventures, Skilling"
let friends = "Nighteyes, Molly, Burrich, The Fool"

function preload(){
  // Change the name of the image file to choose
  // a different colour
  img = loadImage('data/name-sticker-r.png');
}

function setup(){
  createCanvas(img.width, img.height);
}

function draw(){
  background(img);
  textSize(20)
  textFont("monospace",20)
  fill(102, 102, 255)
  text(name, 120, 180)
  text (age, 100, 230)
  text (hobbies, 155, 280)
  text (friends, 150, 330)

  // The code below is helps to figure out x, y coordinates
  // Click on the canvas and it will display the position
  // You can delete this when you are done.
  if (mouseIsPressed){
    text(mouseX + ", " + mouseY, mouseX, mouseY);
  }

  // Add you code to display details on canvas here...
  
}
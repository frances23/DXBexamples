function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
}

function draw() {
  background(220);

  // Draw head
  ellipse(200,200,300,200)

  //Drawing antenna 
  line(60,50,110,120);
  line(60,60,350,350);

  console.log(mouseX);
  console.log(mouseY);

}

function setup(){
  createCanvas(400, 400);
  background(220);
}

function draw(){
  // Randomly choose an x, y position
  let x = random(width);
  let y = random(height);

  // Toss a 'coin' and use the outcome to decide what to do
  let coin = random(100);

  if (coin < 50){
    // If less than 50, draw a black circle
    stroke(255);
    fill(0, 127);
    circle(x, y, 10);
  } else {
    // Otherwise, draw a white square
    stroke(0);
    fill(255, 127);
    square(x, y, 10);
  }
}

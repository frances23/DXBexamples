// Define the min/max ranges for randomness
let minR = 20;
let maxR = 10;


// The for loop in this code draws a series of vertical lines
function setup(){
  createCanvas(500, 500);
  background(220);

  let startingValue = 10;
  let spacing = 20;

  for(let y = startingValue; y < height; y += spacing){
    for(let x = startingValue; x < width; x += spacing){
      let randomD = random(minR, maxR);
      circle(x, y, randomD);
    }
  }
}
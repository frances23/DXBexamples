// The two loops in this example draw a grid of circles
function setup(){
  createCanvas(280, 200);
  background(255,204,255);
  // Sets the square to draw from the center rather than top right corner
  rectMode(CENTER)
  // Sets all objects to draw in this color for the rest of the code
  fill(204,255,255)

  // Calculate the spacing so that seven square fit in a row
  let spacing = width / 7;

  // The left and right margin will be half the spacing. 
  let margin = spacing / 2;

  // Also calculate the diameter based on the spacing
  let d = spacing / 2;

  // Loop five times with i = 0...4
  for (let i = 0; i < 5; i = i + 1){
    // Calculate the y position based on the value of i.
    let y = margin + spacing * i;    

    // Loop seven times with i = 0...6
    for (let j = 0; j < 7; j = j + 1){
      // Calculate the x position based on the value of j.
      let x = margin + spacing * j;
      console.log("  Draw circle at x, y:", x, y);
      square(x, y, d);
    }
  }
}
function setup(){
  createCanvas(740, 100);

  // Draw a series of vertical lines across the canvas
  
  // Inital value of i is 20 
  for (let i = 20; i <= 740; i = i + 20){
    // The value of 'i' changes each time through the loop
    line(i, 20, i, height - 20);
  }
}
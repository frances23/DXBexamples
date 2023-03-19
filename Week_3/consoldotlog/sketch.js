// The for loop in this code draws a series of vertical lines
function setup(){
  createCanvas(740, 200);
  background(220);

  // Log that we are about to start the loop
  console.log('loop starting');

  // Loop across the canvas and draw a series of lines
  for (let i = 20; i <= 100; i = i + 20){

    // Log all the arguments to the 'line()' function
    // so we can understand what is happening inside it.
    // Note that the text messages are just for readability.
    console.log('  i:', i, '--> line:', i, 20, i, height - 20);

    line(i, 20, i, height - 20);
  }
  // Log that we have ended the loop
  console.log('loop ended');
}
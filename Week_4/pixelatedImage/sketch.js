let img;

function preload(){
  img = loadImage('roses.png');
}

function setup(){
  createCanvas(img.width, img.height);
}

function draw(){
  background(0)

  if (mouseIsPressed){
    image(img, 0, 0);
  } else {
    for (let i = 0; i < img.width; i += 20){
      for (let j = 0; j < img.height; j += 20){
      // Add code to sample pixels and draw based on that.
      // Select a random position on the source img to sample
        let sampX = random(i - 50, i + 50);
        let sampY = random(j - 50, j + 50);
      
        // Constrain the sample point so it is inside the image
        sampX = constrain(sampX, 0, width - 20);
        sampY = constrain(sampY, 0, height - 20);
      
              // Copy out a piece of the original image
        let piece = img.get(sampX, sampY, 20, 20);
      
              // 'Paste' the piece to the canvas at i, j
        image(piece, i, j);
      }
    }
    noLoop();
  }
}
      
function mousePressed(){
        loop();
    }
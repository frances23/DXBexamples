let message = 'Mario says"Hello Everyone"'
function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  background(220);
  line(width /2 , 0, height / 2, 0)
  line(0, width / 2, 0, height / 2)
  text(message, width / 2, height / 2)
}


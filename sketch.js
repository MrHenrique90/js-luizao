function setup() {
  createCanvas(500, 400);
}

function draw() {
  stroke("blue")
  fill ("red")
  background("Black");
  
  // console.log (mouseIsPressed);
  
  if (mouseIsPressed) {
  rect(mouseX,mouseY,50,50);
  }
}

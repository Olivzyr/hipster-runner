function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('setup');

}

function draw() {
  background(200);
  circle(mouseX, mouseY, 200)
  console.log('draw');
}
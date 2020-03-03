let slider1; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // returns value 0-255
  slider1 = createSlider(0, 255);
}

function draw() {
  // changes background color
  // slider controls green value
  background(0, slider1.value(), 0);
}
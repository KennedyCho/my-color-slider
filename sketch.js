let slider1; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // greyscale slider
  slider1 = createSlider(0, 255);
}

function draw() {
  // changes background color
  background(slider1.value());
}
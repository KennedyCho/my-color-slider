let slider1; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  // returns value 0-255
  slider1 = createSlider(0, 255);
}

function draw() {
  // changes background color
  // greyscale - changes each RGB value equally 
  background(slider1.value(), slider1.value(), slider1.value());
}
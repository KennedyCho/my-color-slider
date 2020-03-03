let slider1; 

function setup() {
  colorMode(RGB);
  createCanvas(windowWidth, windowHeight); 
  // returns value 0-255
  rSlider = createSlider(0, 255);
  gSlider = createSlider(0, 255);
  bSlider = createSlider(0, 255);
}

function draw() {
  // changes background color
  // individual slider for each input value 
  background(rSlider.value(), gSlider.value(), bSlider.value());

  // red (255, 0, 0)
  // green(0, 255, 0)
  // yellow(255, 255, 0)
  // brown(125, 125, 100)
}
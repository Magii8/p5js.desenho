function setup() {
    createCanvas(300, 300);
    background("pink");
  }
  
  function draw() {
  
    stroke("red");
    fill("yellow");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
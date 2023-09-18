function setup() {
    createCanvas(800, 500);
   background("#9CBECE");
  }
  
  function draw() {
   
  
  stroke ("#D5CEE2");
  fill("#1A5E94");
  
  //console.log (mouseIsPressed);
  
  if (mouseIsPressed) {
  rect (mouseX,mouseY, 12, 20);
  }
  
  
  
  }
var btn

function setup() {
  createCanvas(windowWidth, windowHeight);
background(random(0,255),random(0,255),random(0,255));
  btn = createButton('Descargar')
  btn.position(0,0)
  btn.mousePressed(impresora);
  
}

function draw() {

fill(random(0,255),random(0,255),random(0,255));
  triangle(mouseX,mouseY, mouseX+20,mouseY+20, mouseX-20, mouseY+20);
  
}

function impresora() {
  saveCanvas("imagen","jpg");
  
}
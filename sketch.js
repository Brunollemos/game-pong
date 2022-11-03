function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
}

//varáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();

  /*moveRaqueteMultiplayer();
  Função alternativa para jogar com outra pessoa*/

  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
}

//varáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

let colidiu = false;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha < raio) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha < raio) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteLargura, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(87) && yRaquete >= 10) {
    yRaquete -= 10;
  }
  if (keyIsDown(83) && yRaquete <= height - (raqueteAltura + 10)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function moveRaqueteMultiplayer() {
  if (keyIsDown(UP_ARROW) && yRaqueteOponente >= 10) {
    yRaqueteOponente -= 10;
  }
  if (
    keyIsDown(DOWN_ARROW) &&
    yRaqueteOponente <= height - (raqueteAltura + 10)
  ) {
    yRaqueteOponente += 10;
  }
}

function colisaoRaqueteBiblioteca(x, y) {
  colidiu = collideRectCircle(
    x,
    y,
    raqueteLargura,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

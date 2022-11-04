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
  incluiPlacar();
  marcaPonto();
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

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

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

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  text(pontosDoOponente, 470, 26);
  fill(255);
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

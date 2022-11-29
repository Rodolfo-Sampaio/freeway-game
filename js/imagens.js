// img e sound do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sound do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  imagemCarro = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sound/trilha.wav");
  somDaColisao = loadSound("sound/colidiu.mp3");
  somDoPonto = loadSound("sound/pontos.wav");
}
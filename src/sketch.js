let scenarioImage;
let characterImage;
let scenario;
let character;
let gameSound;

// Carregar a imagem para desenhar
function preload() {
  scenarioImage = loadImage('../assets/imagens/cenario/floresta.png');
  characterImage = loadImage('../assets/imagens/personagem/correndo.png');
  gameSound = loadSound('../assets/sons/trilha_jogo.mp3');
}

function setup() {
  // Cria área a ser desenhada
  createCanvas(windowWidth, windowHeight);
  
  // Criando um cenário
  scenario = new Scenario(scenarioImage, 3)
  
  // Inicia o som do jogo repetindo varias vezes -> loop(): executa varias vezes | play() -> executa só uma vez
  gameSound.loop();
  
  // taxa de atualização do cenário
  frameRate(10);

  character = new Character(characterImage);
  
}

function draw() {
  // Exibe cenário
  scenario.display();
  
  // Move cenário
  scenario.move();
  
  // Cria o personagem
  character.display();
 
}


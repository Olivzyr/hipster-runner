let scenarioImage;
let characterImage;
let enemyImage;

let scenario;
let character;
let enemy;
let gameSound;

// Matriz para identificar o posicionamento dos sprites na imagem do inimigo
const enemyMatriz = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 416],
  [105, 416],
  [210, 416],
  [315, 416],
  [0, 520],
  [105, 520],
  [210, 520],
  [315, 520],
  [0, 624],
  [105, 624],
  [210, 624],
  [315, 624],
]

// Carregar a imagem para desenhar
function preload() {
  scenarioImage = loadImage('../assets/imagens/cenario/floresta.png');
  characterImage = loadImage('../assets/imagens/personagem/correndo.png');
  enemyImage = loadImage('../assets/imagens/inimigos/gotinha.png');
  gameSound = loadSound('../assets/sons/trilha_jogo.mp3');
}

function setup() {
  // Cria área a ser desenhada
  createCanvas(windowWidth, windowHeight);
  
  // Criando um cenário
  scenario = new Scenario(scenarioImage, 3)
  
  // Inicia o som do jogo repetindo varias vezes -> loop(): executa varias vezes | play() -> executa só uma vez
  // gameSound.loop();
  
  // taxa de atualização do cenário
  frameRate(40);

  // Criando um novo personagem
  character = new Character(characterImage);

  // Criando um novo inimigo
  enemy = new Enemy(enemyMatriz, enemyImage, width - 100, 52, 52, 104, 104);
  
}

function draw() {
  // Exibe cenário
  scenario.display();
  
  // Move cenário
  scenario.move();
  
  // Exibe o personagem na tela
  character.display();

  // Exibe o inimigo na tela
  enemy.display();
  enemy.move();

 
}


let scenarioImage;
let characterImage;
let enemyImage;

let scenario;
let character;
let enemy;
let gameSound;
let jumpSound;

// Matriz para identificar o posicionamento dos sprites na imagem do personagem
const characterMatriz = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

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

// Carregar previamente a imagem para desenhar
function preload() {
  scenarioImage = loadImage('../assets/imagens/cenario/floresta.png');
  characterImage = loadImage('../assets/imagens/personagem/correndo.png');
  enemyImage = loadImage('../assets/imagens/inimigos/gotinha.png');
  gameSound = loadSound('../assets/sons/trilha_jogo.mp3');
  jumpSound = loadSound('../assets/sons/somPulo.mp3');
}

// Define o ambiente do jogo
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
  character = new Character(characterMatriz, characterImage, 0, 110, 135, 220, 270 );

  // Criando um novo inimigo
  enemy = new Enemy(enemyMatriz, enemyImage, width - 100, 52, 52, 104, 104);
  
}

// Observable que fica escutando as funções do mouse e teclado
function keyPressed() {

  // Key -> palavra reservada da biblioteca para identificar alguma tecla ativada que neste caso abaixo é seta para cima
  if(key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }

}


// Desenha os elementos no jogo
function draw() {
  // Exibe cenário
  scenario.display();
  
  // Move cenário
  scenario.move();
  
  // Exibe o personagem na tela
  character.display();
  character.characterGravity();

  // Exibe o inimigo na tela
  enemy.display();
  enemy.move();

  // Determinar quando o personagem colidir com o inimigo
  if(character.characterCollision(enemy)) {
    console.log('Colidiu');
    // Parar ao detectar a primeira colisão
    noLoop();
  }
}


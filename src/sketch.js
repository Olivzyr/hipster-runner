let scenarioImage;
let characterImage;
let enemyImage;
let flayingEnemyImage;
let bigEnemyImage;

let scenario;

let character;
let enemy;
let flayingEnemy;
let bigEnemy;

let gameSound;
let jumpSound;

let score;
// Array de inimigos
const enemies = [];

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
];

const flayingEnemyMatriz = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

// Matriz para identificar o posicionamento dos sprites na imagem do inimigo grande (Troll)
const bigEnemyMatriz = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

// Carregar previamente a imagem para desenhar
function preload() {
  scenarioImage = loadImage('../assets/imagens/cenario/floresta.png');
  characterImage = loadImage('../assets/imagens/personagem/correndo.png');
  enemyImage = loadImage('../assets/imagens/inimigos/gotinha.png');
  flayingEnemyImage = loadImage('../assets/imagens/inimigos/gotinha-voadora.png');
  bigEnemyImage = loadImage('../assets/imagens/inimigos/troll.png');
  gameSound = loadSound('../assets/sons/trilha_jogo.mp3');
  jumpSound = loadSound('../assets/sons/somPulo.mp3');
}

// Define o ambiente do jogo
function setup() {
  // Cria área a ser desenhada
  createCanvas(windowWidth, windowHeight);
  
  // Criando um cenário
  scenario = new Scenario(scenarioImage, 3)

  score = new Score();
  
  // Inicia o som do jogo repetindo varias vezes -> loop(): executa varias vezes | play() -> executa só uma vez
  // gameSound.loop();
  
  // taxa de atualização do cenário
  frameRate(40);

  // Criando um novo personagem
  character = new Character(characterMatriz, characterImage, 0, 30, 110, 135, 220, 270 );

  // Criando um novo inimigo
  const enemy = new Enemy(enemyMatriz, enemyImage, width - 100, 30, 52, 52, 104, 104, 10, 1000);

  const bigEnemy = new Enemy(bigEnemyMatriz, bigEnemyImage, width, 0, 200, 200, 400, 400, 10, 1500);

  const flayingEnemy = new Enemy(flayingEnemyMatriz, flayingEnemyImage,  width - 100, 200, 100, 75, 200, 150, 10, 500); 

  // Inserindo inimigos ao array de inimigos
  enemies.push(enemy);
  enemies.push(bigEnemy);
  enemies.push(flayingEnemy);
  
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

  // Exibe a pontuação do jogo
  score.display();
  
  // Exibe o personagem na tela
  character.display();
  character.characterGravity();

  // Exibe e movimenta todos os inimigo na tela presente no array 'enemies'
  enemies.forEach(enemy => {
    enemy.display();
    enemy.move();
    
    // Determinar quando o personagem colidir com o inimigo
    if(character.characterCollision(enemy)) {
      console.log('Colidiu');
      // Parar ao detectar a primeira colisão
      // noLoop();
    }

  });

}


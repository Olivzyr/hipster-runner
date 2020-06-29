class Character extends Animation {
  constructor(matriz, image, x, characterWidth, characterHeight, spriteWidth, spriteHeight) {
    super(matriz, image, x, characterWidth, characterHeight, spriteWidth, spriteHeight);

    this.yInitial = height - this.characterHeight;
    this.y = this.yInitial; 

    this.jumpSpeed = 0;
    this.gravity = 3;
  }

  jump() {
    this.jumpSpeed = -30;
  }

  characterGravity() {
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    // Validação para verificar se o y está na posição inicial que a gente procura
    if(this.y > this.yInitial) {
      this.y = this.yInitial
    }
  }

  // FUnção para aplicar a colisão entre o personagem com o inimigo
  // Informações de entrada: eixo x e y do personagem e a largura e altura da personagem
  characterCollision(enemy) {
    
    // Mostra a área demarcada pelo personagem
    // Podemos utilizar o rect como um debug para o sistema de colisão
    // noFill é utilizado para mostrar o conteúdo da imagem demarcada
    noFill();
    rect(this.x, this.y, this.characterWidth, this.characterHeight);
    rect(enemy.x, enemy.y, enemy.characterWidth, enemy.characterHeight);
    const collidePrecision = .7;
    const collision = collideRectRect(
      this.x, 
      this.y,
      this.characterWidth * collidePrecision,
      this.characterHeight * collidePrecision,
      enemy.x,
      enemy.y,
      enemy.characterWidth * collidePrecision,
      enemy.characterHeight * collidePrecision
    );

    return collision;
  }

}
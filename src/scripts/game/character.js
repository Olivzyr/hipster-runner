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

}
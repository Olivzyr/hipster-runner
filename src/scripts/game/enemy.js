class Enemy extends Animation {
  constructor(matriz, image, x, characterWidth, characterHeight, spriteWidth, spriteHeight){
    // Invocando as variáveis da classe animation com o método super
    super(matriz, image, x, characterWidth, characterHeight, spriteWidth, spriteHeight);
    this.speed = 10;

  }

  move() {
    this.x = this.x - this.speed

    if(this.x < -this.characterWidth) {
      this.x = width;
    }
  }
}
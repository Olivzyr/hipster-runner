class Enemy extends Animation {
  constructor(matriz, image, x, characterHeightVariation, characterWidth, characterHeight, spriteWidth, spriteHeight, speed, delay){
    // Invocando as variáveis da classe animation com o método super
    super(matriz, image, x, characterHeightVariation, characterWidth, characterHeight, spriteWidth, spriteHeight);
    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;

  }

  move() {
    this.x = this.x - this.speed

    if(this.x < -this.characterWidth - this.delay) {
      this.x = width;
    }
  }
}
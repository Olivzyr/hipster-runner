// Instanciando o objeto scenario
class Scenario {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  // método para mostrar o cenário
  display() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2 + 1, 0, width, height);
  }

  // Método para movimentar o background para dar a sensação de movimentação do personagem
  move() {
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;

    if (this.x1 < -width) {
      this.x1 = width;
    }
    else if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}
class Character {
  constructor(image) {
    this.image = image;
    this.matriz = [
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
    this.currentFrame = 0;
  }

  display() {
    // Dois primeiro parametros se refere a posição da imagem (eixo x e y)
    // Terceiro e quarto parametros se refere ao tamanho e altura da imagem
    // Quinto e sexto parametro se refere posição para mapeamento da imagem (eixo x e y)
    // Sétimo e oitavo parametro se refere a dimensão da imagem que será posicionada

    // height -> altura definida pela biblioteca p5
    // 135 -> altura da imagem do personagem

    // Primeiro parametro da matriz se refere a qual elemento e o segundo se refere a qual valor (x ou y)
      // Neste exemplo temos que a imagem está coletando a matriz 4 da posição 0 e 1

    // Desenha a personagem
    image(this.image, 0, height - 135, 110, 135, this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], 220, 270);

    this.animation()
  }

  animation() {
    this.currentFrame++

    if(this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0;
    }
  }
}
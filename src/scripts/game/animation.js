
class Animation {
  constructor(matriz, image, x, characterWidth, characterHeight, spriteWidth, spriteHeight){
    this.matriz = matriz;
    this.image = image;
    this.characterWidth = characterWidth;
    this.characterHeight = characterHeight;
    this.x = x;
    this.y = height - this.characterHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

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
    image(
      this.image, 
      this.x, 
      this.y, 
      this.characterWidth, 
      this.characterHeight, 
      this.matriz[this.currentFrame][0], 
      this.matriz[this.currentFrame][1], 
      this.spriteWidth,
      this.spriteHeight
      );

    this.animation()
  }

  // Realiza a animação se baseando no frame atual
  animation() {
    this.currentFrame++

    if(this.currentFrame >= this.matriz.length - 1) {
      this.currentFrame = 0;
    }
  }
}
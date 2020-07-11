
class Score {
  constructor () {
    this.points = 0;
  }

  display() {
    textSize(50);
    // Posição do texto que será exibido na tela, 
    // Argumentos -> (conteudo_do_texto, posição_X, posição_Y, )
    text(this.points, width - 50, 50);
  }
}

$(document).ready(function () {
  $('button').click(function () {
    $('li').each(function () { //function é parâmetro de each.
      //each é um loop, e para cada elemento encontrado tem uma função
      //específica (recebe uma função como parâmetro). p. 324.
      //
      var ids = this.id;
      //obtém o id de cada item percorrido e adiciona à variável
      $(this).append(' <span class="order"> ' + ids + '</span>');
      //$(this) cria um objeto jQuery do elemento selecionado para usar o
      //método append.
      //$(this) na verdade cria uma nova seleção jQuery com o elemento
      //atual do loop e permite trabalhar com o método append.
    });
  });
});
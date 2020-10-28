$(function () {


});

$(document).ready(function () {
  $('button').click(function () {
    // Obtém o background color do primero item da lista.
    var backgroundColor = $('li').css('background-color');

    // Escreva qual era a cor do plano de fundo após a lista.
    $('ul').append('<p>Cor da lista antes da mudança: ' + backgroundColor + '</p>');

    // Defina várias propriedades em todos os itens da lista.
    $('li').css({
      'background-color': '#c5a996',
      'border': '1px solid #fff',
      'color': '#000',
      'text-shadow': 'none',
      'font-family': 'Georgia',
      'padding-left': '+=75'
    });
  });
});
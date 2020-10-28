$(function () {

  $('h2').hide().slideDown();
  //efeito slide no título...
  var $li = $('li');
  //encontra todas as li's
  $li.hide().each(function (index) {
    //1º oculta para depois exibí-los.
    $(this).delay(700 * index).fadeIn(700);
    //exibe mas dá um delay antes...
  });

  $li.on('click', function () {
    $(this).fadeOut(700);
  });

});
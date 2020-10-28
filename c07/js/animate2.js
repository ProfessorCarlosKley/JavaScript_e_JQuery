$(function () {
  $('li').on('click', function () {
    $(this).animate({
      //para cada li, cria uma animação...
      opacity: 0.5, //a animação altera a opacidade.
      paddingTop: '+=60',
      fontSize: '80px',
      //backgroundColor: jQuery.Color({ saturation: 5 })
      backgroundColor: jQuery.Color.hook("fill stroke")
      //no plugin js/jQueryColorAnimation.js"

    }, 5000, function () { //500 é o speed da animação. 
      //e function uma função para quando a a animação completar. p. 334.
      $(this).remove();
    });
  });
});

/**
 * As animações trabalham com as propiredades css que no jQuery funcionam
 * com caseSensitive, border-top-left-raiduis é expressõ em jQuery como
 * borderTopLeftRadius.
 * Tem uma lista de propriedades na página 334.
*/
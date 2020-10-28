$(function () {
  var $h2 = $('h2');
  $('ul').hide();//oculta os elementos ul.
  $h2.append('<a class="show">Exibir Elementos</a>');
  //append adiciona o conteúdo antes da tag de fechamento. p. 318

  $h2.on('click', function () {
    $h2.next('ul')//imrão posterior de h2, seletor 'ul' opcional.
      //o próximo irmão após elemento <h2> é <ul>.
      .fadeIn(500)//exibe gradulamente o elemento selecionado.
      .children('.hot')
      //qualquer elemento li (filho) que tenha tenha class .hot
      .addClass('complete'); //são alterados para complete.
    //perceba no exemplo que os elementos da lista que tinham
    //classe rot aogra tem class compelte e recebe outras
    //configrações no elemento css.
    $h2.find('a').fadeOut();
    //find localiza o elemento <a> que é filho de <h2>
    //fadeOut altera gradualmente a opacidade do link
    //até que ele suma definitivamente.
  });

});
$(function () {
  var ids = '';
  var $listItems = $('li');

  $listItems.on('mouseover click', function () {
    //cria dois eventos mouseover e click
    ids = this.id;
    $listItems.children('span').remove();
    //Seleciona todos os filhos de <li>.
    //remove elementos span de todos os itens da lista.
    $(this).append(' <span class="priority">' + ids + '</span>');
    //$(this) cria um objeto jQuery do elemento selecionado para usar o
    //método append. p. 325.
  });

  $listItems.on('mouseout', function () {
    $(this).children('span').remove();
    //remove todos os elementos <span> dos filhos dessa lista.
    //children pq os spans dentro de li são fihos de <li>
  });

});
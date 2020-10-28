$(document).ready(function () {
  $('button').click(function () {
    $('li:contains("pine")').text('almonds');
    //Seleciona todos os itens da lista que tem contém palavra pine
    //Em seguida, modifica o texto do elemento para 'almonds'.
    $('li.hot').html(function () {
      //seleciona todos os itens da lista cuja class seja hot e depois
      //atualiza o conteúdo de cada um com o método html.
      return '<em>' + $(this).text() + '</em>';
      //return retorna para cada li o próprio texto, this, e agora com
      //a marcação <em>.
    });
    $('li#one').remove();
  });
});
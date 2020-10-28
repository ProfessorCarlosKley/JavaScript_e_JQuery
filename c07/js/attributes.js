
$(document).ready(function () {
  $('button').click(function () {
    $('li#three').removeClass('hot');
    //localiza o terceiro item da lista id=three. e remove a class hot.
    //com isso ela perde as definições da classe, perceba que fica
    //diferente do primeiro e segundo elementos.

    $('li.hot').addClass('favorite');
    //Seleciona todos os elementos li com atributo de class = hot.
    //Em seguida, altera o nome do atributo de hot para favorite.
    //A class favorite adiciona as duas imagens à direita dos dois 
    //prmimeiros itens da lista.
    $('ul').attr('id', 'group');
    //Seleciona o elemento <ul> e adiciona um atributo id com valor group.
    //#group no cess configura a borda branca em torno de ul. 
  });
});
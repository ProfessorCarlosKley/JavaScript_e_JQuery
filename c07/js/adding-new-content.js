$(function () {
  $('button').click(function () {
    $('ul').before('<p class="notice">Parágrafo antes da lita. Add com before.</p>');
    //o seletor ul é selecinado e before é usado para inerir um novo 
    //parágrafo antes da lista.
    $('li.hot').prepend('+ ');
    //Seleciona itens da lista que tem classe hot e nesses
    //adiciona o char + antes do texto da lista com prepend.
    //prepend colcoa o elmento depois do fechamento da primeira tag.
    //<li>+
    var $newListItem = $('<li><em>Novo item add com after</em> Carlos Klei</li>');
    $('li:last').after($newListItem);
    //localiza último item da lista e insere elemento depois after.
  });
});
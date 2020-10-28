$(document).ready(function () {
  $('button').click(function () {
    var $listHTML = $('ul').html();
    //html() retorna apenas html do primeiro elemento do conjunto 
    //correspondido junto com seus descendentes. p. 314.
    $('ul').append($listHTML);
    //append adicina os ítens retornados ao elemento ul
  });
});
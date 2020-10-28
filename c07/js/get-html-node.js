$(document).ready(function () {
  $('button').click(function () {
    var $listItemHTML = $('li').html();
    //html() retorna o primeiro elemento <li> apesar do 
    //seletor $('li') fazer referência a todos os elementos. 
    //<li> não tem descendentes. 
    $('li').append('<i>' + $listItemHTML + '</i>');
    //adiciona a todos os elementos <li> o valor retornado.
  });
});
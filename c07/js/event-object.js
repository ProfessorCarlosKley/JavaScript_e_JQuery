$(function () {

  $('li').on('click', function (e) {
    //seleciona todos os elementos <li> e chama o evento click
    $('li span').remove();
    var date = new Date();
    //cria um objeto date
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' evento: ' + e.type + '</span>');
  });

});
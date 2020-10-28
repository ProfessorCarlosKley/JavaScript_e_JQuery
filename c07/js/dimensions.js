$(function () {
  var listHeight = $('#page').height();
  var listWidth = $('#page').width();
  var listinnerHeight = $('#page').innerHeight();
  var listinnerwidth = $('#page').innerWidth();
  var listouterHeight = $('#page').outerHeight();
  var listouterwidth = $('#page').outerWidth();

  $('ul').append('<p>Altura pura: ' + listHeight + 'px - Largura pura' + listWidth + 'px</p>');
  $('ul').append('<p>Altura + Preenchimento: ' + listinnerHeight + 'px - Largura + Preenchimento ' + listinnerwidth + 'px</p>');
  $('ul').append('<p>Altura + Preench. + Borda: ' + listouterHeight + 'px - Largura + Preench. + Borda ' + listouterwidth + 'px</p>');
  $('li').width('50%');//definie todos os <li> com 50% da largura atual.
  $('li#one').width(125);//define com 125px.
  $('li#two').width('75%');//75% da largura do que era quando a página foi criada.
  $('li#five').width('100%');
});
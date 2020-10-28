$(function () {
  var $listItems = $('li');


  $listItems.filter('.hot:last').css("background-color", "red");
  $listItems.filter('.hot:last').removeClass('hot');
  //seleciona o componente li que tenha classe .hot e seja a última classe.
  //Em seguida coloca background vermelho e remove a classe .hot
  $('li:not(.hot)').addClass('cool');
  //Agora, seleciona elementos que não tenham class hot e add classe cool.
  $listItems.has('em').addClass('complete');
  //encontra li que tenha elemento em.
  $listItems.has('em').css("color", "red");
  $listItems.each(function () {
    //loop for
    var $this = $(this);
    if ($this.is('.hot')) {
      $this.prepend('Priority item: ');
    }
  });

  $('li:contains("honey")').append(' (local)');
});
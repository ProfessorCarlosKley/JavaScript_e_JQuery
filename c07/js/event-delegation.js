$(function () {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover', //eventos sucessivos
    ':not(#four)', //retira o evento do item com id #for.
    { status: 'important' },
    /**
     * O uso do !important é para garantir que esta regra sobrescreva qualquer outro
    seletor mais especíco do seu CSS padrão.
    Livro HTML5 e CSS3 Dominando a web do futuro, p. 61.
     */
    function (e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      //retorna o conteúdo do alvo com textContent.
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type; //retorna tipo do evento.
      $('#notes').html(listItem + itemStatus + eventType);
      //adiciona as variáveis anteriores ao conteiner p = #notes.
    }
  );

});
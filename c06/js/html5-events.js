function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);
/****
  * DOMContentLoaded disparado quando a árvore DOM é formada.
  * Imagens, Javascript e CSS ainda pondem estar carregando.
  * Acontece mais cedo que o evento load que espera por outros recursos
  * como imagens e anúncios serem carregados.
  * 
  */
window.addEventListener('beforeunload', function (event) {
  /****
   * Evento disparado  no objeto window antes que a página seja descarregada.
   */
  // This example has been updated to improve cross-browser compatibility (as recommended by MDN)
  var message = 'Você tem alterações que não foram salvasd';
  (event || window.event).returnValue = message;
  return message;
});

//EVENTOS DO HTML-5.

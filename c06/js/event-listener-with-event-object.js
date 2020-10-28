function checkLength(e, minLength) {         // Declraa função
  var el, elMsg;                             // Declara variáveis
  if (!e) {                                  // Se o objeto de evento não existir
    e = window.event;                        // Use IE fallback
    /*p. 264 - Objeto evetn no IE5-8 não é passado automaticamente para a 
    //função de rotina de tratamento/ouvinte de tratamento, ele está disponível
    //como um filho do objeto window. Por isso a função if. No IE5-8 ele não 
    existe (não é criado), logo se não existir chamamos ele de window.*/
  }
  el = e.target || e.srcElement;             // Obtem o destino do evento.
  //Event.srcElement é uma propriedade alias para a propriedade padrão
  // Event.target. É específica para versões antigas do IE.

  elMsg = document.getElementById("feedback");
  // elMsg = el.nextSibling (Obtem próximo irmão.) Não funcionaou por isso usei

  // a expressão acima com getElementById.
  //o próximo irmão é a div id = feedback

  if (el.value.length < minLength) {         // Se o comprimento for muito curto, configure msg
    elMsg.innerHTML = 'O  nome do usuário deve ter ' + minLength + ' caracteres ou mais.';
  } else {                                   // Otherwise
    elMsg.innerHTML = '';   // Clear message
  }
}
var elUsername = document.getElementById('username');// Obtem input de username
if (elUsername.addEventListener) {           // Se o ouvinte de evento for suportado
  //precisa verificar se o navegador suporta este recurso, o IE5-8 não suporta.
  //Nesse caso é usado o attchEvent.
  elUsername.addEventListener('blur', function (e) {  // atribui evento onBlur
    /*O parâmetro da função anonima recebe objeto event... 
    este é criado automaticamente e passado como parâmetro da função.
    ou no caso do IE5-8 criado com e = window.event;*/

    checkLength(e, 5);                             // Call checkLength()
  }, false);                                       // Capture in bubble phase
} else {                                           // Otherwise
  elUsername.attachEvent('onblur', function (e) {   // Para IE
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  });
}
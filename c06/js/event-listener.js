function checkUsername() {                             // Declare function
  var elMsg = document.getElementById('feedback');     // Get feedback element
  if (this.value.length < 5) {
    /**
     * A palavra chave this refere-se ao proprietário
     * de uma função. Ou seja ao elemento em que a função está.
     * Dito em outra palavras, this sempre irá se refrir ao elemento que chama
     * a função.
     * Aqui, a função checkUsername() é chamada  com um ouvinte do elemento
     * username (input) portanto, this.value.length refere-se ao comprimento
     * do texto do input.*/
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
}

var elUsername = document.getElementById('username');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
//chamar a função com parênteses,checkUsername() indicaria que a função
//seria executada à medida que a página fosse carregada e não quando o
//evento fosse disparado.
//false, booleano, representa um fluxo de evento, indicando como os eventos se
//propagam, normalmente é configurado como false. p. 255.
//Explicação de fluxo de eventos na p. 260

//ao ser adicionando no ouvinte, é como se checkUsername fosse escrito
//no próoprio ouvinte. Por isso, this se refere ao elemento que chamou o evento.
/**
addEventListener

* alvo.addEventListener(type,listener[, options]);
alvo.addEventListener(type,listener[, useCapture, wantUntrusted  ]);

type:
Uma linha de texto que representa o tipo de evento a ser esperado.

listener:
O objeto que recebe uma notificação quando um evento do tipo especificado
 ocorre. Esse objeto precisa implementar a interface do EventListener, ou
 simplesmente executar uma função JavaScript.

useCapture Optional:
Se true, useCapture indica que o usuário deseja iniciar uma captura.
Depois de iniciada a captura, todos os eventos do tipo especificado serão
enviados à listener registrada antes de serem enviados à qualquer EventTarget
abaixo dela na hierarquia de DOMs. Eventos que borbulharem para cima na
hierarquia não acionarão a escuta designada  a usar a captura. Veja Eventos DOM
Nível 3 para uma explicação detalhada. Perceba que esse parâmetro não é
opcional em todos os navegadores. Se não for especificado, useCapture é false.
*/
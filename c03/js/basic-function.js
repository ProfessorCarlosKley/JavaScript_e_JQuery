// Create a variable called msg to hold a new message
var msg = 'Inscreva-se e obtenha 10% de desconto!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message'); //acessa a div de id message
  el.textContent = msg; //escreve na div pondo mensagem de msg
}

// Call the function
updateMessage();
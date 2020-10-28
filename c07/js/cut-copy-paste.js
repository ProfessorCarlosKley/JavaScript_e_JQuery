$(function () {
  var $p = $('p');

  //Crie um clone do elemento <p> e adicione-o após o elemento <h2>.
  var $clonedQuote = $p.clone(); //Cria uma cópia do parágrafo
  $p.remove();//Remove o elemento parágrafo.
  $clonedQuote.insertAfter('h2');//Insere o elemento parágrafo depois de <h2>

  // Remova o primeiro item e adicione-o ao final da lista.
  // Observe como isso acontece nas duas listas.
  var $moveItem = $('#one').detach();
  //remove e mantém uma cópia na memória
  $moveItem.appendTo('ul');
  //adiciona a cópia de elemnto #one na lista, 1ª posição.
});
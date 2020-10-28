function getTarget(e) {                          // Declarando funçao
  //Esse parâmetro ainda não é um evento. Ele recebe um evento ao 
  //ser chamado com a função ouvinte.
  if (!e) {                                      // Se não existir objeto evento
    //Para IE5-8.
    e = window.event;                            // Use old IE event object
    //No IE event é filho de window.
  }
  return e.target || e.srcElement;               // Obtem o destino do evento.
  //e.scrElenet; forma de se obter o destino evento destino no IE.
}

function itemDone(e) {
  // Remove item da lista
  var target, elParent, elGrandparent;           // Declare variables
  //elParent = pai elGrandParent = avo
  target = getTarget(e);
  // Obtem o item clicado no link
  /*
    O livro usava o seguinte código - mas tinha duas deficiências
  - Clicar entre os itens da lista removeria a lista inteira
  - Clicar em texto em itálico removeria o link - não o item da lista

  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild (elParent);

  As próximas 10 linhas melhoram esse exemplo
  */

  if (target.nodeName.toLowerCase() == "a") {  // Se o usuário clicou em um elemento a
    elListItem = target.parentNode;              // Obtem seu elemento li (pai de a)
    elList = elListItem.parentNode;              // Obtem ul (pai de li.)
    elList.removeChild(elListItem);              // Remove item da lista
  }
  if (target.nodeName.toLowerCase() == "em") { // If the user clicked on an em element
    elListItem = target.parentNode.parentNode;
    // Obtem pai do pai (avô)
    elList = elListItem.parentNode;              // Get the ul element
    elList.removeChild(elListItem);              // Remove list item from list
  }

  // Prevent the link from taking you elsewhere
  if (e.preventDefault) {
    // Testa se preventDefault é suportado
    e.preventDefault();
    // Use preventDefault() para desabilitar comportamento padrão p. 267
  } else {                                       // Otherwise
    e.returnValue = false;                       // Use old IE version
    //Desabilita comportramento parão (IE5-8) p. 267
  }
}

// Set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList');// Get shopping list
if (el.addEventListener) {
  // Testa se navegador suporta ouvinte.
  el.addEventListener('click', function (e) {     // Adiciona um ouvinte
    //aqui, a função anônima recebe automaticmente um evento e adiciona a (e)
    //em seguida é atribuida a itemDone(e)
    itemDone(e); // este e é o parâmetro da função itemDone que recebe o e de
    //function(e) ou seja o event.
  }, false);                                     // Use bubbling phase for flow
} else {                                         // Otherwise
  el.attachEvent('onclick', function (e) {        // Use old IE model: onclick
    itemDone(e);                                 // Call itemDone()
    //ouvinte para IE5-8.
  });
}
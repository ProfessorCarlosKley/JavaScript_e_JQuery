var firstItem = document.getElementById('one'); // Get the first item
if (firstItem.hasAttribute('class')) {
  //hasAttribute, verifica se o no do elemento one tem o atributo class.
  firstItem.removeAttribute('class');
  // se tiver o atribute, remove.
}

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */
var firstItem = document.getElementById('one'); // Get first list item 
if (firstItem.hasAttribute('class')) {          // If it has class attribute
  //hasAttribute - verifica se o nó de elemento tem um aributo específico.

  var attr = firstItem.getAttribute('class');   // Get the attribute
  //se o elemento one tiver o atributo class então obtem o valor do atributo.

  // Adicionando valor do atributo depois da lista.
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>O primeiro item tem class name: ' + attr + '</p>';

}
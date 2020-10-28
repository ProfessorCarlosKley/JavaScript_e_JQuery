var elements = document.getElementsByTagName('li'); // Find <li> elements

if (elements.length > 0) {  // If 1 or more are found

  var el = elements[0];     // Select the first one using array syntax
  el.className = 'cool';    // Change the value of the class attribute

}

function alterar() {
  elements[0].style.backgroundColor = "red";
  elements[1].style.backgroundColor = "red";
  elements[2].style.backgroundColor = "red";
  elements[3].style.backgroundColor = "red";
  elements.item(0).style.color = "yellow";
  //outra forma de acessar os elemento do array (nod list)
}

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */

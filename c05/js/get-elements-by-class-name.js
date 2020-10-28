var elements = document.getElementsByClassName('hot'); // Find hot items



function alterar() {
  elements[0].style.backgroundColor = "#ddfaaa";
  elements[1].style.backgroundColor = "#ddfaaa";
  elements[2].style.backgroundColor = "#ddfaaa";
  elements.item(0).style.color = "red";
  elements.item(1).style.color = "red";
  elements.item(2).style.color = "red";
  //outra forma de acessar os elemento do array (nod list)
}

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */
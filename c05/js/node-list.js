var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
function alterar() {
  if (hotItems.length > 0) {                          // If it contains items

    for (var i = 0; i < hotItems.length; i++) {       // Loop through each item
      //hotItems[i].className = 'cool';         // Change value of class attribute
      hotItems[i].style.backgroundColor = "#ddaaaa";

      hotItems.item(i).style.color = "red";

    }

  }
}

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */
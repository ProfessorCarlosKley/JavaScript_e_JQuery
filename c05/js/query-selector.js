// querySelector(): retorna apenas a primeira correspondência.
// querySelectorAll():  retorna todos os elementos.
var el = document.querySelectorAll('li.hot');


// querySelectorAll returns a NodeList.
// The third li element is then selected and changed.
function alterar() {
    for (i = 0; i < el.length; i++) {
        el[i].style.backgroundColor = "#fffaaa";
        el[i].style.color = "red";
        //outra forma de acessar os elemento do array (nod list)
    }

}

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */
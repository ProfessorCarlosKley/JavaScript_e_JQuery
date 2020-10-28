var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'complete';
// Altera o atributo da classe do elemento de id 'one'.
//ela ássa de hot para complete.
var attr = firstItem.getAttribute("class");
//obtem o atributo class do elemento id one.

var fourthItem = document.getElementsByTagName('li').item(3);// Get fourth item
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'cool');
var attr2 = fourthItem.getAttribute("class");
// Altera o atributo class para cool


var newEl = document.createElement('li');
var newText = document.createTextNode('classe do 1º elemento: de hot >> ' + attr);
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var newEl2 = document.createElement('li');
var newText2 = document.createTextNode('classe do 4º elemento: de hot >> ' + attr2);
newEl2.appendChild(newText2);
var position2 = document.getElementsByTagName('ul')[0];
position2.appendChild(newEl2);


/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */
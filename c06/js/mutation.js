var elList, addLink, newEl, newText, counter, listItems; // Declare variables

elList = document.getElementById('list');               // Get list
addLink = document.querySelector('a');
// retorna o elemento <a>
counter = document.getElementById('counter');            // Get item counter

function addItem(e) {                                    // Declare function
  e.preventDefault();
  // p. 267 - Cancela comportamento padrão.
  newEl = document.createElement('li');                  // New <li> element
  newText = document.createTextNode('Novo item da lista add');    // New text node
  newEl.appendChild(newText);                            // Add text to <li>
  elList.appendChild(newEl);                             // Add <li> to list
}

function updateCount() {                                 // Declare function
  listItems = elList.getElementsByTagName('li').length;
  // Get total de <li>s
  counter.innerHTML = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false);
// DOM updated - DOMNodeInserted Evento disparado quando adicionado um item no html
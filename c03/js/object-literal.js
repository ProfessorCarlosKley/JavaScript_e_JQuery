// Set up the object
//O objeto é (as chaves e todo o seu conteúdo) p. 102 1º p.

/*Num objeto, cada nome de propriedades (variáveis) e Métodos (Funções), são chamados de chaves
		p. 101, 1ºp.
Separe com dois pontos cada chave de seu valor. Separe com uma vírgula cada propriedade e método
(mas não depois do último valor). p 102 3º parágrafo da coluna.
*/

var hotel = {
  name : 'DarciRay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() { //Uma expressão de função. ver p96;
    return this.rooms - this.booked; // Need "this" because inside function
	/*Expressão de função... Não tem necessidade de chamar a funçao com um nome.*/
  }
  //Nos objetos, as variáveis, ou seja as chaves são atribuidas com o uso de :.
  
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability() + 'v';   // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/
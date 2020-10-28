// Set up the object
var hotel = new Object();
/*
 * A palavra chave new e o construtor de objetos Object() criam um objeto em branco.
 * No Java seria <<nomeClasse>> hotel = new <<nomeClasse>>();
 * Você pode então adicionar propriedades e métdodos ao objeto.
  - Primeiro você cria um novo objeto usando uma combinação da palavra-chave new e a função de 
  construtor Object().
  - Depois de ter criado o objeto em branco, você pode adicionar propriedades e métodos a ele.
*/
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() { //método (expressão de função p-96)
  return this.rooms - this.booked;  
};

var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with result of method

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12 and 15, but note the security issues on p228-231
*/
// Create the template for objects that are hotels
// Criando um modelo para objetos do tipo hotel.
function Hotel(name, rooms, booked) {
  this.nome = name; //this está no escopo da função... refere-se a Hotel, criada pela funçao.
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  /*
  
  - A palavra chave this é usada em vez do nome do objeto para indicar que a propriedae ou método
  pertence ao objeto que a função this cria. ver p. 114 e 115.
  
  - This, cria as propriedades do objeto, cujos nomes não precisam necessariamente serem iguais aos
  parâmetros das funções que poderiam, por exemplo, serem n, r, b...
  
  */
  };
}
/*
Às vezes você pode querer que vários objetos representem coisas semelhantes. Construtores de objetos
podem usar uma função como um modelo para criar objetos.

Primeiro, crie o modelo com as propriedades e os métodos do objeto. p. 108.
- A função hotel será usada como modelo para criar novos objetos que representem hotel.
*/


// Create two hotel objects
//Dois Hotéis com as mesmas propriedades e valores diferentes.
var quayHotel = new Hotel('CARVALHO:', 40, 25); 	//intâncias do objeto inicializadas...
var parkHotel = new Hotel('OLIVEIRAS:', 120, 77);	//intâncias do objeto inicializadas...

// Update the HTML for the page
var details1 = quayHotel.nome + ' quartos: '; 
//nome é a propriedade que contem o argumento do parâmetro name. Nessa primeira chamada, CARVALHO.
    details1 += quayHotel.checkAvailability(); //Calcula o número de quarts disponíveis.
var elHotel1 = document.getElementById('hotel1');//seta o id hotel1
elHotel1.textContent = details1;

var details2 = parkHotel.nome + ' quartos: ';
//nome é a propriedade que contem o argumento do parâmetro name. Nessa segunda chamada, OLIVEIRAS.
    details2 += parkHotel.checkAvailability();//Calcula o número de quarts disponíveis.
var elHotel2 = document.getElementById('hotel2');//seta o id hotel2
elHotel2.textContent = details2;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
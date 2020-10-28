// Set up the object
var hotel = { //criando objetos com o conceito de cahave.
  name : 'Carvalho',
  rooms : 120,
  booked : 77
};

/*Ver c03.css para entender as imagens ao lado de Piscina e Aacad:*/

hotel.gym = true; //adicionando propriedades com a notação do ponto
hotel.pool = false;//adicionando propriedades com a notação do ponto
delete hotel.booked;//removendo propriedades com a notação do ponto

// Update the HTML
var elName = document.getElementById('hotelName'); // Setando element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elPool = document.getElementById('pool');      // Get element
elPool.className = hotel.pool;                     // false - Update HTML with property of the object

var elGym = document.getElementById('gym');        // Get element
elGym.className = hotel.gym;                       // true - Update HTML with property of the object

//className atribui um estilo ao elemento através de uma .classe
//ver exemplo solto na pasta de estudo do livro.
//Neste exemplo, className é true ou false pois pool e gym é booleano.
//Essas classes (estilos) estão definidos em c03.css .true e .false

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
*/
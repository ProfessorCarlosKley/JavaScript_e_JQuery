/* O script é colocado dentro de uma expressão de função chamada imediatamente
   o que ajuda a proteger o escopo das variáveis */

(function () {
  // Página 97 - Expressões de função. Função IIFE São executadas
  // imediatamente pelo navegador. Não precisa de nome.

  //PARTE UM: CRIAR OBJETOS DE HOTEL E ESCREVER OS DETALHES DA OFERTA

  // Create a hotel object using object literal syntax
  var hotel = {
    name: 'KLEYN',
    roomRate: 240, // VAlor do Quarto - Amount in dollars
    discount: 15,  // Percentage discount
    offerPrice: function () {//Preço de oferta
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      //O valor de oferta é neste caso, 85% do valor do quarto.
      return offerRate;
      //Essa é uma expressão de função ou função anônima, p. 96.
    }
  };

  // Escreva o nome do hotel, a tarifa padrão e a tarifa especial
  var hotelName, roomRate, specialRate;// Declare variables
  //setando as variáveis aos elementos id.
  hotelName = document.getElementById('hotelName');// Get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');
  //Escrevendo no ID do html.
  hotelName.textContent = hotel.name;
  //o id hotlName recebe nome do hotel.
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  //o id roomRate recebe valor do quarto.
  specialRate.textContent = '$' + hotel.offerPrice();
  // Obtem o valor do desconto e escreve na div correspondente.


  //PARTE DOIS: CALCULAR E ESCREVER OS DETALHES DE VALIDADE DA OFERTA

  var expiryMsg; // Mensagem exibida para os usuários
  var today;     // Data de hoje.
  var elEnds;    // O elemento que mostra a mensagem sobre o final da oferta

  function offerExpires(today) {
    // Declarar variáveis ​​dentro da função para escopo local
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Adicionar 7 dias (adicionado em milissegundos)
    // Data de home mais 7 dias à frente, através milissengundos.
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    //O método getTime() retorna o valor numérico correspondente 
    //ao horário da data especificada de acordo com o horário universal.
    //getTime trabalha com milissegundos... Ou seja retorna milissegundos da
    //data atual até hoje e acrescenta os mili corresondente  a 7 dias.
    //weekFromToday agora tem a data de hoje acrescida de 7 dias.

    // Create arrays to hold the names of days / months
    dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    //Retorna dia da data que dura a oferta getDay() retorna um número entre 
    //[0 - 6], representando dias da semana e será passado como índex do array.
    date = weekFromToday.getDate();
    //var date recebe a data de vnedimento da ofreta.
    month = monthNames[weekFromToday.getMonth()];
    //idem dayNames.
    year = weekFromToday.getFullYear();
    //Retorna ano completo 4 dígitos.
    // Create the message
    expiryMsg = 'Oferta válida até: ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message

  // Finish the immediately invoked function expression
}());
var xhr = new XMLHttpRequest();//Cria objeto XMLHttpRequest

xhr.onload = function () {// Quando o  readystate muda

  if (xhr.status === 200) {// Se o status do servidor for OK.
    responseObject = JSON.parse(xhr.responseText);
    /**
     * Os objetos JSON são devolvidos pelo servidor como ums string.
     * No navegador, essa string deve ser convertida em objeto javascript (desserialização).
     * Essa conversão é feita com o método parse() do objeto predefinido JSON global.
     * O ojbeto JSON também tem o método stringify() que converte objeto em string
     *    para ser enviado ao servidor.
    */
    // CONSTROI A STRING COM NOVO CONTEÚDO. TAMBÉM PODE USAR MANIPULAÇÃO DOM
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) {
      // itera pelo objeto.

      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    //Atualiza a página com o novo conteúdo
    document.getElementById('content').innerHTML = newContent;

    }
  };

  xhr.open('GET', 'data/data.json', true);        // Prepare the request
  xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).
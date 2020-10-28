var xhr = new XMLHttpRequest();        // Cria o objeto XMLHttpRequest

xhr.onload = function () {              // Quando a resposta carregar.
  // A verficação condicional abaixo não funciona localmente só num servior.
  if (xhr.status === 200) {             // If o status do servidor for ok. p. 378
    // 200 Ok. 304 Sem alteração; 404 página não encontrada e 500 erro interno no servidor

    // ESSA PARTE É DIFERENTE PORQUE PROCESSA XML NÃO HTML
    var response = xhr.responseXML; //Obtem xml do servidor
    // Obtendo resposta do servidor. com a propriedade respnose do objeto XMLHttpRequest
    //Isso para respostas em XML
    var events = response.getElementsByTagName('event');
    // Localiza elementos <event>
    for (var i = 0; i < events.length; i++) {
      // iteração pelos elementos <event> do arquivo xml

      var container, image, location, city, newline;
      // Declaravariáveis
      container = document.createElement('div'); // Cria <div> container
      container.className = 'event'; // Adiciona a classe event ao elemento container (div)

      image = document.createElement('img');// Adiciona mapa de imagem
      image.setAttribute('src', getNodeValue(events[i], 'map'));
      //getNoduleValue obtem o conteúdo dos elementos xml.
      //getNodule recebe o objeto e a teg. objeto é o fragmento xml, neste caso, 
      //events[i], e, tag é a tag a partir da qual quero obter a finromação, (map).
      image.setAttribute('alt', getNodeValue(events[i], 'location'));
      container.appendChild(image); //adiciona no container, na div.
      location = document.createElement('p');// Adiciona dados da localização.
      city = document.createElement('b');
      newline = document.createElement('br');
      city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
      location.appendChild(newline);
      location.insertBefore(city, newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
      container.appendChild(location);
      document.getElementById('content').appendChild(container);
    }

    function getNodeValue(obj, tag) {
      // Obtem conteúdo da XML
      return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }

    // A PARTE FINAL É A MESMA DO EXEMPLO HTML MAS REQUER UMARQUIO XML
}
  };

  xhr.open('GET', 'data/data.xml', true);             // Prepare the request
  xhr.send(null);                                     // Send the request
  
  
function showElement() {
  alert(this.innerHTML);
}
//Fluxo de eventos: Propagação de Eventos
el = document.getElementById("list");   // <<< el is reused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el = document.getElementById("link");
el.addEventListener('click', showElement, false);

//Fluxo de eventos: Captura de Eventos
el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);

document.write(this.innerHTML);
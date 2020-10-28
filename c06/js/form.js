var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Declare variables
elForm = document.getElementById('formSignup'); //id do form; 
elSelectPackage = document.getElementById('package'); //id de options
elPackageHint = document.getElementById('packageHint'); //id de uma div antes do input 
elTerms = document.getElementById('terms'); //input terms
elTermsHint = document.getElementById('termsHint'); //div do input terms

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;
  //seleciona o valor do index da opção selecionada. Ou seja, o valor 
  //definido em value de option no html.
  // Obtem a opção selecionada do elemento que a chama (this)
  //Vistos em exemplos anteriores. this, fere-se ao elemento que dispara o ouvinte.
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = 'Economize US $ 10 se você pagar por 1 ano!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Sábia escolha.';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {
    //se o input checkbox não for checado.
    elTermsHint.innerHTML = 'Você deve concordar com os termos.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

//Evento para o form quando submetido.
elForm.addEventListener('submit', checkTerms, false);
//ouvinte para o elemnento <select id = "package">
elSelectPackage.addEventListener('change', packageHint, false);
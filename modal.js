function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Ticket #1 : Fermeture de la modale
// const closeButton = document.querySelector(".close"); 
// closeButton.addEventListener("click", function(){
//   modalbg.style.display = "none";
// })

const closeButton = document.querySelector(".close"); 

closeButton.addEventListener("click", closeModal)

function closeModal(){
  modalbg.style.display = "none";
}

//Ticket #2 : Implémenter les données du formulaire

//Ticket #3 : Ajouter validation ou message d'erreur

// ETAPE 1 : J'ajoute un id #sign-up-form sur la balise form pour pouvoir ajouter l'event submit
// L'événement submit ne peut être ajouté que sur une balise form - pas sur un bouton ou un input de type submit

const form = document.getElementById("sign-up-form");
form.addEventListener("submit", validate);

//ETAPE 2 : Je vérifie tous mes inputs

//ETAPE 2.1 : Je vérifie mon input prénom
  //Je récupère l'élément "first"
  const firstName = document.getElementById("first");
  //Je définie une RegEx pour vérifier que le format est correct
    //^indique  le début de la chaîne
    //[A-Za-zÀ-ÿ -] = tous les caractères alphabétiques en majuscules et minuscules de l'alphabet français (y compris les lettres accentuées) + tirets + espaces
    // + indique qu'il peut y avoir une ou plusieurs occurrences de ces caractères.
    // $ indique la fin de la chaîne.
  const nameValidation = /^[A-Za-zÀ-ÿ -]+$/

  //Je crée une fonction pour valider le champ "first"

  function firstNameCheck(){
    //.trim permet d'enlever les espaces    
    if (firstName.value.trim() === "" || !nameValidation.test(firstName.value)){
      // On ajoute l'attribut true "data-error-visible" à la div parent + le contenu de data-error
      firstName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom");
      firstName.parentElement.setAttribute("data-error-visible", true);
    } else {
      // Sinon, on enlève l'attribut "data-error-visible"
      firstName.parentElement.setAttribute("data-error-visible", false);
      return true
    }
  }

//ETAPE 2.2 : Vérification de l'input Nom
const lastName = document.getElementById("last");

function lastNameCheck(){ 
  if (lastName.value.trim() === "" || !nameValidation.test(lastName.value)){
    lastName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom");
    lastName.parentElement.setAttribute("data-error-visible", true);
  } else {
    lastName.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}

//ETAPE 2.3 : Vérification de l'input Email
const email = document.getElementById("email");
const emailValidation = /^[a-zA-Z][a-z@.]/;

function emailCheck(){ 
  if (email.value.trim() === "" || !emailValidation.test(email.value)){
    email.parentElement.setAttribute("data-error", "Veuillez renseigner votre email");
    email.parentElement.setAttribute("data-error-visible", true);
  } else {
    email.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}  

//ETAPE 2.4 : Vérification de la date de naissance
const birthdate = document.getElementById("birthdate");
const birthdateAndQuantityValidation = /^[0-9]/;

function birthdateCheck(){ 
  if (birthdate.value.trim() === "" || !birthdateAndQuantityValidation.test(birthdate.value)){
    birthdate.parentElement.setAttribute("data-error", "Veuillez renseigner votre date de naissance");
    birthdate.parentElement.setAttribute("data-error-visible", true);
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}

//ETAPE 2.5 : Vérification du nombre de tournois
const quantity = document.getElementById("quantity");

function quantityCheck(){ 
  if (quantity.value.trim() === "" || !birthdateAndQuantityValidation.test(quantity.value)){
    quantity.parentElement.setAttribute("data-error", "Veuillez renseigner une quantité");
    quantity.parentElement.setAttribute("data-error-visible", true);
  } else {
    quantity.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}

//ETAPE 2.6 : Vérification qu'une option est cochée

//Pour vérifier qu'il y a bien une ville sélectionnée

const cityMessage = document.querySelector('input[name="location"]');
const radioButtons = document.querySelectorAll('input[name="location"]');


function cityCheck(){

  let selectedOption = false;
  
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedOption = true;
      break;
    }
  }

  if(!selectedOption){
    cityMessage.parentElement.setAttribute("data-error", "Veuillez choisir une option");
    cityMessage.parentElement.setAttribute("data-error-visible", true);
  }else{
    cityMessage.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}


//ETAPE 2.7 : Vérification que les conditions sont acceptées
const checkbox = document.getElementById('checkbox1');

function checkboxCheck(){ 
  if (!checkbox.checked){
    checkbox.parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions");
    checkbox.parentElement.setAttribute("data-error-visible", true);
  } else {
    checkbox.parentElement.setAttribute("data-error-visible", false);
    return true
  }
}

//ETAPE 3 : Message de confirmation

const messageRemerciement = document.getElementById('messageRemerciement');
const btnMerci = document.getElementById('btnMerci');

function Message() {
  //Masquer le formulaire d'origine
  form.className = 'notActive';
  //Afficher le message et le bouton de fermeture
  messageRemerciement.className = 'active';
};

btnMerci.addEventListener('click', function event() {
  //Réactiver le formulaire d'origine
  // form.className = 'Active';
  //Masquer le message
  messageRemerciement.className = 'notActive';
  // forcer la fermuture de la modale
  closeModal();
  form.submit();
  // form.reset();
});

//ETAPE 4 : Définition de la fonction de validation

function validate(event){
  event.preventDefault();

    firstNameCheck() 
    lastNameCheck()
    emailCheck()
    birthdateCheck()
    quantityCheck() 
    cityCheck()
    checkboxCheck()

  if(firstNameCheck() && lastNameCheck() && emailCheck() && birthdateCheck() && quantityCheck() && cityCheck() && checkboxCheck()){
    Message();
    return true
  }else{
    return false
  }
}


  // const firstNameCheck = firstNameCheck() 
    // const lastNameCheck = lastNameCheck()
    // const emailCheck = emailCheck()
    // const birthdateCheck = birthdateCheck()
    // const quantityCheck = quantityCheck() 
    // const cityCheck = cityCheck()
    // const checkboxCheck = checkboxCheck()
      
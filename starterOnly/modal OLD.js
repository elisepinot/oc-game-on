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
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form -- ajout code Elise
closeButton.addEventListener("click", function(){
  modalbg.style.display = "none";
})

// J'ajoute un id #sign-up-form sur la balise form pour pouvoir ajouter l'event submit
const form = document.getElementById("sign-up-form");
form.addEventListener("submit", formValidation);

// Avant de déclarer ma fonction formValidation, je récupère tous les inputs du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById('checkbox1');

//Je récupère toutes mes spans dans lesquelles vont s'afficher mes messages d'erreur
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const birthdateError = document.getElementById("birthdate-error");
const quantityError = document.getElementById("quantity-error");
const cityError = document.getElementById("location-error");
const termsOfUseError = document.getElementById('terms-of-use-error');


//Pour vérifier qu'il y a bien une ville sélectionnée

const cityInputs = document.querySelectorAll('input[name="location"]');

let citySelected = false;

cityInputs.forEach((input) => {
  if (input.checked) {
    citySelected = true;
  }
}); 


//Expressions Régulières -- RegEx : vérifie la présence de certains caractères ou enchaînements de caractères dans une expression
const nameValidation = /^[a-zA-ZéèîÉÈÊÎ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîÉÈÎ][a-zéèêàçîï])?/;
const emailValidation = /^[a-zA-Z][a-z@.]/;
const birthdateAndQuantityValidation = /^[0123456789]/;


//Je vérifie dans ma fonction que tous les champs sont valides

function formValidation(event){

    event.preventDefault()
    console.log("OK")

  if (firstName.value != "" && nameValidation.test(firstName.value) == true){
      if (lasttName.value != "" && nameValidation.test(firstName.value) == true){
    //     if(){
    //        etc. pour tous les inputs, jusqu'au dernier : 
    //       alert("Merci ! Votre réservation a été reçue.");

    //     }
    //   }
    // }
      }else{
        lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      }
  }else{
    firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
}





// function checkingFirstName (){
//   let checkFirstName = false ;
//   if (firstName.value != "" && nameValidation.test(firstName.value) == true){
//     return checkFirstName = true
//   }else{
//     firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
//   }
// };


// function formValidation(e){
//   e.preventDefault();
//   console.log("salut pourquoi ça fonctionne pas");

//   // checkingFirstName();
  
// }

// Début fonction écrite avec Hugo, ne fonctionne pas
// function formValidation(event){
//   event.preventDefault()
//   console.log("OK")

//   // if (firstName.value != "" && nameValidation.test(firstName.value) == true){
//   //   console.log(firstName.value)
//   //   alert("Merci ! Votre réservation a été reçue.");
//   //   firstNameError.textContent = "Pourquoi ça ne marche pas ?";

//   //   //   if (lastName.value !){
//   //   //     if(){
//   //   //       alert("Merci ! Votre réservation a été reçue.");

//   //   //     }
//   //   //   }
//   //   // }
//   // }else{
//   //   firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

//   // }
// }

  //pour avoir les erreurs en même temsp, faire une validation par input
  //déclarer une variable pour chaque input (ex : firstName)

  // const firstNameCheck = false;
  // const lastNameCheck = false; 

  // mettre toutes les conditions et si elles sont validées, passage à true
  // si tout est true

  // if firstNameCheck == true && lastNameCheck == true 



// Ci-desous : ma première version


// function f_valid(e){
//   //si valueMissing renvoie "true" on veut bloquer l'envoi du formulaire
//   if (firstName.validity.valueMissing){
//     e.preventDefault();
//     firstNameMissing.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

//   } else if(firstNameValidation.test(firstName.value) == false){
//     e.preventDefault();
//     firstNameMissing.textContent = "Format incorrect";
  
//   } else if(lastName.validity.valueMissing){
//     e.preventDefault();
//     lastNameMissing.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

//   } else if (lastNameValidation.test(lastName.value) == false){
//     e.preventDefault();
//     lastNameMissing.textContent = "Format incorrect";

//   } else if(email.validity.valueMissing){
//     e.preventDefault();
//     emailMissing.textContent = "Le champ Email doit être renseigné.";
  
//   } else if (emailValidation.test(email.value) == false){
//     e.preventDefault();
//     emailMissing.textContent = "Format incorrect";

//   } else if(birthdate.validity.valueMissing){
//     e.preventDefault();
//     birthdateMissing.textContent = "Vous devez entrer votre date de naissance.";

//   } else if (birthdateValidation.test(birthdate.value) == false){
//     e.preventDefault();
//     birthdateMissing.textContent = "Format incorrect";

//   } else if(quantity.validity.valueMissing){
//     e.preventDefault();
//     quantityMissing.textContent = "Veuillez saisir une quantité dans ce champ.";

//   } else if (quantityValidation.test(quantity.value) == false){
//     e.preventDefault();
//     quantityMissing.textContent = "Format incorrect";

//   // } else if(!citySelected) {
//   //   e.preventDefault();
//   //   cityMissing.textContent = "Vous devez choisir une option.";

//   } else if (!checkbox.checked) {
//     e.preventDefault();
//     termsOfUse.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
//   } else{
//     formData.submit();
//     alert("Merci ! Votre réservation a été reçue.");
//   }

// }
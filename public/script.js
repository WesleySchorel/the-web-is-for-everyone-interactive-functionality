// ACCORDION

 let acc = document.getElementsByClassName("accordion");
 let i;
 
 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     } 
   });
 }

// DIALOG
// Maakt een knop die een pop-upvenster opent en wanneer er iets wordt geselecteerd en op de knop 'submit' wordt geklikt, wordt de gebruiker naar een andere pagina gestuurd.

 let button = document.getElementById('selecteer-richtlijn-button')
 let dialogRichtlijnen = document.querySelector('#selecteer-richtlijn-dialog')
 
 button.addEventListener('click', function() {
   dialogRichtlijnen.showModal()
 })
 
 dialogRichtlijnen.addEventListener('submit', function() {
   let selectThingy = document.querySelector('select')
   location.href = selectThingy.value
 })

// FORM
// Zorgt ervoor dat de gebruiker een geldige URL invoert en geeft een foutmelding als de URL niet correct is.

 const url = document.getElementById("url");

 url.addEventListener("input", (event) => {
   if (url.validity.typeMismatch) {
     url.setCustomValidity("Voeg een geldige link toe!");
   } else {
     url.setCustomValidity("");
   }
 });


 
 
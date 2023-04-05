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

 let button = document.getElementById('selecteer-richtlijn-button')
 let dialogRichtlijnen = document.querySelector('#selecteer-richtlijn-dialog')
 
 button.addEventListener('click', function() {
   dialogRichtlijnen.showModal()
 })
 
 dialogRichtlijnen.addEventListener('submit', function() {
   let selectThingy = document.querySelector('select')
   location.href = selectThingy.value
 })

 




 
 
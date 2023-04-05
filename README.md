# Vervoerregio Amsterdam Interactive-Functionality

![image](https://user-images.githubusercontent.com/112857487/230173713-252ca90d-0945-4d72-a056-a8e28f84f10f.png)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Vervoerregio Amsterdam wilt een website waarop een overzicht van de verplichtingen voor toegankelijkheid van website's bekeken kunnen worden. Aan de hand van deze criteria die op de website te vinden zal zijn kan Vervoerregio Amsterdam haar partners controleren op toegankelijkheid.

Website link: https://dull-red-frog-garb.cyclic.app/

De twee userstories die ik heb uitgevoerd zijn:
1. Als gebruiker wil ik een overzicht van toegankelijkheidsrichtlijnen kunnen bekijken, om te begrijpen wat er moet gebeuren om een website/app toegankelijker te maken.

2. Als gebruiker wil ik detail informatie over een toegankelijkheidsrichtlijn bekijken, om te beoordelen of mijn website/app voldoet aan de richtlijn.

![image](https://user-images.githubusercontent.com/112857487/230037852-90d93918-4173-47e3-b728-c11b19aa1ff0.png)

https://dull-red-frog-garb.cyclic.app/

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De gebruikers zijn medewerkers van Vervoerregio Amsterdam. Zij kunnen deze website gebruiken haar partners te controleren op toegankelijkheid.

De website bestaat uit een projectboard en een toolboard. Op de pagina waarop het projectboard zich bevindt kan je een knop vinden waarmee je websites van de partners van Vervoerregio Amsterdam kan toevoegen. Hieronder vind je een website overzicht waarzich alle geregistreerde websites te vinden zijn. Op de tweede pagina is een pagina met de succescriteria om aan een toegankelijke website te voldoen te vinden.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Deze website is gebouwt met verschillende technologieën. De technologiën die ik heb gebruikt zijn Node, Express en EJS en een REST API en client-side JS, CSS en HTML.

### Progressive Enhancement
Progressive Enhancement is een ontwerpprincipe voor websites die ervoor zorgt dat de basisfunctionaliteit van een website altijd beschikbaar is. Zelfs als bepaalde delen van een website niet werken.

Ik heb het formulier opgebouwt met Progressive Enchanement door te beginnen met een lege html pagina en het laag voor laag te bouwen. Valt er een laag weg, blijft het formulier werken.

### Rest API
In dit project maak ik gebruik van de REST API for Toolgankelijkheid van Vervoerregio Amsterdam. De documentatie van deze Api is te vinden op: https://api.vervoerregio-amsterdam.fdnd.nl/


### CSS
```
input:invalid {
  border: 2px solid red;
}

input:valid {
  border: 3px solid black;
}
```

### JS
```js
// Zorgt ervoor dat de gebruiker een geldige URL invoert en geeft een foutmelding als de URL niet correct is.

 const url = document.getElementById("url");

 url.addEventListener("input", (event) => {
   if (url.validity.typeMismatch) {
     url.setCustomValidity("Voeg een geldige link toe!");
   } else {
     url.setCustomValidity("");
   }
 });
```

### Express
```js
// Maakt een nieuwe express app
const app = express()

// Stelt in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
```

### Node
```js
app.post('/projectboard', (request, response) => {
  console.log(request.body)
  postJson(`${url}/urls`, request.body).then((data) => {
    let newURL = { ...request.body }

    if (data.success) {
      response.redirect('/?urlPosted=true')
    } else {
      const errorMessage = data.message
      const newData = { error: errorMessage, values: newURL }

      response.redirect('/projectboard')
    }
  })
})
```

### Rest API
In dit project maak ik gebruik van de REST API for Toolgankelijkheid van Vervoerregio Amsterdam. De documentatie van deze Api is te vinden op: https://api.vervoerregio-amsterdam.fdnd.nl/


Progresive enhancement

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
Download of clone dit project van deze Github pagina.

Download de aanbevolen versie op nodejs.org en installeer vanaf deze wwebsite de Node ontwikkelomgeving. Tijdens dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces van Node.

Open de terminal in Visual Studio Code en installeer Node doormiddel van het commando ``npm init``. Voer hierna ``npm install`` uit. Om de pagina te open start je een server op door middel van ``npm start``. Als de server weer gesloten moet worden kan je ``control + c / ^c`` gebruiken.

## Bronnen
Bronnen die ik gelezen heb:
* Client-side form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
* Leertaak: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).

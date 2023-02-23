# Web App From Scratch @cmda-minor-web 2021 - 2022
Tijdens Web App From Scratch ben ik begonnen met het maken van een visite kaartje. Voor mij was dit vooral weer even oefenen met HTML, CSS en JS. Dit had ik namelijk een lange tijd niet gedaan.

## Rijksmusuem app
Voor de eindopdracht van dit vak was er een keuze uit een paar user stories. De user story die ik gekozen heb is:
```
Als kunstliefhebber, wil ik thuis kunst uit het Rijksmuseum kunnen zoeken en bekijken, zodat ik ten alle tijden van kunst kan genieten.
```

De bedoeling is dat er een Single Page App (SPA) word gemaakt aan de hand van deze user story.

Bij deze userstory hoort de API van het rijksmuseum. 
[Link met infomratie over de API](https://www.rijksmuseum.nl/nl/onderzoek/onderzoek-doen/data)

[Object meta data](https://data.rijksmuseum.nl/object-metadata/)

### Design
Ik ben begonnen met het maken van een simpel design wat ik kan aanhouden tijdens het maken van de opdracht. Dit zorgt ervoor dat een bepaalde structuur volg in mijn styling. Ik heb ervoor gekozen om een zoekbalk, categorieën en een discover sectie toe te voegen. Ook is het de bedoeling dat er een detail pagina komt, die meer informatie geeft over het object of schilderij als er op geklikt word.

<img src="/readmeimgs/design.png" height=300px>


### Fetch data
Met het gebruik van Fetch kan ik informatie ophalen uit de API en deze tonen op mijn Single Page Application.

```Javascript
function fetchData() {

    const artContainer = document.querySelector('main > section:nth-of-type(2)')
    
    loader();

    const apikey = "YOUR API KEY";
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=`+apikey+`&p=10`;
    
    const data = fetch(url)

        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((data) => {
            artContainer.textContent="";
            render(data)    

    }).catch((error) => {
        console.log(error);
    })
}
```

Dit haalt de data op van de API en laat 10 resultaten zien. Vervolgens heb ik met de functie "render()" ervoor gezorgd dat dit in een loop word gezet, en de juist styling krijgt.

### UI Stack
Om ervoor te zorgen dat de applicatie beter word om te gebruiken heb ik geprobeerd een UI stack toe te voegen. Ik heb gebruik gemaakt van de loading, error en empty state. De error en empty state heb ik samengevoegd. De partial state is eigenlijk hier niet van toepassing, omdat de pagina stopt als er geen objecten meer gevonden zijn.

<img src="/readmeimgs/uistack.png" height=300px>

Om dit ook ik de pagina te krijgen heb ik gebruik gemaakt van de functie "loader()". Dit zorgt ervoor dat de loading, en error/empty state werken.

```javascript
function loader() {
    const artContainer = document.querySelector('main > section:nth-of-type(2)')

    artContainer.textContent="";

    const createLoading = document.createElement("div")
    createLoading.setAttribute("id", "loading")
    artContainer.appendChild(createLoading);
};
```

### Modules
Om mijn code meer structuur te geven heb ik gebruik gemaakt van modules. Dit zorgt ervoor dat ik mijn functies in aparte bestanden kan zetten en krijg ik meer overzicht. Modules kan je gebruiken door dit in je HTML te zetten:

```html
<script type="module" src="script.js"></script>
```

Vervolgens kan je functies exporten en aanroepen in je script.js

```javascript
import { fetchData } from './api.js'
import { loader } from './loader.js'
import { render } from './render.js'
```

### Routes
import { render } from "./render.js";

export function fetchData() {


    const artContainer = document.querySelector('main > section:nth-of-type(2)')
    artContainer.textContent = "Data aan het ophalen...";

    const apikey = "0TyrFANJ";
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=`+apikey+`&ps=0`;
    
    const data = fetch(url)

        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((data) => {
            console.log("hoio")
           render(data)    

    }).catch((error) => {
        console.log(error);
    })
}


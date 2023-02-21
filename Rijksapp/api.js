import { render } from "./render.js";
import { loader } from "./loader.js";

export function fetchData() {

    const artContainer = document.querySelector('main > section:nth-of-type(2)')
    

    loader();

    const apikey = "0TyrFANJ";
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


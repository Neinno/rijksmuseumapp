import { render } from "./render.js";
import { loader } from "./loader.js";
import { searchObject } from "./search.js";

export function fetchData() {

    const artContainer = document.querySelector('main > section:nth-of-type(1)')
    document.querySelector('form input[name="searchbar"]').addEventListener('keyup', searchObject)

    loader();

    const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
    const apikey = "0TyrFANJ";
    const ifImage = "imgonly=true";
    const sortedBy = "chronologic";
    const resultAmount = "ps=20";

    const url = `${urlApi}?key=${apikey}&${resultAmount}&${ifImage}&s=${sortedBy}`;

    const data = fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then((data) => {
            const filterData = data.artObjects.map(art => ({
                number: art.objectNumber,
                title: art.title,
                image: art.webImage.url,
                description: art.description,
            }));
            console.log(filterData)
            artContainer.textContent="";
            render(filterData)   
    }).catch((error) => {
        console.log(error);
    })
}


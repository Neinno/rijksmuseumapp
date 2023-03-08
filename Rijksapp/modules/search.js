import { render } from "./render.js";
import { loader } from "./loader.js";

export function searchObject(event) {
    const searchInput = document.querySelector('form input[name="searchbar"]').value
    if(searchInput.length > 3) {
        fetchSearch(searchInput)
        window.location.hash = "#search/" + searchInput;
    }
   
}

export function fetchSearch(searchInput) {

    const artContainer = document.querySelector('main > section:nth-of-type(1)')
    document.querySelector('form input[name="searchbar"]').addEventListener('keyup', searchObject)

    loader();

    const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
    const apikey = "0TyrFANJ";
    const ifImage = "imgonly=true";
    const sortedBy = "chronologic";
    const resultAmount = "ps=20";

    const url = `${urlApi}?key=${apikey}&q=${searchInput}&${resultAmount}&${ifImage}&s=${sortedBy}`;

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
            artContainer.textContent="";
            render(filterData)    

    }).catch((error) => {
        console.log(error);
    })
}
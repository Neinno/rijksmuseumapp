const artContainer = document.querySelector('main > section:nth-of-type(2)')

fetchData();


function fetchData() {
    
    const apikey = "0TyrFANJ";
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=`+apikey+`&ps=0`;
    
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            data.artObjects.forEach(data => {

                const createFigure = document.createElement("figure");
                artContainer.appendChild(createFigure);

                const createFigcaption = document.createElement("figcaption");
                createFigcaption.textContent = data.title;
                createFigure.appendChild(createFigcaption);

                const createImage = document.createElement("img");
                createImage.src = data.webImage.url;
                createFigure.appendChild(createImage);

            })

            console.log(data)      
        })
}

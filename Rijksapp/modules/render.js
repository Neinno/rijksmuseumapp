export function render(data) {   

    const artContainer = document.querySelector('main > section:nth-of-type(1)')

    data.artObjects.forEach(data => {
        const createLink = document.createElement("a");
        createLink.setAttribute("href", "#" + data.objectNumber)
        artContainer.appendChild(createLink)

        const createFigure = document.createElement("figure");
        createLink.appendChild(createFigure);

        const createFigcaption = document.createElement("figcaption");
        createFigcaption.textContent = data.title;
        createFigure.appendChild(createFigcaption);

        const createImage = document.createElement("img");
        createImage.src = data.webImage.url;
        createFigure.appendChild(createImage);
    })

};

export function renderDetailPage() {
    const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
    const apikey = "0TyrFANJ";
    
    const objectNumber = location.hash.slice(1);
    fetch(`${urlApi}/${objectNumber}?key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        const object = data.artObject;
        const title = object.title;
        const image = object.webImage.url;
        const description = object.description;
        const detailPage = document.getElementById(detail-page);
  
        createTitle = document.createElement("h1");
        createTitle.textContent = title;
        detailPage.appendChild(createTitle)
  
        createImg = document.createElement("img");
        createImg.src = image;
        detailPage.appendChild(createImg)
  
        createDescription = document.createElement("p");
        createDescription.textContent = description;
        detailPage.appendChild(createDescription)
      })
      .catch(error => console.error(error));
  }
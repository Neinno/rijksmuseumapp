const detailSection = document.getElementById("detail-page");
const artContainer = document.querySelector('main > section:nth-of-type(1)');

export function render(data) {   
    detailSection.innerHTML = "";
    const artContainer = document.querySelector('main > section:nth-of-type(1)');
    const objects = data.artObjects;

    objects.forEach(artObject => {
        const createLink = document.createElement("a");
        createLink.setAttribute("href", "#detail/" + artObject.objectNumber)
        artContainer.appendChild(createLink)

        const createFigure = document.createElement("figure");
        createLink.appendChild(createFigure);

        const createFigcaption = document.createElement("figcaption");
        createFigcaption.textContent = artObject.title;
        createFigure.appendChild(createFigcaption);

        const createImage = document.createElement("img");
        createImage.src = artObject.webImage.url;
        createFigure.appendChild(createImage);
    })
};

export function renderDetail(id) {
    artContainer.innerHTML = "";
    const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
    const apikey = "0TyrFANJ";
    
    fetch(`${urlApi}/${id}?key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        const object = data.artObject;
        const title = object.title;
        const image = object.webImage.url;
        const description = object.description;
        
        const createTitle = document.createElement("h1");
        createTitle.textContent = title;
        detailSection.appendChild(createTitle)
  
        const createImg = document.createElement("img");
        createImg.src = image;
        detailSection.appendChild(createImg)
  
        const createDescription = document.createElement("p");
        createDescription.textContent = description;
        detailSection.appendChild(createDescription)
      })
      .catch((error) => {
        console.log(error);
    })
  }
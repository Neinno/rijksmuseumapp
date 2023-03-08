const detailSection = document.getElementById("detail-page");
const artContainer = document.querySelector('main > section:nth-of-type(1)');

export function render(data) {   
    detailSection.innerHTML = "";
    const artContainer = document.querySelector('main > section:nth-of-type(1)');
    const objects = data.artObjects;
    artContainer.style.display = "grid";
    detailSection.classList.remove("detail-slide")

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
    const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
    const apikey = "0TyrFANJ";
    
    fetch(`${urlApi}/${id}?key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        const object = data.artObject;
        const title = object.title;
        const image = object.webImage.url;
        const description = object.description;
        artContainer.style.display = "none";

      

        const createTitle = document.createElement("h1");
        createTitle.textContent = title;
        detailSection.appendChild(createTitle)
  
        const createImg = document.createElement("img");
        createImg.src = image;
        detailSection.appendChild(createImg)
  
        const createDescription = document.createElement("p");
        createDescription.textContent = description;
        detailSection.appendChild(createDescription)

        const createButton = document.createElement("button")
        createButton.textContent = "sluiten";
        createButton.addEventListener("click", () => {
          history.back();
          detailSection.classList.remove("detail-slide")
          detailSection.innerHTML = "";
          artContainer.style.display = "grid";
        })
        detailSection.appendChild(createButton)

        detailSection.classList.add("detail-slide")
      })
      .catch((error) => {
        console.log(error);
    })
  }
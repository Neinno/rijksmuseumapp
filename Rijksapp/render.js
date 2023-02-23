export function render(data) {   

    const artContainer = document.querySelector('main > section:nth-of-type(1)')

    data.artObjects.forEach(data => {
        const createLink = document.createElement("a");
        createLink.setAttribute("href", "#" + data.id)
        artContainer.appendChild(createLink)

        const createFigure = document.createElement("figure");
        createLink.appendChild(createFigure);

        const createFigcaption = document.createElement("figcaption");
        createFigcaption.textContent = data.title;
        createFigure.appendChild(createFigcaption);

        const createImage = document.createElement("img");
        createImage.src = data.webImage.url;
        createFigure.appendChild(createImage);

        console.log(data);
    })
};
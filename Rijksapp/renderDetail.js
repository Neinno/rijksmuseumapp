export function renderDetail(objectNumber) {
   

  const urlApi = "https://www.rijksmuseum.nl/api/nl/collection";
  const apiKey = "0TyrFANJ";

  const url = `${urlApi}/${objectNumber}?key=${apiKey}`;

  console.log(url)

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const title = data.artObject.title;
          const description = data.artObject.label.description;
          const imageUrl = data.artObject.webImage.url;

          const titleElement = document.getElementById('#detail-title');
          const descriptionElement = document.getElementById('#detail-desc');
          const imageElement = document.getElementById('#detail-image');

          titleElement.innerHTML = title;
          descriptionElement.innerHTML = description;
          imageElement.src = imageUrl;
          imageElement.alt = title;

          document.getElementById('detail').style.display = 'block';
  })
  .catch(error => {
      console.error(error);
    });

}

function hideDetailPage() {
  document.getElementById('detail').style.display = 'none';
}

// Eventlistener voor hashchange
window.addEventListener('hashchange', function() {
  console.log("kruggie")
  const hash = window.location.hash.substr(1);
  
  if (hash === 'detail') {
    const objectNumber = 'SK-A-180';
    renderDetail(objectNumber);
  } else {
    hideDetailPage();
  }
});
  

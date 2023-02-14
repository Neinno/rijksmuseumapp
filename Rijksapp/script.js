function fetchData() {
    
    const url = "https://www.rijksmuseum.nl/api/nl/collection?key="+apikey;
    const apikey = "0TyrFANJ";
    
    const data = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}
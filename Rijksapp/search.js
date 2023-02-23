import { fetchData } from './api.js'

export function searchObject() {
    const searchInput = document.querySelector('form input[name="searchbar"]').value
    if(searchInput.length > 2)
    fetchData(searchInput)
}
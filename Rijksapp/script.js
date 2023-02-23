import { fetchData } from './api.js'
import { loader } from './loader.js'
import { render } from './render.js'
import { searchObject } from './search.js'

fetchData();
render();
loader();
searchObject();

function routeChanged() {
    console.log("Now viewing this art object...")
}

window.addEventListener("hashchange", routeChanged)

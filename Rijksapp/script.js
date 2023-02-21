import { fetchData } from './api.js'
import { render } from './render.js'
// import { loader } from '.loader.js'


fetchData();
render();


function routeChanged() {
    console.log("Now viewing this art object...")
}

window.addEventListener("hashchange", routeChanged)
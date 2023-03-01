import { fetchData } from './modules/api.js'
import { loader } from './modules/loader.js'
import { render, renderDetailPage} from './modules/render.js'
import { searchObject, fetchSearch } from './modules/search.js'

fetchData();
render();
loader();
searchObject();
fetchSearch();

window.addEventListener('onhashchange', renderDetailPage);

window.history.back();
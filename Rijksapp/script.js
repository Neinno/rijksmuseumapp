import { fetchData } from './api.js'
import { loader } from './loader.js'
import { render } from './render.js'
import { searchObject, fetchSearch } from './search.js'
import { renderDetail } from './renderDetail.js';

fetchData();
render();
loader();
searchObject();
fetchSearch();
renderDetail();
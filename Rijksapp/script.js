import { loader } from './modules/loader.js'
import { searchObject, fetchSearch } from './modules/search.js'
import { router } from './modules/routes.js'

router();
loader();
fetchSearch();
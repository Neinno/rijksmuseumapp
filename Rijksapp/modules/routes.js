import { fetchData } from './api.js'
import { renderDetail} from './render.js'
import { fetchSearch } from './search.js'

export function router() {

    routie({
        '': () => {
            fetchData();
        },
        'detail/:id': id => {
            renderDetail(id);
        },
        'search/:searchInput': searchInput => {
            fetchSearch(searchInput);
        }
    });

}


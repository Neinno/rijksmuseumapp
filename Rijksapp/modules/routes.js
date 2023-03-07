import { fetchData } from './api.js'
import { renderDetail} from './render.js'

export function router() {

    routie({
        'home': () => {
            fetchData();
        },
        'detail/:id': id => {
            renderDetail(id);
        }
    });

}


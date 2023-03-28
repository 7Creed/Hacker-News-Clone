import Stories from '../pages/stories.js';
import Item from '../pages/item.js';
import Favorites from '../pages/favorites.js';

const router = new Navigo(null, true, '#');
// console.log(router);

export default class Routerhandler {
    constructor() {
        this.createRoutes();     
    }

    createRoutes() {
        const routes = [
            { path: '/', page: Stories },
            { path: '/new', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },
            { path: '/item', page: Item },
            { path: '/favorites', page: Favorites }

        ];

        routes.forEach(({ path, page }) => {  // (route)
            router.on(path, () => {  // route.path
                page(path);  // route.page  // route.path
                // console.log(route.page());
            }).resolve();
        })
    }
}


// const router = new Navigo(null, true, '/');
// console.log(router);

// export default class Routerhandler {
//     constructor() {
//         this.createRoutes();    
//     }

//     createRoutes() {
//         const routes = [
//             { path: '/', page: Stories }
//         ];

//         routes.forEach(route => {
//             router.on(route.path, () => {
//                 route.page()
//                 console.log(route.page());
//             }).resolve();
//         })
//         // router.on('#/ask', () => {
//         //     route.page()
//         //     console.log(route.page());
//         // }).resolve();
//         router.resolve();
//     }
    
// }
import view from '../utils/view.js';
import Story from '../components/Story.js';
import baseUrl from '../utils/baseUrl.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../store.js';


export default async function Stories(path) { 
    const { favorites } = store.getState();
    // console.log(favorites)

    const stories = await getStories(path);
    const hasStories = stories.length > 0

    view.innerHTML = 
    `<div>
        ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('') : 'No stories'}
    </div>`;

    document.querySelectorAll(".favorite").forEach(favoriteButton => {
        favoriteButton.addEventListener("click", async function() {
            const story = JSON.parse(this.dataset.story);
            const isFavorited = checkFavorite(favorites, story);
            // if (isFavorited) {
            //     store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })
            // } else {
            //     store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })
            // }
            store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } }) 
            await Stories(path);
        });
    });


    // if(stories) {
    //     // view.innerHTML = `<div> ${ stories.map(story => JSON.stringify(story)) } </div>`   //`<div> ${stories} </div>`
    //     view.innerHTML = JSON.stringify(stories)  //`<div> ${stories} </div>`
        // console.log(stories)
    // } else {
    //     'No stories'
    // }

    // view.innerHTML = 
    // `<div> ${path} </div>`;
    // console.log(path)
}

async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new';

    if(isHomeRoute) {
        path = '/news';
    } else if (isNewRoute) {
        path = '/newest';
    }

    const response = await fetch(`${baseUrl}${path}`);
    const stories = await response.json();
    return stories;
}
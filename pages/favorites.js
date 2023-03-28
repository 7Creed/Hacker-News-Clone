import view from '../utils/view.js';
import checkFavorite from '../utils/checkFavorite.js';
// import Stories from './stories.js';
import store from '../store.js';
import Story from '../components/Story.js';
// import Save from '../utils/save.js';


export default function Favorites() {
    const { favorites } = store.getState();
    console.log(favorites)
    const hasFavorites = favorites.length > 0;
    
    view.innerHTML =    `<div>
                            ${ hasFavorites ? favorites.map((story, i) => Story({ 
                                ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) }) ).join(''): "Add some favorites!" }
                        </div>
                        `

    document.querySelectorAll(".favorite").forEach(favoriteButton => {
        favoriteButton.addEventListener("click", function() {
            const story = JSON.parse(this.dataset.story);
            const isFavorited = checkFavorite(favorites, story);
            // if (isFavorited) {
            //     store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })
            // } else {
            //     store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })
            // }
            store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } }) 
            Favorites();
        });
    });
    
}

//    saveNote(story)
    // $(window).bind({
    //     beforeunload: function(ev) {
    //         ev.preventDefault();
    //     },
    //     unload: function(ev) {
    //         ev.preventDefault();
    //     }
    // });
    // function saveNote() {
    //     localStorage.setItem('favorites', JSON.stringify(favorites));
    // };
    // JSON.parse(localStorage.getItem(favorites))



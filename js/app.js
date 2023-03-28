import RouterHandler from './router.js';
// import '../store.js';

window.onhashchange = () => {
    // console.log('changed');
    setActiveLink();
}

function setActiveLink() {
    const links = document.querySelectorAll(".header-link");
    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const currentPath = window.location.hash;
        if (currentPath === linkPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

class App {
    constructor() {
        new RouterHandler();
        // console.log('our app works!')
    }
}

new App();


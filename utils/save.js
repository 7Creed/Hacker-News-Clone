// import Story from '../components/Story.js';

export default function Save(story) {
    localStorage.setItem('stories',  JSON.stringify(story))
    JSON.parse(localStorage.getItem('stories'));
}
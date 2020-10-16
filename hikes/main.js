import Hikes from './hikes.js';

//create an instance of the Hikes class
const myHike = new Hikes('hikes');  

//on page load, call the showHikeList method
window.addEventListener("load", () => {
    myHike.showHikeList();
    
});



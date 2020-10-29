import Hikes from './hikes.js';

import Comments from './comment.js';

//create an instance of the Comments class
const myComment = new Comments('comments');  

//create an instance of the Hikes class
const myHike = new Hikes('hikes', myComment );  

//on page load, call the showHikeList method
window.addEventListener("load", () => {
    myHike.showHikeList();    
});



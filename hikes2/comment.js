import {readFromLS, writeToLS } from './ls.js';

let commentList = [];

export default class Comments {
    constructor(elementId, key) { 
    //set a variable with the element the comment list will be built in 
    this.parentElement = document.getElementById(elementId);   
    //a comment type to use as a key
    this.key = key; //what does it mean by 'type'?
    //build submit button
    this.submitButton = this.buildSubmitButton();    
    } //end constructor

    getAllComments() {
        //pull commentList from local storage and return
        commentList = readFromLS(this.key); 
        //create an empty array if there is no todo list (don't return null)
        if (commentList === null) {
            commentList = [];
        }
        return commentList;
    }

    //show comments in the parent element
    showCommentList() {
        //clear out anything already in the innerHTML 
        this.parentElement.innerHTML = ''; 
        //use getter function to get the list
        renderCommentList(this.parentElement, this.getAllComments());
    } 
    
    //show comments for only one hike in hike detail page
    showOneHikeComments(hikeName) {
        const oneHikeComments = filterCommentsByName(this.getAllComments(), hikeName);
        console.table(oneHikeComments);
        this.parentElement.innerHTML = '';
        renderCommentList(this.parentElement, oneHikeComments);
        newComment(this.parentElement);
        this.parentElement.appendChild(this.submitButton);
    }

    addComment(e) {
        const text_box = document.getElementById('myComment'); 
        const text = text_box.value;
        //empty the text field for the next input
        text_box.value = ''; 
        //add comment only if there is content
        if (text.length > 0) {
            //get hikeName
            console.table(document.getElementsByTagName('h2'));
            const hikeName = document.getElementsByTagName("h2")[0].innerText; 
            console.log(hikeName);
            const newComment = {
                name: hikeName,  
                date: new Date(),
                content: text
            };
        commentList.push(newComment);
        //write to local storage
        writeToLS(this.key, commentList); 
        //refresh the view
        this.showOneHikeComments(hikeName);
        }
               
    }

    buildSubmitButton() {
        const submitButton = document.createElement("button");
        submitButton.innerHTML = 'Submit';
        submitButton.addEventListener('click', (e) => this.addComment(e));
        return submitButton;
    } 

}//end class  


function renderCommentList(parent, comments) {
    //parent is ul, comments is the array being passed in
    //create item for non-repeating heading
    const item = document.createElement("li"); 
    item.innerHTML = ` <h2>Comments</h2>`
    parent.appendChild(item);
    //loop through each task object and append an li to the view
    comments.forEach(comment => {
        parent.appendChild(renderOneComment(comment));
    });
}

function renderOneComment(comment) {
    //create an li for the comment object
    const item = document.createElement("li");
    item.myName = comment.name; //this is the hike name
    item.setAttribute("id", "${comment.date}");  
    item.innerHTML = ` <div class="comment">    
        <p>${comment.name}: ${comment.content}</p>
    </div> `
    return item;
}

function newComment(parent) {
    //parent is ul, create item for text input and submit button 
    const item = document.createElement("li");
    //item.id = "myComment"; 
    item.innerHTML = ` <textarea id="myComment" placeholder="Comment on this hike"></textarea> `
    parent.appendChild(item);
}

function filterCommentsByName(comments, hikeName) { 
    //filter array by hikeName
    const oneHikeComments = comments.filter(comment => comment.name == hikeName);
    return oneHikeComments;

}
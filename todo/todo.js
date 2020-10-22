// import { readFromLS, writeToLS } from '*/.ls.js';
// import {  } from '*/utilities.js';

//array to hold todo list items
//let todoList = []; 

//let todo = [];

//change to empty array after testing
let todoList = [
    {
        "id": new Date(),
        "content": "Dummy Task 1",
        "completed": false 
    },
    {
        "id": new Date(),
        "content": "Dummy Task 2",
        "completed": true 
    },
    {
        "id": new Date(),
        "content": "Dummy Task 3",
        "completed": false 
    },
    {
        "id": new Date(),
        "content": "Dummy Task 4",
        "completed": true 
    },
    {
        "id": new Date(),
        "content": "Dummy Task 5",
        "completed": false 
    },
    {
        "id": new Date(),
        "content": "Dummy Task 6",
        "completed": false 
    },
]

//print out values in todoList array objects
todoList.forEach((todoList)=>console.log(todoList.id,todoList.content,todoList.completed)); 


//on load insert todo form into page
export default class Todos {
    constructor(elementId, key) {
        this.parentElement = document.getElementById(elementId); //ul id todos- in the constructor you should set a variable with the element our todo list will be built in
                
// in the constructor you should set the key we will use to read/write from localStorage
        //set key here
        this.myKey = 'todo';

        //pull the whole array
    } //end constructor



    //getter function to get all tasks
    getAllTasks() {
        return todoList;  //chg this when using real data
    }

    // //getter function using local storage
    // getAllTasks(key) {  
    //     if (todoList === null) {
    //         //get from localstorage
    //         todoList = readFromLS(key) || [];
    //     }
            
    //     return todoList;
    // }

    //show tasks in the parentElement
    showTaskList() {
        console.log("in showTaskList");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderTodoList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total tasks
        document.getElementById("total").innerHTML = todoList.length + " tasks left"; //change to real array
    }
    //show only active tasks in the parentElement
    showActiveTasks() {
        console.log("in showActiveTasks");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderActiveList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total active tasks
        let justActive = todoList.filter(task => task.completed == false); //change to real array
        console.log(justActive);
        document.getElementById("total").innerHTML = justActive.length + " tasks left"; 
    }
    //show only completed tasks in the parentElement
    showCompletedTasks() {
        console.log("in showCompletedTasks");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderCompletedList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total active tasks
        let justCompleted = todoList.filter(task => task.completed == true); //change to real array
        console.log(justCompleted);
        document.getElementById("total").innerHTML = justCompleted.length + " tasks left"; 
    }
    //create a todo object based on input text, push it into the array, render it in the list
    addTodo() { //2 parameters? value of text box, and key?- or just key
        let text_box = document.getElementById('myTask');
        console.log("in addTodo");
        const todo = {
        id: new Date(),
        content: text_box.value, 
        completed: false 
        };

        todoList.push(todo); 
        writeToLS(key, todoList);
        
        console.log(todoList);
        text_box.value = null;
        this.showTaskList();
    }
    //add Event Listener on ea li (could be on ul?)
    addTaskListener() {
      //loop through the children of the list and attach a listener to each
      const childrenArray = Array.from(this.parentElement.children);
      childrenArray.forEach(child => {
        child.addEventListener('click', e => {
          this.deleteOrCheck(e); 
        });
      });      
    }

    //put this function in the event listener, it decides which function to call
    deleteOrCheck(e) {
        console.log(e.target.className);
        if(e.target.className == 'delete')
          this.deleteTask(e);
        else {
            this.checkTask(e);
        }  
    }

    //
    checkTask(e) {
        //e.target.classList.toggle('.checked'); //adds checked class if doesn't have it, or removes
        const task = e.target.nextElementSibling; //get the text of the checked task 
        console.log(e.target.checked);
        if(e.target.checked){
            task.style.textDecoration = "line-through";
            //task.style.color = "#ff0000";
          }else {
            task.style.textDecoration = "none";
            //task.style.color = "#2f4f4f";
          }
    }

    deleteTask(e) {
        //change view style to hidden- add classList
        e.target.classList.add('.hidden');
        //remove from array, change localstorage
    }

    // Find all the .delete buttons, then put a click event listener on each of them
    // document.querySelectorAll('.delete').forEach(function(elem) {
	//     elem.addEventListener('click', function() {
	// 	    this.closest('.task').remove();
    //     });    
    //  });

    
} //end class

// In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

*/
function saveTodo(task, key) { }



// A todo should look like this: { id : timestamp, content: string, completed: bool }
// Look at how this is done in the Note It app
function renderTodoList(parent, tasks) { //parent is ul, tasks is the array being passed in
    console.log("in renderTodoList");
    tasks.forEach(task => {
        parent.appendChild(renderOneTask(task));
    });
  }

function renderActiveList(parent, tasks) {
    console.log("in renderActiveList");
    tasks.forEach(task => {
        //search to check for active status
        if(task.completed === false) { 
          parent.appendChild(renderOneTask(task));
        } 
    });    
} 

function renderCompletedList(parent, tasks) {
    console.log("in renderCompletedList");
    tasks.forEach(task => {
        //search to check for completed status
        if(task.completed) { 
            parent.appendChild(renderOneTask(task));
        }  
    });    
}

function renderOneTask(task) {
    console.log("in renderOneTask");
    const item = document.createElement("li");
    //item.myName = hike.name; //this was for styling, don't need?
    item.classList.add('task'); //do I need this?- only for CSS, remove if don't use it
    item.setAttribute('data-completed', task.completed); //use to make getting completed status for a specific task easier //do I need this?
    item.innerHTML = `<div class="detail">
        <input type="checkbox">  
        <label>${task.content}</label>
        <button class="delete">X</button>
        </div>`; 
    document.querySelector('.taskList').style.display = 'block'; //do I need this, should it be done in CSS
    return item;
  }


//onchange="toggleCheckbox(this)" //possibly put in checkbox


// //get the form element
// const form = document.querySelector('.js-form');

// //submit event listener
// form.addEventListener
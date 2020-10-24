//import { readFromLS, writeToLS } from '.*/ls.js';
// import {  } from '*/utilities.js';

// read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
// @return {array} The value as an array of objects /
export function readFromLS(key) { 
    return JSON.parse(localStorage.getItem(key)); 
  }



// write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
// * @param {array} data The information to be stored as an array of objects. Must be serialized.

// */
  export function writeToLS(key, data) { 
       localStorage.setItem(key, JSON.stringify(data));  
  }

//array to hold todo list items
let todoList = []; 

//change to empty array after testing
// let todoList = [
//     {
//         "id": 1, //Date.now(),
//         "content": "Dummy Task 1",
//         "completed": false 
//     },
//     {
//         "id": 2, //Date.now(),
//         "content": "Dummy Task 2",
//         "completed": true 
//     },
//     {
//         "id": 3, //Date.now(),
//         "content": "Dummy Task 3",
//         "completed": false 
//     },
//     {
//         "id": 4, //Date.now(),
//         "content": "Dummy Task 4",
//         "completed": true 
//     },
//     {
//         "id": 5, //Date.now(),
//         "content": "Dummy Task 5",
//         "completed": false 
//     },
//     {
//         "id": 6, //Date.now(),
//         "content": "Dummy Task 6",
//         "completed": false 
//     },
// ]

//print out values in todoList array objects
//todoList.forEach((todoList)=>console.log(todoList.id,todoList.content,todoList.completed)); 


//on load insert todo form into page
export default class Todos {
    constructor(elementId, key) {
        this.parentElement = document.getElementById(elementId); //ul id todos- in the constructor you should set a variable with the element our todo list will be built in
                
    //set the key to use to read/write from localStorage
    this.key = key;

        //pull the whole array
    } //end constructor

    //getter function to get all tasks
    getAllTasks() {
        console.log("in getAllTasks");
        //get the todoList from local storage
        todoList = readFromLS(this.key);
        
        //create an empty array if there is no todo list
        if (todoList === null) {
            todoList = [];
        }
        console.log(todoList);
        return todoList;  //chg this when using real data, use local storage, return null
    }

    //show tasks in the parentElement
    showTaskList() {
        console.log("in showTaskList");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderTodoList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total tasks
        document.getElementById("total").innerHTML = todoList.length + " tasks left";
           
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
        console.log("in addTodo");
        const text_box = document.getElementById('myTask');
        const content = text_box.value;
        //add task only if there is content:
        if (content.length > 0) {
            const todo = {
            id: Date.now(),
            content: text_box.value, 
            completed: false 
            };

            todoList.push(todo); 
            writeToLS(this.key, todoList);
            
            console.log(todoList);
            
            this.showTaskList(); //refresh the view
        }
        text_box.value = null; //empty the text field for next input
    }
    //add Event Listener on ea li (could be on ul?)
    addTaskListener() {
      //loop through the children of the list and attach a listener to each
      const childrenArray = Array.from(this.parentElement.children);
      childrenArray.forEach(child => {
        child.addEventListener('click', e => {
          if (e.target.className == 'delete') {
            this.deleteTask(e, child.id);
          }
          else {
            this.checkTask(e, child.id);      
          }
        });
      });      
    }

    //
    checkTask(e, id) {
        //e.target.classList.toggle('.checked'); //adds checked class if doesn't have it, or removes
        console.log(id);
        const task = e.currentTarget; //get the text of the checked task 
        console.log(e.target.checked);

        //find item in array and toggle completed status
        const foundItem = todoList.find(x => { return (x['id']-id) == 0 });
        console.log(JSON.stringify(foundItem));
        foundItem.completed = !foundItem.completed;
    
        //change style immediately... do I need this?
        if(e.target.checked){
            task.style.textDecoration = "line-through";
            //task.style.color = "#ff0000";
        } else {
            task.style.textDecoration = "none";
            //task.style.color = "#2f4f4f";
          }


          //todoList.push(todo); 
          writeToLS(this.key, todoList);
          
          console.log(todoList);
          
          this.showTaskList(); //refresh the view  
    }

    deleteTask(e, id) {
        console.log(e.target.className, id);
        const index = todoList.findIndex(x => { return (x['id']-id) == 0 });
        console.log(JSON.stringify(index));
        todoList.splice(index, 1);

        const li = e.target.parentNode;
        console.log(li);

        writeToLS(this.key, todoList);

        this.showTaskList(); //refresh the view  

    }

    
} //end class

// In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

*/
function saveTodo(task, key) { }



// A todo should look like this: { id : timestamp, content: string, completed: bool }

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
    item.id = task.id;
    //item.style.textDecoration = "${task.completed ? 'line-through' : 'none'}";
   // item.classList.add(task.completed ? "complete" : ""); 
    //console.log(item.style);
    //item.setAttribute('data-completed', task.completed); //use to make getting completed status for a specific task easier //do I need this?
    item.innerHTML = `<div class="${task.completed ? 'checked' : ''}">
        <input type="checkbox" ${task.completed ? 'checked' : ''}>  
        <label>${task.content}</label>
        <button class="delete">x</button>
        </div>`; 
        
    //document.querySelector('.taskList').style.display = 'block'; //do I need this, should it be done in CSS
    return item;
  }

//   task.style.textDecoration=${task.completed ? 'line-through' : ''}

//   if(e.target.checked){
//     task.style.textDecoration = "line-through";
//     //task.style.color = "#ff0000";
// } else {
//     task.style.textDecoration = "none";
//     //task.style.color = "#2f4f4f";
//   }


  //onchange="toggleCheckbox(this)" //possibly put in checkbox


// //get the form element
// const form = document.querySelector('.js-form');

// //submit event listener
// form.addEventListener
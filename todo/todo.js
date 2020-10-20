//array to hold todo list items
//let todoList = []; 

let todo = [];

//insert dummy data objects into array for testing
let dummyTasks = [
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

//print out values in dummyTask array objects
dummyTasks.forEach((dummyTask)=>console.log(dummyTask.id,dummyTask.content,dummyTask.completed)); 


//on load insert todo form into page
export default class Todos {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId); //ul id todos- in the constructor you should set a variable with the element our todo list will be built in
                
// in the constructor you should set the key we will use to read/write from localStorage

    } //end constructor
    //getter function to get all tasks
    getAllTasks() {  
        return dummyTasks;  //chg this when using real data
    }
    //show tasks in the parentElement
    showTaskList() {
        console.log("in showTaskList");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderTodoList(this.parentElement, this.getAllTasks());
        //show total tasks
        document.getElementById("total").innerHTML = dummyTasks.length + " tasks left"; //change to real array
    }
    //show only active tasks in the parentElement
    showActiveTasks() {
        console.log("in showActiveTasks");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderActiveList(this.parentElement, this.getAllTasks());
        //show total active tasks
        let justActive = dummyTasks.filter(task => task.completed == false); //change to real array
        console.log(justActive);
        document.getElementById("total").innerHTML = justActive.length + " tasks left"; 
    }
    //show only completed tasks in the parentElement
    showCompletedTasks() {
        console.log("in showCompletedTasks");
        this.parentElement.innerHTML = ''; //clear out anything already in the innerHTML 
        //use getter function to get the list
        renderCompletedList(this.parentElement, this.getAllTasks());
        //show total active tasks
        let justCompleted = dummyTasks.filter(task => task.completed == true); //change to real array
        console.log(justCompleted);
        document.getElementById("total").innerHTML = justCompleted.length + " tasks left"; 
    }
    //create a todo object based on input text, push it into the array, render it in the list
    addTodo() {
        let text_box = document.getElementById('myTask');
        console.log("in addTodo");
        const todo = {
        id: new Date(),
        content: text_box.value, //does this need to be a separate line?
        completed: false 
        };

        dummyTasks.push(todo); //change to real array name
        console.log(dummyTasks);
        text_box.value = null;
        this.showTaskList();

    }

    
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
    item.innerHTML = `<div class="detail"><input type="checkbox"><label>${task.content}</label><span class="delete">X</span></div>`; //was ${task}, using content from array object
    document.querySelector('.taskList').style.display = 'block'; //do I need this, should it be done in CSS
    // const todo = {
    //     text, //string from label- task
    //     checked: false,
    //     id: Date.now(),
    // }; 
    //create object and push into array  //  todoItems.push(todo); //change to array name
    return item;
  }


// function renderTodoList(list, element) {
//     let ul = document.querySelector('ul'); //element, ul  -- I don't think I need this line
//     let li = document.createElement('li');
//     li.innerHTML = `<input type="checkbox"><label>${task}</label><span class="delete">X</span>`;  
//     ul.appendChild(li); //doing this in renderTodoList
//     document.querySelector('.taskList').style.display = 'block'; //do I need this, should it be done in CSS
//     const todo = {
//         text, //string from label- task
//         checked: false,
//         id: Date.now(),
//     };
// }
//  foreach todo in list, build a li element for the todo, and append it to element
//@param {array} list The list of tasks to render to HTML @param {element} element The DOM element to insert our list elements into.





// //get the form element
// const form = document.querySelector('.js-form');

// //submit event listener
// form.addEventListener
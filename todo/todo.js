import { readFromLS, writeToLS } from './ls.js';
import { renderTodoList, renderActiveList, renderCompletedList } from './utilities.js';

//array to hold todo list items
let todoList = []; 

//on load insert todo form into page
export default class Todos {
    constructor(elementId, key) {
        //set a variable with the element the todo list will be built in- ul id todos
        this.parentElement = document.getElementById(elementId);                
        //set the key to use to read/write from localStorage
        this.key = key;
    } //end constructor

    //getter function to get all tasks
    getAllTasks() {
        //get the todoList from local storage
        todoList = readFromLS(this.key);        
        //create an empty array if there is no todo list
        if (todoList === null) {
            todoList = [];
        }
        return todoList;  
    }

    //show tasks in the parentElement
    showTaskList() {
        //clear out anything already in the innerHTML 
        this.parentElement.innerHTML = ''; 
        //use getter function to get the list
        renderTodoList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total tasks
        document.getElementById("total").innerHTML = todoList.length + " left to do";
           
    }

    //show only active tasks in the parentElement
    showActiveTasks() {
        //clear out anything already in the innerHTML
        this.parentElement.innerHTML = '';  
        //use getter function to get the list
        renderActiveList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total active tasks
        let justActive = todoList.filter(task => task.completed == false); 
        document.getElementById("total").innerHTML = justActive.length + " left to do"; 
    }

    //show only completed tasks in the parentElement
    showCompletedTasks() {
        //clear out anything already in the innerHTML
        this.parentElement.innerHTML = ''; 
        //use getter function to get the list
        renderCompletedList(this.parentElement, this.getAllTasks());
        this.addTaskListener();
        //show total active tasks
        let justCompleted = todoList.filter(task => task.completed == true); 
        document.getElementById("total").innerHTML = justCompleted.length + " left to do"; 
    }

    //create a todo object based on input text, push it into the array, render it in the list
    addTodo() { 
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
        //save to local storage
        writeToLS(this.key, todoList);
        //refresh the view
        this.showTaskList(); 
        }
        //empty the text field for next input
        text_box.value = null; 
    }

    //add Event Listener on ea li (could be on ul?)
    addTaskListener() {
      //loop through the children of the list and attach a listener to each
      const childrenArray = Array.from(this.parentElement.children);
      childrenArray.forEach(child => {
        child.addEventListener('click', e => {
          //determine whether it is a delete or checkbox, and pass to the correct function
          if (e.target.className == 'delete') {
            this.deleteTask(e, child.id);
          }
          else {
            this.checkTask(e, child.id);      
          }
        });
      });      
    }

    //handle checkbox
    checkTask(e, id) {
        //get the text of the checked task
        const task = e.currentTarget;  
        //find item in array and toggle completed status
        const foundItem = todoList.find(x => { return (x['id']-id) == 0 });
        foundItem.completed = !foundItem.completed;
        //save to local storage
        writeToLS(this.key, todoList);
        //refresh the view 
        this.showTaskList();  
    }

    //delete task from array and local storage when X is clicked
    deleteTask(e, id) {
        //find index of item in array and remove it from array
        const index = todoList.findIndex(x => { return (x['id']-id) == 0 });
        todoList.splice(index, 1);
        //save to local storage
        writeToLS(this.key, todoList);
        //refresh the view 
        this.showTaskList();  
    }
    
} //end class






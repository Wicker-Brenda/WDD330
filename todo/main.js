import Todos from './todo.js';

//create an instance of the Todos class
const myTodos = new Todos('todos');

//on page load, call the ______ method
window.addEventListener("load", () => {
    //myTodos.showTaskList();
    //myTodos.showActiveTasks();
    myTodos.showCompletedTasks();
});


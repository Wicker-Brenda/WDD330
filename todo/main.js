import Todos from './todo.js';

//create an instance of the Todos class
const myTodos = new Todos('todos');

//on page load, call the ______ method
window.addEventListener("load", () => {
    myTodos.showTaskList();
});

allBtn.addEventListener("click", () => {
    myTodos.showTaskList();
})

activeBtn.addEventListener("click", () => {
    myTodos.showActiveTasks();
})

completeBtn.addEventListener("click", () => {
    myTodos.showCompletedTasks();
})

add.addEventListener("click", () => {
    myTodos.addTodo();
})

myTask.addEventListener("keydown", function (e) {
    //"Enter" key is 13
    if (e.keyCode === 13) {
        myTodos.addTodo();
        // e.preventDefault();
    }
});



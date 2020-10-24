//render todo views
// A todo should look like this: { id : timestamp, content: string, completed: bool }

export function renderTodoList(parent, tasks) { 
    //parent is ul, tasks is the array being passed in
    //loop through each task object and append an li to the view
    tasks.forEach(task => {
        parent.appendChild(renderOneTask(task));
    });
  }

export function renderActiveList(parent, tasks) {
    //loop through each task object, only append an li if it is active
    tasks.forEach(task => {
        if(task.completed === false) { 
          parent.appendChild(renderOneTask(task));
        } 
    });    
} 

export function renderCompletedList(parent, tasks) {
    //loop through each task object, only append an li if it is completed
    tasks.forEach(task => {
        if(task.completed) { 
            parent.appendChild(renderOneTask(task));
        }  
    });    
}

//no need to export, this is only called by the above functions
function renderOneTask(task) {
    //create an li for the task object
    const item = document.createElement("li");
    item.classList.add('task'); 
    item.id = task.id;
    item.innerHTML = `<div class="${task.completed ? 'checked' : ''}">
        <input type="checkbox" ${task.completed ? 'checked' : ''}>  
        <label>${task.content}</label>
        <button class="delete">x</button>
        </div>`; 
    return item;
  }

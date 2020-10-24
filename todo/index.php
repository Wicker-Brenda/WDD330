<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="author" content="Brenda Wicker" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo App</title>
  <link rel="stylesheet" href="todo.css" />
 
 </head>

  <body>
    <section class="wrapper">
        <h1>Todos</h1>
        <div class="taskList">
            <ul id='todos'></ul>
        </div> 
        <div id="footer">
            <div id="total" class="total"></div>
            <button id="completeBtn" class="filters">Completed</button>
            <button id="activeBtn" class="filters">Active</button>
            <button id="allBtn" class="filters">All</button>
        </div>           
        <div id="inputArea" class="input-area"> 
            <input type="text" id="myTask" class="my-task" placeholder="Type a new task..." autofocus>
            <button id="add" class="addBtn">+</button>  
        </div>
    </section>
    <script src="main.js?version=<?=filectime('main.js');?>" type="module"></script>
  </body>

 </html>
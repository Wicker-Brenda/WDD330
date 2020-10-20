<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="UTF-8" />
  <meta name="author" content="Brenda Wicker" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo App</title>
  <link rel="stylesheet" href="todo.css" />
  <script src="main.js?version=<?=filectime('main.js');?>" type="module"></script>
 </head>

 <body>
    <section class="wrapper">
        <h1>Todos</h1>
        <div class="taskList">
            <ul id='todos'>
                <li><input type="checkbox"><label>Dummy task 1</label><span class="delete">X</span></li>
            </ul>
            <div id="footer">
                <div id="total"></div>
                <button id="allBtn">All</button>
                <button id="activeBtn">Active</button>
                <button id="completeBtn">Completed</button>
            </div>
        </div>    
        <div id="inputArea"> 
            <input type="text" id="myTask">
            <button id="add" class="addBtn">+</button>  
        </div>
    </section>
 </body>

 </html>
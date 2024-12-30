//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ecouteurs
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click" , deleteCheck);

//functions
function addTodo(event){
    event.preventDefault();//sur les boutons de formulaires on utilise le preventdefault
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create a Li
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Button Check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Button Trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //add new todo to the TodoList
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove;
        });
    }
    //Check Todo
    if(item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle("completed");
    }
}
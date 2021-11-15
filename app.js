//selector
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(e){
    e.preventDefault()
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create li 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);
    //check button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    //clear input value
    todoInput.value = "";
}

function deleteCheck(e) {
 const item = e.target;
 //delete
 if (item.classList[0] === 'trash-btn'){
     const todo = item.parentElement;
     todo.classList.add("fall")
     todo.remove();
 }

 if(item.classList[0] === "complete-btn"){
     const todo = item.parentElement
     todo.classList.toggle('completed');
 }
}
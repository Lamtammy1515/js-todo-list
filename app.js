//selector
const todo = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//event listeners
todoButton.addEventListener('click', addTodo);

//functions

function addTodo(e){
    e.preventDefault()
    console.log('hello')
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create li 
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-checked"></i>'
    completedButton.classList.add("complete-btn")
    todoList.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn")
    todoList.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}
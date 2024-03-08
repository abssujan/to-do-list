const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

// click event 
todoButton.addEventListener('click', addToDO);

// function

function addToDO(event){
    event.preventDefault();
    // create div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li 
    const newToDo = document.createElement('li');
    newToDo.innerText = 'hey';
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    // check markButton 
    const completeButon = document.createElement('button');
    completeButon.innerHTML = `<i class="fas fa-check"></>`;
    completeButon.classList.add('complete-btn');
    todoDiv.appendChild(completeButon);
    // check Trash button 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to-do list 
    todolist.appendChild(todoDiv)
}
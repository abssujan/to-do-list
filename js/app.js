const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// click event 
todoButton.addEventListener('click', addToDO);
todolist.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

// function

function addToDO(event){
    event.preventDefault();
    // create div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create li 
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
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
    //clear input value 
    todoInput.value = ''
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //check mark 
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('complete')
    }
}

function filterTodo(e){
    const todos = todolist.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}
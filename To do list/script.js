const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('.btn-delete-all');
const taskList = document.querySelector('#taskList');
let tasks;
//Add new a task

form.addEventListener('submit', addNewTask);

function addNewTask(e) {

    if (input.value === '') {
        alert('Please enter a new task.');

    } else {
        createTaskElement(input.value);
        tasks = getTasksFromLS();
        tasks.push(input.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value='';
    }
    e.preventDefault();

}

function createTaskElement(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(text));
    //create a (delete button)
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.className = 'float-right delete-item';
    a.innerHTML = '<i class="far fa-trash-alt"></i>';
    //add a to li
    li.appendChild(a);
    //add li to ul
    taskList.appendChild(li);

}

function getTasksFromLS() {
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

//Delete a task

taskList.addEventListener('click', deleteTask);

function deleteTask(e) {

    if (e.target.className === 'far fa-trash-alt') {
        tasks = getTasksFromLS();

        tasks.forEach(function (item, index) {
            if (item === e.target.parentElement.parentElement.textContent) {
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                e.target.parentElement.parentElement.remove();
            }
        });
    }

    e.preventDefault();
}

//Delete all tasks

btnDeleteAll.addEventListener('click', deleteAll);

function deleteAll(e) {

    localStorage.clear();

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    e.preventDefault();

}

//Load items
loadItems();

function loadItems() {
    items = getTasksFromLS();
    items.forEach(function (item) {
        createTaskElement(item);
    });
}
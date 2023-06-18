// This code creates a new task by adding an inputted value to a list. It also adds a check button and a delete button. 

// variables

const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#input-task');

// event listeners

const task = document.createElement('div');
task.classList.add('task');

const li = document.createElement('li');
li.innerText = `${inputTask.value}`;
task.appendChild(li);

const checkBtn = document.createElement('button');
checkBtn.innerHTML = '<i class="fas fa-check"></i>';
checkBtn.classList.add('check-btn');
task.appendChild(checkBtn);

const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
deleteBtn.classList.add('delete-btn');
task.appendChild(deleteBtn);

// alert if no task entered in input field
 if(inputTask.value === '') {
    alert('Please enter a task');
} else {
    taskContainer.appendChild(task);
}

inputTask.value = '';


// functions

// create a new task


// check if input is empty

// add task to task container

// clear the input field

// delete or check a task

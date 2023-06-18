// DOM elements
const addTaskBtn = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');
const completedTasksContainer = document.querySelector('#completed-tasks-container');
const inputTask = document.querySelector('#input-task');

// Create a new task
function createTask(taskName) {
  // Create task container
  const task = document.createElement('div');
  task.classList.add('task');

  // Create task name element
  const taskNameElement = document.createElement('li');
  taskNameElement.innerText = taskName;
  task.appendChild(taskNameElement);

  // Create check button
  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.classList.add('checkTask');
  task.appendChild(checkBtn);

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('deleteTask');
  task.appendChild(deleteBtn);

  // Function to toggle task completion
  function toggleTaskCompletion() {
    task.classList.toggle('completed');
    taskNameElement.style.textDecoration = task.classList.contains('completed') ? 'line-through' : 'none';
    checkBtn.classList.toggle('unchecked');
    checkBtn.innerHTML = task.classList.contains('completed') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-check"></i>';


    if (task.classList.contains('completed')) {
      completedTasksContainer.appendChild(task);
    } else {
      taskContainer.appendChild(task);
    }
  }

  // Add event listener to check button
  checkBtn.addEventListener('click', function() {
    toggleTaskCompletion();
  });

  // Add event listener to delete button
  deleteBtn.addEventListener('click', function() {
    task.remove();
  });

  return task;
}

// Add task event listener
addTaskBtn.addEventListener('click', function() {
  const taskName = inputTask.value.trim();

  if (taskName !== '') {
    const task = createTask(taskName);
    taskContainer.appendChild(task);
    inputTask.value = '';
  } else {
    alert('Please enter a task');
  }
});
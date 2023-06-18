// DOM elements variables
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
    // Toggle the completed class on the task
    task.classList.toggle('completed');
    // Toggle the text decoration on the task name element
    taskNameElement.style.textDecoration = task.classList.contains('completed') ? 'line-through' : 'none';
    // Toggle the check button icon
    checkBtn.classList.toggle('unchecked');
    // Change the check button icon to check or times
    checkBtn.innerHTML = task.classList.contains('completed') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-check"></i>';

    // Move the task to the completed tasks container if it is completed
    if (task.classList.contains('completed')) {
      completedTasksContainer.appendChild(task);
    } else {
      // Move the task to the task container if it is not completed
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

// Add task event listener for button click
addTaskBtn.addEventListener('click', addTask);

// Add task event listener for Enter key press
inputTask.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Function to add a new task
// The addTask function is called when the user clicks the Add Task button
function addTask() {

// Get the task name from the input field
  const taskName = inputTask.value.trim();

  // Check if the task name is not empty
  if (taskName !== '') {
    // Create a new task
    const task = createTask(taskName);
    // Add the task to the task container
    taskContainer.appendChild(task);
    // Clear the input field
    inputTask.value = '';
  } else {
    // Alert the user to enter a task
    alert('Please enter a task');
  }
}
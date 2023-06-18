// variables
const taskContainer = document.querySelector('#task-container');
const completedTasksContainer = document.querySelector('#completed-tasks-container');

// event listener for move to completed tasks button
taskContainer.addEventListener('click', function(e) {
    const checkBtn = e.target.closest('.checkTask');
    if (checkBtn) {
        const task = checkBtn.parentElement;
        taskContainer.removeChild(task);
        task.classList.add('completed');
        completedTasksContainer.appendChild(task);
        checkBtn.disabled = true;
    }
});
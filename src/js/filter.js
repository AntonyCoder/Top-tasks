import { currentTasks } from "./taskData"

export function filter() {
    const searchField = document.querySelector('.search-field');

    searchField.addEventListener('input', () => {
        const inputText = searchField.value.toLowerCase();
        const newArr = currentTasks.filter(item => {
            return item.taskName.toLowerCase().includes(inputText)
        })
        const allTasks = document.querySelector('.all-tasks');
        const allTaskText = document.querySelector('.all-task-text');

        clear();
        if (newArr.length === 0) {
            if (!allTaskText) {
                const allTaskText = document.createElement('p');
                allTaskText.classList.add('all-task-text');
                allTaskText.textContent = 'No tasks found';
                allTasks.appendChild(allTaskText);
            }
        } else {
            if (allTaskText) {
                allTaskText.remove();
            }
            newArr.forEach(task => {
                allTasks.appendChild(task.createNewTask());
            })
        }

    })
}

function clear() {
    const tasks = document.querySelectorAll('.all-tasks .task');
    for (const task of tasks) {
        task.remove();
    }
}
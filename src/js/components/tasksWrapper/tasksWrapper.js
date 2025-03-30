import './tasksWrapper.css';
import { currentTasks } from '../../taskData';

export class TasksWrapper {
    constructor() {
        this.currentTasks = currentTasks;
    }

    renderTasksWrapper() {
        this.container = document.querySelector('.container');

        //Блок с задачами
        this.tasksWrapper = document.createElement('div');
        this.tasksWrapper.classList.add('tasks-wrapper');
        this.container.appendChild(this.tasksWrapper);

        //Закрепленные задачи
        this.pinnedTasks = document.createElement('div');
        this.pinnedTasks.classList.add('pinned-tasks');
        this.tasksWrapper.appendChild(this.pinnedTasks);

        const pinnedText = document.createElement('p');
        pinnedText.classList.add('pinned-text');
        pinnedText.textContent = 'No pinned tasks';

        const pinnedTitle = document.createElement('h2');
        pinnedTitle.textContent = 'Pinned:';
        pinnedTitle.classList.add('task-title');
        this.pinnedTasks.insertAdjacentElement('afterbegin', pinnedTitle);
        this.pinnedTasks.appendChild(pinnedText);

        //Все задачи
        this.allTasks = document.createElement('div');
        this.allTasks.classList.add('all-tasks');
        this.tasksWrapper.appendChild(this.allTasks);

        const taskTitle = document.createElement('h2');
        taskTitle.textContent = 'All Tasks:';
        taskTitle.classList.add('task-title');
        this.allTasks.insertAdjacentElement('afterbegin', taskTitle);
    }

    renderTasks() {
        const allTasks = document.querySelector('.all-tasks');
        this.clear();
        
        this.currentTasks.forEach((task) => {
           allTasks.appendChild(task.createTask());
        })
    }

    clear(){
        const tasks = document.querySelectorAll('.task');

        for(const task of tasks){
            task.remove();
        }
    }
}
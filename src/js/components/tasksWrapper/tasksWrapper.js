import './tasksWrapper.css';
import { currentTasks } from '../../taskData';
import { pinnedTasks } from '../../taskData';

export class TasksWrapper {
    constructor() {
        this.currentTasks = currentTasks;
        this.pinnedTasks = pinnedTasks
    }
    //Отрисовка блока с задачами 
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

    //Отрисовка задач из массива
    renderTasks() {
        const allTasks = document.querySelector('.all-tasks');
        this.clear();

        this.currentTasks.forEach(task => {
            allTasks.appendChild(task.createNewTask())
        })
    }

    //Добавление задач в закреп
    addPinTask(e) {
        const tasksWrapper = document.querySelector('.all-tasks');

        const pinnedTasks = document.querySelector('.pinned-tasks');


        if (e.target.closest('.all-tasks')) {
            this.currentTasks.forEach((task, index) => {
                if (task.isPinned === true) {
                    this.pinnedTasks.push(task);
                    this.currentTasks.splice(index, 1);
                    const tasks = tasksWrapper.children;
                    tasksWrapper.removeChild(tasks[index + 1]);

                    const newPinTask = this.pinnedTasks.at(-1);
                    pinnedTasks.appendChild(newPinTask.createPinTask());
                    this.removePinnedText();
                }
            })
        } else {
            this.pinnedTasks.forEach((task, index) => {
                if (task.isPinned === false) {
                    this.currentTasks.push(task);
                    this.pinnedTasks.splice(index, 1);
                    const tasks = pinnedTasks.children;
                    pinnedTasks.removeChild(tasks[index + 1]);

                    const newAllTask = this.currentTasks.at(-1);
                    tasksWrapper.appendChild(newAllTask.createNewTask());

                    this.addPinnedText();
                }
            })
        }
    }
    //Удаление надписи No pinned tasks
    removePinnedText() {
        const pinnedText = document.querySelector('.pinned-text');
        if (pinnedText) {
            pinnedText.remove();
        }
    }

    //Добавление надписи No pinned tasks
    addPinnedText() {
        if (this.pinnedTasks.length === 0) {
            const pinnedTasks = document.querySelector('.pinned-tasks');
            const pinnedText = document.createElement('p');
            pinnedText.classList.add('pinned-text');
            pinnedText.textContent = 'No pinned tasks';
            pinnedTasks.appendChild(pinnedText);
        }
    }
    //Очистка блока All Tasks
    clear() {
        const tasks = document.querySelectorAll('.all-tasks .task');
        const allTaskText = document.querySelector('.all-task-text');
        if (allTaskText) {
            allTaskText.remove();
        }
        for (const task of tasks) {
            task.remove();
        }
    }
}
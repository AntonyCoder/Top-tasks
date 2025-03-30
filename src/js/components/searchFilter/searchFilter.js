import './searchFilter.css';
import { Task } from '../task/task';
import { currentTasks } from '../../taskData';
import { allTasks } from '../../taskData';
import { TasksWrapper } from '../tasksWrapper/tasksWrapper';


export class SearchFilter {
    constructor() {
        this.currentTasks = currentTasks;
        this.allTasks = allTasks;
        this.taskWrapper = new TasksWrapper();
    }

    renderSearchFilter() {
        const container = document.querySelector('.container');
        this.searchField = document.createElement('input');
        this.searchField.classList.add('search-field');

        this.searchField.setAttribute('type', 'search');

        container.appendChild(this.searchField);

        this.newTask();
    }

    newTask() {
        this.searchField.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                if (this.searchField.value === '') {
                    return;
                }
                const task = new Task(this.searchField.value);

                this.currentTasks.push(task);
                this.allTasks.push(task)

                console.log(this.currentTasks);
                this.taskWrapper.renderTasks();

                this.searchField.value = '';
            }
        });
    }
}
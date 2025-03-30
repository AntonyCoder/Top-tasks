import './container.css';
import { SearchFilter } from '../searchFilter/searchFilter';
import { TasksWrapper } from '../tasksWrapper/tasksWrapper';

export class Container {
    constructor() {
        this.searchFilter = new SearchFilter();
        this.tasksWrapper = new TasksWrapper();
    }

    renderContainer() {
        const body = document.querySelector('body');

        const container = document.createElement('div');
        container.classList.add('container');

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Top Tasks';

        body.appendChild(container);
        container.appendChild(title);

        this.searchFilter.renderSearchFilter();
        this.tasksWrapper.renderTasksWrapper();
    }
}
import './task.css'
import { TasksWrapper } from '../tasksWrapper/tasksWrapper';

export class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.isPinned = false;
        this.onCheckboxClick = this.onCheckboxClick.bind(this)
        this.tasksWraper = new TasksWrapper()
    }
    //Создание задачи
    createNewTask() {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = this.taskName;

        this.pinnedButton = document.createElement('input');
        this.pinnedButton.classList.add('pinned-button');
        this.pinnedButton.setAttribute('type', 'checkbox');

        task.append(taskTitle, this.pinnedButton);

        this.pinnedButton.addEventListener('click', this.onCheckboxClick)

        return task;
    }

    createPinTask() {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = this.taskName;

        this.pinnedButton = document.createElement('input');
        this.pinnedButton.classList.add('pinned-button');
        this.pinnedButton.setAttribute('type', 'checkbox');
        this.pinnedButton.checked = true;
        this.isPinned = true;

        task.append(taskTitle, this.pinnedButton);

        this.pinnedButton.addEventListener('click', this.onCheckboxClick)

        return task;
    }

    //Нажатие на чекбокс
    onCheckboxClick(e) {
        if (this.pinnedButton.checked) {
            this.isPinned = true;
            this.tasksWraper.addPinTask(e);
        } else {
            this.isPinned = false;
            this.tasksWraper.addPinTask(e);
        }
    }
}
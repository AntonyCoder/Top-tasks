import './task.css'

export class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.isPinned = false;
    }

    createTask() {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = this.taskName;

        this.pinnedButton = document.createElement('input');
        this.pinnedButton.classList.add('pinned-button');
        this.pinnedButton.setAttribute('type', 'checkbox');

        task.append(taskTitle, this.pinnedButton);

        this.pinnedButton.addEventListener('click', () => {
            this.addPinTask();
        })

        return task;
    }

    addPinTask() {
        if(this.pinnedButton.checked){
            this.isPinned = true;
        } else {
            this.isPinned = false;
        }
    }

}
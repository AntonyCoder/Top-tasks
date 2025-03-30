import './error.css'

export class Error {

    renderError() {
        const body = document.querySelector('body');
        const wrapper = document.createElement('div');
        wrapper.classList.add('error-wrapper');
        wrapper.textContent = 'Ошибка, нельзя добавить пустое поле'

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = 'X';

        wrapper.appendChild(closeBtn);
        body.appendChild(wrapper);

        closeBtn.addEventListener('click', this.onCloseError)
    }

    onCloseError() {
        const wrapper = document.querySelector('.error-wrapper')
        wrapper.remove();
    }

}
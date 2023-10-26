document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#push');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('.task-list');

    form.addEventListener('click', () => {
        const task = input.value.trim();

        if (!task) {
            alert('Please enter a task.');
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        const task_span_el = document.createElement('span');
        task_span_el.textContent = task;

        const task_button_el = document.createElement('button');
        task_button_el.textContent = 'X';
        task_button_el.classList.add('delete-button');
        task_button_el.addEventListener('click', () => {
            task_el.remove();
        });

        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_span_el);
        task_content_el.appendChild(task_button_el);

        list_el.appendChild(task_el);

        input.value = '';
    });
});

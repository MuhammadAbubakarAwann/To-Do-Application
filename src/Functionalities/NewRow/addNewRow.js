import updateTaskButton from "../buttons/updateButton";
import removeTaskButton from "../buttons/removeButton";

import removeTaskCallBack from '../CallBacks/removeTask'
import updateTaskCallBack from '../CallBacks/updateTask'

function createTableRow(id, task) {
    const row = document.createElement('tr');
    row.classList.add('odd:bg-orange-100', 'bg-orange-50', 'text-orange-700');

    const cell1 = document.createElement('td');
    cell1.classList.add('p-2', 'text-center');
    cell1.textContent = (id+1);

    const cell2 = document.createElement('td');
    cell2.classList.add('p-2', 'text-left');
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = task;
    taskInput.disabled = true
    taskInput.classList.add('bg-transparent', 'outline-none', 'border-none', 'w-full');
    cell2.appendChild(taskInput);

    const cell3 = document.createElement('td');
    cell3.classList.add('p-2', 'text-left', 'flex', 'gap-2');

    const updateButton = updateTaskButton();
    const removeButton = removeTaskButton();

    cell3.appendChild(updateButton);
    cell3.appendChild(removeButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.id = id;

    removeButton.addEventListener('click', () => removeTaskCallBack(id));

    updateButton.addEventListener('click', () => {
        taskInput.disabled = false;
        taskInput.focus();
        taskInput.select()

        taskInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                updateTaskCallBack(id, taskInput.value);
                taskInput.disabled = true;
            }
        });
    });

    return row;
}
export default createTableRow;

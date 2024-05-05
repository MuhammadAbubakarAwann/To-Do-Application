import addNewRow from '../NewRow/addNewRow';

function addTask(task) {

    const taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];
    const taskItem = addNewRow(task.id, task.task);
    taskItem.id = task.id
    
    taskList.appendChild(taskItem);

}
export default addTask

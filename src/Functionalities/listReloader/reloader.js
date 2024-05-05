import taskManager from "../../TaskData";
import createTableRow from "../NewRow/addNewRow";

function reloader() {
    const tasksArray = taskManager.tasksArray;
    const taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    tasksArray.forEach((task) => {
        const { id, task: taskName } = task;
        const taskItem = createTableRow(id, taskName);
        taskList.appendChild(taskItem);
    });
}

export default reloader;

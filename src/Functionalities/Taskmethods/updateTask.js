import taskManager from "../../TaskData";
import setLocalStorageList from '../LocalStorage/localStorageList'
import taskListReloader from "../listReloader/reloader";

function updateTask(indexToUpdate, taskItem) {

    const tasksArray = taskManager.tasksArray
    const updateTaskinputField = inputField()

    const existingInputField = taskItem.querySelector('.updateTaskInputField');
    if (existingInputField) {
        existingInputField.focus();
        return;
    }

    taskItem.appendChild(updateTaskinputField)

    updateTaskinputField.addEventListener('change', () => {
        const updatedTask = updateTaskinputField.value
        tasksArray[indexToUpdate].task = updatedTask;

        taskListReloader()
        setLocalStorageList()
    })

}
export default {
    updateTask,
    inputField
}

function inputField() {
    const updateInputField = document.createElement('input')
    updateInputField.id = "updateTaskInputField"
    updateInputField.className = "updateTaskInputField"
    updateInputField.setAttribute('type', 'text');
    updateInputField.setAttribute('placeholder', 'Enter New Task');

    return updateInputField
}


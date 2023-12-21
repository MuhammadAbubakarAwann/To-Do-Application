import removeTaskButton from '../buttons/removeButton'
import updateTaskButton from '../buttons/updateButton'

import removeTaskCallBack from '../CallBacks/removeTask'
import updateTaskCallBack from '../CallBacks/updateTask'

function addTask(task) {

    const taskList = document.getElementById('taskList')
    const taskItem = document.createElement('li')

    taskItem.textContent = task.task
    taskItem.id = task.id

    const removeButton = removeTaskButton()
    taskItem.appendChild(removeButton)
    removeButton.addEventListener('click', () => removeTaskCallBack(taskItem.id))

    const updateButton = updateTaskButton()
    taskItem.appendChild(updateButton)
    updateButton.addEventListener('click', () => updateTaskCallBack(taskItem.id, taskItem))

    taskList.appendChild(taskItem)

}
export default addTask

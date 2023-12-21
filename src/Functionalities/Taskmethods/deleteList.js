import taskManager from '../../TaskData/index'

function deleteList() {
    const tasksArray = taskManager.tasksArray
    tasksArray.splice(0, tasksArray.length)

    const taskList = document.getElementById('taskList')
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

}

export default deleteList
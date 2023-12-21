import taskManager from "../../TaskData"
import addTaskMethod from "../Taskmethods/addTask"

function reloader() {
    const tasksArray = taskManager.tasksArray
    const taskList = document.getElementById('taskList')
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    tasksArray.forEach((t) => addTaskMethod(t))
}
export default reloader
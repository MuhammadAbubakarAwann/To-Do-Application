import addTaskCallBack from './Functionalities/CallBacks/addTask'
import addTaskMethod from './Functionalities/Taskmethods/addTask'
import getTaskListFromLocalStorage from './Functionalities/LocalStorage/gettaskFromlocalStorage'
import deleteListCallBack from './Functionalities/CallBacks/deleteList'
import taskManager from './TaskData/index';


const addTaskButton = document.getElementById('addTask')
const deleteListButton = document.getElementById('deleteList')
const tasksArray = taskManager.tasksArray

window.onload = () => {
    tasksArray.push(...getTaskListFromLocalStorage())
    tasksArray.forEach((t) => addTaskMethod(t))

    addTaskButton.addEventListener('click', addTaskCallBack)
    deleteListButton.addEventListener('click', deleteListCallBack)

}
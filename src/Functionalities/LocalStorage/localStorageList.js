import taskManager from '../../TaskData/index'

function localStorageList() {

    const tasksArray = taskManager.tasksArray
    localStorage.setItem('tasks', JSON.stringify(tasksArray))

}

export default localStorageList
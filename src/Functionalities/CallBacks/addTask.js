import addTaskMethod from '../Taskmethods/addTask';
import localStorageList from '../LocalStorage/localStorageList';
import taskManager from "../../TaskData";

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    const tasksArray = taskManager.tasksArray
    if (taskText === '') return;

    const task = {  
        task: taskText,
        id: tasksArray.length
    };
    tasksArray.push(task);
    
    addTaskMethod(task);
    localStorageList();

    taskInput.value = '';
}

export default addTask

import taskManager from "../../TaskData";
import setLocalStorageList from '../LocalStorage/localStorageList'
import taskListReloader from "../listReloader/reloader";

function updateTask(indexToUpdate, updatedTask) {

    const tasksArray = taskManager.tasksArray
  
        tasksArray[indexToUpdate].task = updatedTask;

        taskListReloader()
        setLocalStorageList()
    
}
export default updateTask



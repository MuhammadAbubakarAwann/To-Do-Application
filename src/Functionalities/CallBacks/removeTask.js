import setLocalStorageList from '../LocalStorage/localStorageList';
import taskManager from '../../TaskData/index'

function removeTask(taskIndex) {
    taskManager.removeTask(taskIndex);
    setLocalStorageList();
}

export default removeTask;

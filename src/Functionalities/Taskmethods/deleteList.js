import taskManager from '../../TaskData/index'
import reloader from '../listReloader/reloader';

function deleteList() {
    taskManager.tasksArray = [];

    reloader()
    

}

export default deleteList
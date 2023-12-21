import taskListReloader from '../Functionalities/listReloader/reloader';
class TaskManager {
        
    tasksArray = []
        
    removeTask(taskIndex){
        this.tasksArray.splice(taskIndex, 1);
        this.tasksArray = this.tasksArray.map((v) => {
            if (v.id > taskIndex) {
                v.id = v.id - 1
            }
            return v;
        })

        taskListReloader()
    }

}
const taskManager = new TaskManager
export default taskManager



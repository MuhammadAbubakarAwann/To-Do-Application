function getTaskListFromLocalStorage() {
    const localStorageData = localStorage.getItem('tasks')

    let taskList = []
    if (localStorageData) {
        try {
            taskList = JSON.parse(localStorageData);
        } catch (error) {
            console.error('Error parsing task list:', error);
        }
    }

    return taskList;
}
export default getTaskListFromLocalStorage
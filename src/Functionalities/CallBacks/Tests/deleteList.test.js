import deleteList from '../deleteList'; import deleteListMethod from '../../Taskmethods/deleteList';
import localStorageList from '../../LocalStorage/localStorageList';
import taskManager from '../../../TaskData';

jest.mock('../../Taskmethods/deleteList'); 
jest.mock('../../LocalStorage/localStorageList'); 

describe('deleteList function', () => {
    it('should call deleteListMethod and localStorageList and clear the TasksArray', () => {

        let task = { id: 1, task: 'Task 1' }
        const tasksArray = taskManager.tasksArray 
        tasksArray.push(task)

        deleteList();

        expect(deleteListMethod).toHaveBeenCalledTimes(1);
        expect(localStorageList).toHaveBeenCalledTimes(1);
        expect(tasksArray.length).toBe(1);
    });
});
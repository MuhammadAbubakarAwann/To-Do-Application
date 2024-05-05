import updateTask from '../updateTask';
import taskManager from '../../../TaskData/index';
import setLocalStorageList from '../../LocalStorage/localStorageList';
import taskListReloader from '../../listReloader/reloader';

jest.mock('../../../TaskData/index');
jest.mock('../../LocalStorage/localStorageList');
jest.mock('../../listReloader/reloader');

describe('updateTask', () => {
    
    const tasksArray = [{ task: 'Original Task 1' }, { task: 'Original Task 2' }];
    const updatedTask = 'Modified Task';
    const indexToUpdate = 0;
    beforeEach(() => {
        
        taskManager.tasksArray = tasksArray; 
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    beforeEach(() => {
    });

    it('should update the task at the specified index', () => {
        updateTask(indexToUpdate, updatedTask);

        expect(taskManager.tasksArray[indexToUpdate].task).toBe(updatedTask);
    });

    it('should call taskListReloader', () => {
        updateTask(indexToUpdate, updatedTask);

        expect(taskListReloader).toHaveBeenCalledTimes(1);
    });

    it('should call setLocalStorageList', () => {
        updateTask(indexToUpdate, updatedTask);

        expect(setLocalStorageList).toHaveBeenCalledTimes(1);
    });

    it('should handle invalid index gracefully', () => {
        const invalidIndex = 10;
        expect(() => updateTask(invalidIndex, updatedTask)).toThrow();
    });
});

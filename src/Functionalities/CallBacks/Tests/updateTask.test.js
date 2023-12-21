import { JSDOM } from 'jsdom';
import updateTaskCallBack from '../updateTask';
import taskManager from '../../../TaskData/index';
import setLocalStorageList from '../../LocalStorage/localStorageList';
import { updateTask } from '../../Taskmethods/updateTask';

jest.mock('../../LocalStorage/localStorageList');
jest.mock('../../Taskmethods/updateTask');

describe('updateTask', () => {
    let dom;

    beforeEach(() => {
        dom = new JSDOM(`
      <button id="update-button">Update Task</button>
      <div id="task-item-1"><input id="updateTaskInputField" /></div>
    `);
        global.document = dom.window.document;
        taskManager.tasksArray = [{ id: 1, task: 'Initial Task' }];
    });

    afterEach(() => {
        global.document = undefined;
        jest.resetAllMocks();
    });

    it('should update tasksArray and call other functions on input change', () => {
        const taskItem = document.querySelector('#task-item-1');
        const updateButton = document.getElementById('update-button');
        const updateTaskMethod = jest.fn(updateTask);
        updateButton.addEventListener('click', () => {
            updateTaskCallBack(0, taskItem);
        });

        updateButton.click();


        expect(updateTaskMethod.updateTask).toHaveBeenCalled();
        expect(setLocalStorageList).toHaveBeenCalled();
        expect(taskManager.tasksArray).toEqual([{ id: 1, task: 'Updated Task' }]);
    });
});

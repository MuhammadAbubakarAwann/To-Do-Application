import removeTask from '../removeTask';
import setLocalStorageList from '../../LocalStorage/localStorageList';
import taskManager from '../../../TaskData/index';
import { JSDOM } from 'jsdom';

jest.mock('../../LocalStorage/localStorageList');
describe('removeTask function', () => {
    beforeEach(() => {
        const dom = new JSDOM(`<!DOCTYPE html><html><body>
          <input id="taskInput" type="text" />
          <table id="taskList"><tbody></tbody></table>
        </body></html>`);
        global.document = dom.window.document;
        global.window = dom.window;
    });

    test('removes a task and updates local storage', () => {
        taskManager.tasksArray = [
            { id: 0, task: 'Task 1' },
            { id: 1, task: 'Task 2' },
            { id: 2, task: 'Task 3' },
        ];

        const taskIndexToRemove = 1;

        removeTask(taskIndexToRemove);

        expect(taskManager.tasksArray).toEqual([
            { id: 0, task: 'Task 1' },
            { id: 1, task: 'Task 3' },
        ]);

        expect(setLocalStorageList).toHaveBeenCalled();
    });
});
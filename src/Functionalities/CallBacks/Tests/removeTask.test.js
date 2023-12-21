import { JSDOM } from 'jsdom';
import removeTask from '../removeTask';
import setLocalStorageList from '../../LocalStorage/localStorageList';
import taskManager from '../../../TaskData/index';

jest.mock('../../LocalStorage/localStorageList');

describe('removeTask', () => {
 let dom;

 beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><body><ul id="taskList"></ul></body></html>`); // Create a basic DOM environment with a 'taskList' element
    global.document = dom.window.document;
    taskManager.tasksArray = []; 
 });

 afterEach(() => {
    global.document = undefined;
    jest.resetAllMocks();
 });

  it('should remove the task at the specified index and update localStorage', () => {
    taskManager.tasksArray = [{ id: 1, task: 'Task 1' }, { id: 2, task: 'Task 2' }];

    const taskIndexToRemove = 1;
    removeTask(taskIndexToRemove);

    expect(taskManager.tasksArray).toEqual([{ id: 1, task: 'Task 1' }]);
    expect(setLocalStorageList).toHaveBeenCalledTimes(1);
  });
});

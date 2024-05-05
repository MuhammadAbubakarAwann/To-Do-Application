import addTask from '../addTask';
import taskManager from '../../../TaskData';
import mockAddTaskMethod from '../../Taskmethods/addTask';
import mockLocalStorageList from '../../LocalStorage/localStorageList';
import { JSDOM } from 'jsdom';
jest.mock('../../../TaskData', () => ({
    tasksArray: [],
}));

jest.mock('../../Taskmethods/addTask', () => jest.fn());
jest.mock('../../LocalStorage/localStorageList', () => jest.fn());

describe('addTask function', () => {
    beforeEach(() => {

        const dom = new JSDOM(`<!DOCTYPE html><html><body>
          <input id="taskInput" type="text" />
          <button id="addTask">Add Task</button>
          <table id="taskList"><tbody></tbody></table>
        </body></html>`);
        global.document = dom.window.document;
        global.window = dom.window;
    });

    afterEach(() => {
        global.document = undefined
        jest.resetAllMocks()
    })
    test('adds a task to tasksArray and invokes addTaskMethod and localStorageList', () => {
        const taskInput = document.getElementById('taskInput');
        taskInput.value = 'New Task';

        addTask();

        expect(taskManager.tasksArray).toHaveLength(1);
        expect(taskManager.tasksArray[0]).toEqual({ task: 'New Task', id: 0 });

        expect(mockAddTaskMethod).toHaveBeenCalledWith({ task: 'New Task', id: 0 });
        expect(mockLocalStorageList).toHaveBeenCalled();
        expect(taskInput.value).toBe('');
    });

});
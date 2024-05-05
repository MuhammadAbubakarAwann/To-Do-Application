import deleteListCallback from '../../CallBacks/deleteList';
import deleteListMethod from '../../Taskmethods/deleteList';
import localStorageList from '../../LocalStorage/localStorageList';
import getTaskListFromLocalStorage from '../../LocalStorage/gettaskFromlocalStorage';
import taskManager from '../../../TaskData/index';
import { JSDOM } from 'jsdom';

jest.mock('../../Taskmethods/deleteList');
jest.mock('../../LocalStorage/localStorageList');
jest.mock('../../../TaskData/index');
jest.mock('../../listReloader/reloader');
jest.mock('../../LocalStorage/gettaskFromlocalStorage');

describe('Delete List Callback', () => {
    let deleteButton;

    beforeEach(() => {
        const dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
      <body>
        <button id="deleteList">Delete List</button>
      </body>
      </html>
    `);
        global.document = dom.window.document;

        global.localStorage = {
            getItem: jest.fn(() => null),
            setItem: jest.fn(),
            removeItem: jest.fn(),
        };

        deleteButton = document.getElementById('deleteList');
        deleteButton.addEventListener('click', deleteListCallback);

        const tasksArray = [
            { id: 1, task: 'Task 1' },
            { id: 2, task: 'Task 2' },
        ];
        taskManager.tasksArray = tasksArray;
    });

    afterEach(() => {
        global.document = undefined;
        jest.clearAllMocks();
    });

    test('Clicking delete list button triggers necessary functions and empties localStorage', () => {
        deleteListMethod.mockImplementation(() => {
            taskManager.tasksArray = [];
        });

        deleteButton.click();

        expect(deleteListMethod).toHaveBeenCalled();
        expect(localStorageList).toHaveBeenCalled();
        expect(taskManager.tasksArray.length).toBe(0);
        expect(getTaskListFromLocalStorage()).toEqual(undefined);
    });
});

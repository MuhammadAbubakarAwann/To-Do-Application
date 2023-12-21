import { JSDOM } from 'jsdom';
import taskManager from '../../../TaskData/index';
import taskListReloader from '../../listReloader/reloader';

jest.mock('../../listReloader/reloader');

describe('TaskManager', () => {
    let dom;

    beforeEach(() => {
        dom = new JSDOM().window;
        global.document = dom.document;

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should remove the task at the specified index', () => {
        taskManager.tasksArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
        taskManager.removeTask(1);
        expect(taskManager.tasksArray.length).toBe(2);
        expect(taskManager.tasksArray).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should update subsequent task IDs after removal', () => {
        taskManager.tasksArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
        taskManager.removeTask(1);
        expect(taskManager.tasksArray[1].id).toBe(2);
    });

    it('should call taskListReloader after removing a task', () => {
        taskManager.tasksArray = [{ id: 1 }];
        taskManager.removeTask(0);
        expect(taskListReloader).toHaveBeenCalledTimes(1);
    });
});

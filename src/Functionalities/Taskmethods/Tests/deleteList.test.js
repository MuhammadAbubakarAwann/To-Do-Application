import { JSDOM } from 'jsdom';
import deleteList from '../../Taskmethods/deleteList';
import taskManager from '../../../TaskData/index';

describe('deleteList', () => {
    let taskList;

    beforeEach(() => {
        const dom = new JSDOM('<!doctype html><html><body></body></html>');
        global.document = dom.window.document;

        taskList = document.createElement('ul');
        taskList.id = 'taskList';
        document.body.appendChild(taskList);
    });

    afterEach(() => {
        global.document = undefined;
        taskList = undefined;
    });

    it('should remove all tasks from tasksArray and taskList', () => {
        const task = [
            { id: 1, task: 'Task 1' }
        ];
        const tasksArray = taskManager.tasksArray
        const taskItem = document.createElement('li');

        tasksArray.push(task)
        taskItem.textContent = task.task
        taskItem.id = task.id

        taskList.appendChild(taskItem);
        //checking before delete values
        expect(tasksArray.length).toBe(1);
        expect(taskList.childElementCount).toBe(1);

        deleteList();

        //checking after delete values
        expect(tasksArray.length).toBe(0);
        expect(taskList.childElementCount).toBe(0);
    });
});

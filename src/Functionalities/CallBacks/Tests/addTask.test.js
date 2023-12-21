import { JSDOM } from "jsdom";
import addTask from "../addTask";
import addTaskMethod from "../../Taskmethods/addTask";
import localStorageList from "../../LocalStorage/localStorageList";
import taskManager from "../../../TaskData/index";

jest.mock('../../Taskmethods/addTask')
jest.mock('../../LocalStorage/localStorageList')
jest.mock('../../../TaskData/index')

describe('addTask', () => {
    let dom;
    let taskInput;
    let originalDocument;

    beforeEach(() => {
        dom = new JSDOM(`<!DOCTYPE html><p>Hello World</p>`);
        taskManager.tasksArray = [];
        originalDocument = global.document;
        global.document = dom.window.document;
        taskInput = document.createElement('input');
        taskInput.id = 'taskInput';
        document.body.appendChild(taskInput);
    })

    afterEach(() => {
        document.body.removeChild(taskInput);
        global.document = undefined;
        jest.resetAllMocks()
    })

    it('should not add a task with an empty input', () => {
        addTask();
        expect(taskManager.tasksArray.length).toBe(0);
        expect(addTaskMethod).not.toHaveBeenCalled();
        expect(localStorageList).not.toHaveBeenCalled();
      });
    
      it('should create a new task with the input text and appropriate ID', () => {
        taskInput.value = 'My Task';
        addTask();
        expect(taskManager.tasksArray.length).toBe(1);
        expect(taskManager.tasksArray[0].task).toBe('My Task');
        expect(taskManager.tasksArray[0].id).toBe(0);
      });

    it('should call addTaskMethod with the created task', () => {
        taskInput.value = 'My Task';
        addTask();
        expect(addTaskMethod).toHaveBeenCalledTimes(1);
        expect(addTaskMethod).toHaveBeenCalledWith(taskManager.tasksArray[0]);
    });

    it('should call localStorageList after adding the task', () => {
        taskInput.value = 'My Task';
        addTask();
        expect(localStorageList).toHaveBeenCalledTimes(1);
    });

    it('should clear the input field after adding the task', () => {
        taskInput.value = 'My Task';
        addTask();
        expect(taskInput.value).toBe('');
    });
})

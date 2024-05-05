/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Functionalities/CallBacks/addTask.js":
/*!**************************************************!*\
  !*** ./src/Functionalities/CallBacks/addTask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Taskmethods/addTask */ \"./src/Functionalities/Taskmethods/addTask.js\");\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n\n\n\nfunction addTask() {\n  var taskInput = document.getElementById('taskInput');\n  var taskText = taskInput.value;\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasksArray;\n  if (taskText === '') return;\n  var task = {\n    task: taskText,\n    id: tasksArray.length\n  };\n  tasksArray.push(task);\n  (0,_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n  (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  taskInput.value = '';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/addTask.js?");

/***/ }),

/***/ "./src/Functionalities/CallBacks/deleteList.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/CallBacks/deleteList.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Taskmethods_deleteList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Taskmethods/deleteList */ \"./src/Functionalities/Taskmethods/deleteList.js\");\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n\n\nfunction deleteList() {\n  (0,_Taskmethods_deleteList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteList);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/deleteList.js?");

/***/ }),

/***/ "./src/Functionalities/CallBacks/removeTask.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/CallBacks/removeTask.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TaskData/index */ \"./src/TaskData/index.js\");\n\n\nfunction removeTask(taskIndex) {\n  _TaskData_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(taskIndex);\n  (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/removeTask.js?");

/***/ }),

/***/ "./src/Functionalities/CallBacks/updateTask.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/CallBacks/updateTask.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Taskmethods_updateTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Taskmethods/updateTask */ \"./src/Functionalities/Taskmethods/updateTask.js\");\n\nfunction updateTask(indexToUpdate, updatedTask) {\n  (0,_Taskmethods_updateTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(indexToUpdate, updatedTask);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/updateTask.js?");

/***/ }),

/***/ "./src/Functionalities/LocalStorage/gettaskFromlocalStorage.js":
/*!*********************************************************************!*\
  !*** ./src/Functionalities/LocalStorage/gettaskFromlocalStorage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getTaskListFromLocalStorage() {\n  var localStorageData = localStorage.getItem('tasks');\n  var taskList = [];\n  if (localStorageData) {\n    try {\n      taskList = JSON.parse(localStorageData);\n    } catch (error) {\n      console.error('Error parsing task list:', error);\n    }\n  }\n  return taskList;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTaskListFromLocalStorage);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/LocalStorage/gettaskFromlocalStorage.js?");

/***/ }),

/***/ "./src/Functionalities/LocalStorage/localStorageList.js":
/*!**************************************************************!*\
  !*** ./src/Functionalities/LocalStorage/localStorageList.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData/index */ \"./src/TaskData/index.js\");\n\nfunction localStorageList() {\n  var tasksArray = _TaskData_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  localStorage.setItem('tasks', JSON.stringify(tasksArray));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageList);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/LocalStorage/localStorageList.js?");

/***/ }),

/***/ "./src/Functionalities/NewRow/addNewRow.js":
/*!*************************************************!*\
  !*** ./src/Functionalities/NewRow/addNewRow.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttons_updateButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttons/updateButton */ \"./src/Functionalities/buttons/updateButton.js\");\n/* harmony import */ var _buttons_removeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/removeButton */ \"./src/Functionalities/buttons/removeButton.js\");\n/* harmony import */ var _CallBacks_removeTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CallBacks/removeTask */ \"./src/Functionalities/CallBacks/removeTask.js\");\n/* harmony import */ var _CallBacks_updateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CallBacks/updateTask */ \"./src/Functionalities/CallBacks/updateTask.js\");\n\n\n\n\nfunction createTableRow(id, task) {\n  var row = document.createElement('tr');\n  row.classList.add('odd:bg-orange-100', 'bg-orange-50', 'text-orange-700');\n  var cell1 = document.createElement('td');\n  cell1.classList.add('p-2', 'text-center');\n  cell1.textContent = id + 1;\n  var cell2 = document.createElement('td');\n  cell2.classList.add('p-2', 'text-left');\n  var taskInput = document.createElement('input');\n  taskInput.type = 'text';\n  taskInput.value = task;\n  taskInput.disabled = true;\n  taskInput.classList.add('bg-transparent', 'outline-none', 'border-none', 'w-full');\n  cell2.appendChild(taskInput);\n  var cell3 = document.createElement('td');\n  cell3.classList.add('p-2', 'text-left', 'flex', 'gap-2');\n  var updateButton = (0,_buttons_updateButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var removeButton = (0,_buttons_removeButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  cell3.appendChild(updateButton);\n  cell3.appendChild(removeButton);\n  row.appendChild(cell1);\n  row.appendChild(cell2);\n  row.appendChild(cell3);\n  row.id = id;\n  removeButton.addEventListener('click', function () {\n    return (0,_CallBacks_removeTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\n  });\n  updateButton.addEventListener('click', function () {\n    taskInput.disabled = false;\n    taskInput.focus();\n    taskInput.select();\n    taskInput.addEventListener('keydown', function (event) {\n      if (event.key === 'Enter') {\n        (0,_CallBacks_updateTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id, taskInput.value);\n        taskInput.disabled = true;\n      }\n    });\n  });\n  return row;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTableRow);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/NewRow/addNewRow.js?");

/***/ }),

/***/ "./src/Functionalities/Taskmethods/addTask.js":
/*!****************************************************!*\
  !*** ./src/Functionalities/Taskmethods/addTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NewRow_addNewRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NewRow/addNewRow */ \"./src/Functionalities/NewRow/addNewRow.js\");\n\nfunction addTask(task) {\n  var taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];\n  var taskItem = (0,_NewRow_addNewRow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task.id, task.task);\n  taskItem.id = task.id;\n  taskList.appendChild(taskItem);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/addTask.js?");

/***/ }),

/***/ "./src/Functionalities/Taskmethods/deleteList.js":
/*!*******************************************************!*\
  !*** ./src/Functionalities/Taskmethods/deleteList.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData/index */ \"./src/TaskData/index.js\");\n/* harmony import */ var _listReloader_reloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listReloader/reloader */ \"./src/Functionalities/listReloader/reloader.js\");\n\n\nfunction deleteList() {\n  _TaskData_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray = [];\n  (0,_listReloader_reloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteList);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/deleteList.js?");

/***/ }),

/***/ "./src/Functionalities/Taskmethods/updateTask.js":
/*!*******************************************************!*\
  !*** ./src/Functionalities/Taskmethods/updateTask.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n/* harmony import */ var _listReloader_reloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listReloader/reloader */ \"./src/Functionalities/listReloader/reloader.js\");\n\n\n\nfunction updateTask(indexToUpdate, updatedTask) {\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  tasksArray[indexToUpdate].task = updatedTask;\n  (0,_listReloader_reloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/updateTask.js?");

/***/ }),

/***/ "./src/Functionalities/buttons/removeButton.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/buttons/removeButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction removeTaskButton() {\n  var removeButton = document.createElement('button');\n  removeButton.id = 'removeButton';\n  removeButton.className = 'bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded';\n  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\n  svg.setAttribute('fill', 'none');\n  svg.setAttribute('viewBox', '0 0 24 24');\n  svg.setAttribute('stroke-width', '1.5');\n  svg.setAttribute('stroke', 'currentColor');\n  svg.classList.add('w-6', 'h-6');\n  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n  path.setAttribute('stroke-linecap', 'round');\n  path.setAttribute('stroke-linejoin', 'round');\n  path.setAttribute('d', 'm14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0');\n  svg.appendChild(path);\n  removeButton.appendChild(svg);\n  return removeButton;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/buttons/removeButton.js?");

/***/ }),

/***/ "./src/Functionalities/buttons/updateButton.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/buttons/updateButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateTaskButton() {\n  var updateButton = document.createElement('button');\n  updateButton.id = 'updateButton';\n  updateButton.className = 'bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded';\n  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\n  svg.setAttribute('fill', 'none');\n  svg.setAttribute('viewBox', '0 0 24 24');\n  svg.setAttribute('stroke-width', '1.5');\n  svg.setAttribute('stroke', 'currentColor');\n  svg.classList.add('w-6', 'h-6');\n  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n  path.setAttribute('stroke-linecap', 'round');\n  path.setAttribute('stroke-linejoin', 'round');\n  path.setAttribute('d', 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10');\n  svg.appendChild(path);\n  updateButton.appendChild(svg);\n  return updateButton;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/buttons/updateButton.js?");

/***/ }),

/***/ "./src/Functionalities/listReloader/reloader.js":
/*!******************************************************!*\
  !*** ./src/Functionalities/listReloader/reloader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n/* harmony import */ var _NewRow_addNewRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NewRow/addNewRow */ \"./src/Functionalities/NewRow/addNewRow.js\");\n\n\nfunction reloader() {\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  var taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];\n  while (taskList.firstChild) {\n    taskList.removeChild(taskList.firstChild);\n  }\n  tasksArray.forEach(function (task) {\n    var id = task.id,\n      taskName = task.task;\n    var taskItem = (0,_NewRow_addNewRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, taskName);\n    taskList.appendChild(taskItem);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloader);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/listReloader/reloader.js?");

/***/ }),

/***/ "./src/TaskData/index.js":
/*!*******************************!*\
  !*** ./src/TaskData/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Functionalities_listReloader_reloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Functionalities/listReloader/reloader */ \"./src/Functionalities/listReloader/reloader.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar TaskManager = /*#__PURE__*/function () {\n  function TaskManager() {\n    _classCallCheck(this, TaskManager);\n    _defineProperty(this, \"tasksArray\", []);\n  }\n  _createClass(TaskManager, [{\n    key: \"removeTask\",\n    value: function removeTask(taskIndex) {\n      this.tasksArray.splice(taskIndex, 1);\n      this.tasksArray = this.tasksArray.map(function (v) {\n        if (v.id > taskIndex) {\n          v.id = v.id - 1;\n        }\n        return v;\n      });\n      (0,_Functionalities_listReloader_reloader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n  }]);\n  return TaskManager;\n}();\nvar taskManager = new TaskManager();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskManager);\n\n//# sourceURL=webpack://my-webpack-project/./src/TaskData/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functionalities_CallBacks_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functionalities/CallBacks/addTask */ \"./src/Functionalities/CallBacks/addTask.js\");\n/* harmony import */ var _Functionalities_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functionalities/Taskmethods/addTask */ \"./src/Functionalities/Taskmethods/addTask.js\");\n/* harmony import */ var _Functionalities_LocalStorage_gettaskFromlocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Functionalities/LocalStorage/gettaskFromlocalStorage */ \"./src/Functionalities/LocalStorage/gettaskFromlocalStorage.js\");\n/* harmony import */ var _Functionalities_CallBacks_deleteList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functionalities/CallBacks/deleteList */ \"./src/Functionalities/CallBacks/deleteList.js\");\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskData/index */ \"./src/TaskData/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\nvar addTaskButton = document.getElementById('addTask');\nvar deleteListButton = document.getElementById('deleteList');\nvar tasksArray = _TaskData_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].tasksArray;\nwindow.onload = function () {\n  tasksArray.push.apply(tasksArray, _toConsumableArray((0,_Functionalities_LocalStorage_gettaskFromlocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n  tasksArray.forEach(function (t) {\n    return (0,_Functionalities_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t);\n  });\n  addTaskButton.addEventListener('click', _Functionalities_CallBacks_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  deleteListButton.addEventListener('click', _Functionalities_CallBacks_deleteList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
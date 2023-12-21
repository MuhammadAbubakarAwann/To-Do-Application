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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Functionalities/CallBacks/addTask.js":
/*!**************************************************!*\
  !*** ./src/Functionalities/CallBacks/addTask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Taskmethods/addTask */ \"./src/Functionalities/Taskmethods/addTask.js\");\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n\n\n\nfunction addTask() {\n  var taskInput = document.getElementById('taskInput');\n  var taskText = taskInput.value;\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_2__[\"default\"].tasksArray;\n  if (taskText === '') return;\n  var task = {\n    task: taskText,\n    id: tasksArray.length\n  };\n  tasksArray.push(task);\n  \"\";\n  (0,_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n  (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  taskInput.value = '';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/addTask.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Taskmethods_updateTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Taskmethods/updateTask */ \"./src/Functionalities/Taskmethods/updateTask.js\");\n\nfunction updateTask(indexToUpdate, taskItem) {\n  _Taskmethods_updateTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTask(indexToUpdate, taskItem);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/CallBacks/updateTask.js?");

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

/***/ "./src/Functionalities/Taskmethods/addTask.js":
/*!****************************************************!*\
  !*** ./src/Functionalities/Taskmethods/addTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _buttons_removeButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttons/removeButton */ \"./src/Functionalities/buttons/removeButton.js\");\n/* harmony import */ var _buttons_updateButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/updateButton */ \"./src/Functionalities/buttons/updateButton.js\");\n/* harmony import */ var _CallBacks_removeTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CallBacks/removeTask */ \"./src/Functionalities/CallBacks/removeTask.js\");\n/* harmony import */ var _CallBacks_updateTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CallBacks/updateTask */ \"./src/Functionalities/CallBacks/updateTask.js\");\n\n\n\n\nfunction addTask(task) {\n  var taskList = document.getElementById('taskList');\n  var taskItem = document.createElement('li');\n  taskItem.textContent = task.task;\n  taskItem.id = task.id;\n  var removeButton = (0,_buttons_removeButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  taskItem.appendChild(removeButton);\n  removeButton.addEventListener('click', function () {\n    return (0,_CallBacks_removeTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskItem.id);\n  });\n  var updateButton = (0,_buttons_updateButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  taskItem.appendChild(updateButton);\n  updateButton.addEventListener('click', function () {\n    return (0,_CallBacks_updateTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskItem.id, taskItem);\n  });\n  taskList.appendChild(taskItem);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/addTask.js?");

/***/ }),

/***/ "./src/Functionalities/Taskmethods/deleteList.js":
/*!*******************************************************!*\
  !*** ./src/Functionalities/Taskmethods/deleteList.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData/index */ \"./src/TaskData/index.js\");\n\nfunction deleteList() {\n  var tasksArray = _TaskData_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  tasksArray.splice(0, tasksArray.length);\n  var taskList = document.getElementById('taskList');\n  while (taskList.firstChild) {\n    taskList.removeChild(taskList.firstChild);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteList);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/deleteList.js?");

/***/ }),

/***/ "./src/Functionalities/Taskmethods/updateTask.js":
/*!*******************************************************!*\
  !*** ./src/Functionalities/Taskmethods/updateTask.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n/* harmony import */ var _LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LocalStorage/localStorageList */ \"./src/Functionalities/LocalStorage/localStorageList.js\");\n/* harmony import */ var _listReloader_reloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listReloader/reloader */ \"./src/Functionalities/listReloader/reloader.js\");\n\n\n\nfunction updateTask(indexToUpdate, taskItem) {\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  var updateTaskinputField = inputField();\n  var existingInputField = taskItem.querySelector('.updateTaskInputField');\n  if (existingInputField) {\n    existingInputField.focus();\n    return;\n  }\n  taskItem.appendChild(updateTaskinputField);\n  updateTaskinputField.addEventListener('change', function () {\n    var updatedTask = updateTaskinputField.value;\n    tasksArray[indexToUpdate].task = updatedTask;\n    (0,_listReloader_reloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_LocalStorage_localStorageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updateTask: updateTask,\n  inputField: inputField\n});\nfunction inputField() {\n  var updateInputField = document.createElement('input');\n  updateInputField.id = \"updateTaskInputField\";\n  updateInputField.className = \"updateTaskInputField\";\n  updateInputField.setAttribute('type', 'text');\n  updateInputField.setAttribute('placeholder', 'Enter New Task');\n  return updateInputField;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/Taskmethods/updateTask.js?");

/***/ }),

/***/ "./src/Functionalities/buttons/removeButton.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/buttons/removeButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction removeTaskButton() {\n  var removeButton = document.createElement('button');\n  removeButton.id = 'removeButton';\n  removeButton.className = 'removeButton';\n  var icon = document.createElement('i');\n  icon.classList.add('fas', 'fa-trash-alt');\n  removeButton.appendChild(icon);\n  removeButton.style.color = 'black';\n  removeButton.style.border = 'none';\n  removeButton.style.cursor = 'pointer';\n  removeButton.style.backgroundColor = 'transparent';\n  return removeButton;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTaskButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/buttons/removeButton.js?");

/***/ }),

/***/ "./src/Functionalities/buttons/updateButton.js":
/*!*****************************************************!*\
  !*** ./src/Functionalities/buttons/updateButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateTaskButton() {\n  var updateButton = document.createElement('button');\n  updateButton.id = 'updateButton';\n  updateButton.className = 'updateButton';\n  var icon = document.createElement('i');\n  icon.classList.add('fas', 'fa-edit');\n  updateButton.appendChild(icon);\n  updateButton.style.color = 'yellow';\n  updateButton.style.border = 'none';\n  updateButton.style.cursor = 'pointer';\n  updateButton.style.backgroundColor = 'transparent';\n  return updateButton;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/buttons/updateButton.js?");

/***/ }),

/***/ "./src/Functionalities/listReloader/reloader.js":
/*!******************************************************!*\
  !*** ./src/Functionalities/listReloader/reloader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../TaskData */ \"./src/TaskData/index.js\");\n/* harmony import */ var _Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Taskmethods/addTask */ \"./src/Functionalities/Taskmethods/addTask.js\");\n\n\nfunction reloader() {\n  var tasksArray = _TaskData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasksArray;\n  var taskList = document.getElementById('taskList');\n  while (taskList.firstChild) {\n    taskList.removeChild(taskList.firstChild);\n  }\n  tasksArray.forEach(function (t) {\n    return (0,_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloader);\n\n//# sourceURL=webpack://my-webpack-project/./src/Functionalities/listReloader/reloader.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functionalities_CallBacks_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functionalities/CallBacks/addTask */ \"./src/Functionalities/CallBacks/addTask.js\");\n/* harmony import */ var _Functionalities_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Functionalities/Taskmethods/addTask */ \"./src/Functionalities/Taskmethods/addTask.js\");\n/* harmony import */ var _Functionalities_LocalStorage_gettaskFromlocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Functionalities/LocalStorage/gettaskFromlocalStorage */ \"./src/Functionalities/LocalStorage/gettaskFromlocalStorage.js\");\n/* harmony import */ var _Functionalities_CallBacks_deleteList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Functionalities/CallBacks/deleteList */ \"./src/Functionalities/CallBacks/deleteList.js\");\n/* harmony import */ var _TaskData_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskData/index */ \"./src/TaskData/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_preP_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/preP.scss */ \"./src/styles/preP.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n\n\n\nvar addTaskButton = document.getElementById('addTask');\nvar deleteListButton = document.getElementById('deleteList');\nvar tasksArray = _TaskData_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"].tasksArray;\nwindow.onload = function () {\n  tasksArray.push.apply(tasksArray, _toConsumableArray((0,_Functionalities_LocalStorage_gettaskFromlocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()));\n  tasksArray.forEach(function (t) {\n    return (0,_Functionalities_Taskmethods_addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t);\n  });\n  addTaskButton.addEventListener('click', _Functionalities_CallBacks_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  deleteListButton.addEventListener('click', _Functionalities_CallBacks_deleteList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var el = document.querySelector('body');\n  (0,_utils__WEBPACK_IMPORTED_MODULE_5__.addBgImage)(el);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBgImage: () => (/* binding */ addBgImage)\n/* harmony export */ });\n/* harmony import */ var _images_bg2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bg2.png */ \"./src/images/bg2.png\");\n\nfunction addBgImage(el) {\n  if (el) {\n    el.style.backgroundImage = \"url(\".concat(_images_bg2_png__WEBPACK_IMPORTED_MODULE_0__, \")\");\n    el.style.backgroundSize = 'cover';\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/preP.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/preP.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#addTask {\n  background-color: #1dcd40;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n#addTask:hover {\n  background-color: #00951e;\n}\n\n#deleteList {\n  background-color: #E74C3C;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n#deleteList:hover {\n  background-color: #C0392B;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/preP.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\nbody {\r\n    font-family: strain, sans-serif;\r\n    text-align:left;\r\n  }\r\n  li{\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    color: #ffffff;\r\n    \r\n  }\r\n  \r\n  .app {\r\n    max-width: 600px;\r\n  }\r\n  \r\n  h1 {\r\n    font-family: cursive;\r\n    font-weight:bolder;\r\n    color: #413c3c;\r\n    \r\n  }\r\n  \r\n  .input-container {\r\n    margin: 20px 0;\r\n  }\r\n  \r\n  input {\r\n    padding: 5px;\r\n    margin-right: 10px;\r\n    border-radius: 4px;\r\n    border: none;\r\n  }\r\n  .updateButton {\r\n    \r\n    position:relative;\r\n \r\n    left: 50px;\r\n  }\r\n\r\n  .removeButton{\r\n    position:relative;\r\n    left: 20px;\r\n  }\r\n  \r\n  .updateTaskInputField{\r\n    \r\n    position: relative;\r\n    left: 100px;\r\n    padding: 2px ;\r\n\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/preP.scss":
/*!******************************!*\
  !*** ./src/styles/preP.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preP_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./preP.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/preP.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preP_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preP_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preP_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_preP_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/preP.scss?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/bg2.png":
/*!****************************!*\
  !*** ./src/images/bg2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9535cc44a8e5507faa31.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/bg2.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"input:checked + p{\\n  background: #F9F9F9;\\n  text-decoration: line-through;\\n  color:red;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure */ \"./src/structure.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst buttonProject = document.querySelector(\"#btnProject\");\nconst formProject = document.querySelector(\"#formProject\");\nconst inputProjectName = document.querySelector(\"#projectName\");\nconst divProjects = document.querySelector(\".projects\");\n\nconst formTask = document.querySelector(\"#formTask\");\nconst inputTitle = document.querySelector(\"#inputTodo\");\nconst txtDescription = document.querySelector(\"#txtDescription\");\nconst inputDate = document.querySelector(\"#inputDate\");\nconst seletPriority = document.querySelector(\"#seletPriority\");\nconst todoList = document.querySelector(\"#todoList\");\nconst taskid = document.querySelector(\"#taskid\");\nconst btnSubmit = document.querySelector(\"#btnSubmit\");\n\n// Load tasks from localstorage\n_structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setInitialTodos();\n_structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setInitialProjects();\n\nfunction setActiveBadge(p) {\n  // check if p has a badge\n  const existingbadge = p.querySelector(\".badge\");\n  if (existingbadge) return;\n\n  const badge = document.createElement(\"span\");\n  badge.setAttribute(\"class\", \"badge badge-primary badge-pill\");\n  badge.innerHTML = \"active\";\n  p.append(badge);\n}\n\nfunction resetForm() {\n  inputTitle.value = \"\";\n  txtDescription.value = \"\";\n  inputDate.value = \"\";\n  seletPriority.value = \"low\";\n}\n\nfunction editTask(todo) {\n  inputTitle.value = todo.title;\n  txtDescription.value = todo.description;\n  inputDate.value = todo.dueDate;\n  seletPriority.value = todo.priority;\n\n  // Structure.updateTodo(todo)\n}\nfunction deleteTask(target) {\n  const taskId = target.previousSibling.dataset.id;\n  // Remove the task from the list\n  target.parentNode.remove();\n  // Remove the task from the array\n  _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTodo(taskId);\n}\n\n// Attach a listener to the todoList\ntodoList.addEventListener(\"click\", e => {\n  if (e.target.nodeName === \"BUTTON\") {\n    const pTagId = e.target.previousSibling.dataset.id;\n    const { todos } = _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const todo = todos.find(todo => todo.id === parseInt(pTagId));\n    if (e.target.nodeName === \"BUTTON\" && e.target.innerText === \"Edit\") {\n      editTask(todo);\n      taskid.value = todo.id;\n      // Change the text of save to update\n      btnSubmit.innerText = \"Update\";\n    } else if (\n      e.target.nodeName === \"BUTTON\" &&\n      e.target.innerText === \"Delete\"\n    ) {\n      deleteTask(e.target);\n    }\n  }\n});\n\nfunction createTodo(todo) {\n  const divItem = document.createElement(\"div\");\n  divItem.classList = \"item\";\n\n  divItem.innerHTML = `<input type=\"checkbox\"><p data-id = ${todo.id} data-projectid = ${todo.projectid}>${todo.title} : ${todo.description}</p>`;\n  const editButton = document.createElement(\"button\");\n  editButton.classList = \"btn btn-sm btn-info edit\";\n  editButton.innerText = \"Edit\";\n  // TODO: extract this into its own function\n  const deleteButton = document.createElement(\"button\");\n  deleteButton.classList = \"btn btn-sm btn-danger delete\";\n  deleteButton.innerText = \"Delete\";\n\n  divItem.append(editButton, deleteButton);\n  todoList.append(divItem);\n}\n\n// Load the default project\nconst liveProjects = _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects;\nliveProjects.forEach(project => {\n  const divProject = document.createElement(\"div\");\n  const pProject = document.createElement(\"p\");\n  pProject.setAttribute(\"data-id\", project.id);\n  pProject.setAttribute(\"class\", \"project\");\n  pProject.innerText = project.name;\n  if (project.name === \"default\") {\n    pProject.setAttribute(\"data-status\", \"active\");\n    setActiveBadge(pProject);\n  }\n  divProject.append(pProject);\n  divProjects.append(divProject);\n});\n\nconst liveTodos = _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos;\nconst activeProjectId = document.querySelector('p[data-status=\"active\"').dataset\n  .id;\nliveTodos\n  .filter(todo => todo.projectid === activeProjectId)\n  .forEach(todo => {\n    createTodo(todo);\n  });\n\nbuttonProject.addEventListener(\"click\", () => {\n  buttonProject.style.display = \"none\";\n  formProject.style.display = \"inline\";\n});\n\nformProject.style.display = \"none\";\n\n// formTask.style.display = 'none';\n\nformTask.addEventListener(\"submit\", e => {\n  e.preventDefault();\n\n  // Update\n  if (btnSubmit.innerText === \"Update\") {\n    // update values in the array\n    _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTodo(\n      taskid.value,\n      inputTitle.value,\n      txtDescription.value,\n      inputDate.value,\n      seletPriority.value\n    );\n\n    // update item in the todoList\n    const updated = document.querySelector(`p[data-id=\"${taskid.value}\"]`);\n    updated.innerText = `${inputTitle.value} : ${txtDescription.value}`;\n\n    // reset all form elements\n    resetForm();\n    btnSubmit.innerText = \"Add\";\n    return;\n  }\n\n  const divItem = document.createElement(\"div\");\n  divItem.classList = \"item\";\n\n  // Get the project with data attribute of status=active\n  const activeProject = document.querySelector('p[data-status=\"active\"]');\n  const projectID = activeProject.dataset.id;\n\n  // console.log(checkbox);\n  const todo = _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodo(\n    inputTitle.value,\n    txtDescription.value,\n    inputDate.value,\n    seletPriority.value,\n    false,\n    projectID\n  );\n  divItem.innerHTML = `<input type=\"checkbox\"><p data-id = ${todo.id} data-projectid = ${todo.projectid}>${todo.title} : ${todo.description}</p>`;\n\n  const editButton = document.createElement(\"button\");\n  editButton.classList = \"btn btn-sm btn-info edit\";\n  editButton.innerText = \"Edit\";\n  // TODO: extract this into its own function\n  const deleteButton = document.createElement(\"button\");\n  deleteButton.classList = \"btn btn-sm btn-danger delete\";\n  deleteButton.innerText = \"Delete\";\n\n  divItem.append(editButton, deleteButton);\n  todoList.append(divItem);\n\n  // reset all form elements\n  resetForm();\n});\n\nformProject.addEventListener(\"submit\", e => {\n  e.preventDefault();\n\n  const divProject = document.createElement(\"div\");\n  const project = _structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(inputProjectName.value);\n  divProject.innerHTML = `<p class=\"project\" data-id= ${project.id}>${project.name}</p>`;\n\n  divProjects.append(divProject);\n});\n\ndivProjects.addEventListener(\"click\", e => {\n  const projects = document.querySelectorAll(\".project\");\n  const projectId = e.target.dataset.id;\n  const itemSelected = liveTodos.filter(todo => todo.projectid === projectId);\n  // reset todoList\n  todoList.innerHTML = \"\";\n  itemSelected.forEach(task => {\n    createTodo(task);\n  });\n\n  projects.forEach(project => {\n    project.setAttribute(\"data-status\", \"\");\n    const badge = project.querySelector(\".badge\");\n    if (badge) {\n      badge.parentNode.removeChild(badge);\n    }\n  });\n  const newActiveProject = e.target;\n  // set the status to => 'active'\n  newActiveProject.setAttribute(\"data-status\", \"active\");\n\n  setActiveBadge(newActiveProject);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nclass Model {\n  static updateTodos(todos) {\n    const string = JSON.stringify(todos);\n    localStorage.setItem('todos', string);\n  }\n\n  static getTodos() {\n    return localStorage.getItem('todos');\n  }\n\n  static updateProjects(projects) {\n    const stringed = JSON.stringify(projects);\n    localStorage.setItem('projects', stringed);\n  }\n\n  static getProjects() {\n    return localStorage.getItem('projects');\n  }\n}\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.id = Math.floor(Math.random() * 100000);\n  }\n}\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n\n\n// import Project from './project';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function Structure() {\n  const todos = [];\n  // const model = new Model();\n  const projects = [];\n\n\n  function liveTodos() {\n    return _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTodos();\n  }\n\n  function setInitialTodos() {\n    const loadedTodos = JSON.parse(liveTodos());\n    if (!loadedTodos || loadedTodos.length === 0) {\n      todos.push(...[]);\n    }\n    todos.push(...(loadedTodos || []));\n  }\n\n  function liveProjects() {\n    return _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjects();\n  }\n  function setInitialProjects() {\n    const loadedProjects = JSON.parse(liveProjects());\n\n    if (!loadedProjects || loadedProjects.length === 0) {\n      const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('default');\n      projects.push(defaultProject);\n      _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(projects);\n    } else {\n      projects.push(...loadedProjects);\n    }\n  }\n\n  function addTodo(title, description, dueDate, priority, completed, projectid) {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, completed, projectid);\n    todos.push(todo);\n\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateTodos(todos);\n    return todo;\n  }\n\n  function updateTodo(todoid, title, description, duedate, priority, completed = false) {\n    todos.map(todo => {\n      if (todo.id === parseInt(todoid)) {\n        todo.title = title;\n        todo.description = description;\n        todo.dueDate = duedate;\n        todo.completed = completed;\n      }\n      return todo;\n    });\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateTodos(todos);\n  }\n\n  function deleteTodo(todoid) {\n    const index = todos.findIndex(todo => todo.todoid === todoid);\n    todos.splice(index, 1);\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateTodos(todos);\n  }\n\n  function changeStatus(id) {\n    const todo = todos.find(todo => todo.id === id);\n    todo.completed = !todo.completed;\n    return todo;\n  }\n\n  function addProject(name) {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    projects.push(project);\n    _model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProjects(projects);\n    return project;\n  }\n  return {\n    addTodo,\n    changeStatus,\n    addProject,\n    updateTodo,\n    deleteTodo,\n    liveTodos,\n    setInitialTodos,\n    setInitialProjects,\n    liveProjects,\n    todos,\n    projects,\n  };\n}());\n\n//# sourceURL=webpack:///./src/structure.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nfunction Todo(title, description, dueDate, priority, completed = false, projectid) {\n  const id = Math.floor(Math.random() * 10000);\n  return {\n    id, title, description, dueDate, priority, completed, projectid,\n  };\n}\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });
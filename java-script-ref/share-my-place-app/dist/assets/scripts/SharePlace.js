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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PlaceFinder = /*#__PURE__*/function () {\n  function PlaceFinder() {\n    _classCallCheck(this, PlaceFinder);\n\n    var addressForm = document.querySelector('form');\n    var locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler);\n  }\n\n  _createClass(PlaceFinder, [{\n    key: \"locateUserHandler\",\n    value: function locateUserHandler() {\n      if (!navigator.geolocation) {\n        alert(\"Location features are not available , pleaseue different browser!\");\n        return;\n      }\n\n      var modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location please waite!!');\n      modal.show();\n      setTimeout(function () {\n        navigator.geolocation.getCurrentPosition(function (successResult) {\n          modal.hide();\n          var coordinates = {\n            lat: successResult.coords.latitude,\n            lng: successResult.coords.longitude\n          };\n          console.log(coordinates);\n        }, function (error) {\n          modal.hide();\n          alert(\"could not find current location ! lease add it manually\");\n        });\n      }, 2000);\n    }\n  }, {\n    key: \"findAddressHandler\",\n    value: function findAddressHandler() {}\n  }]);\n\n  return PlaceFinder;\n}();\n\nvar placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc3QgbG9jYXRlVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGUtYnRuJyk7XHJcbiAgICAgICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIpO1xyXG4gICAgICAgIGFkZHJlc3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuZmluZEFkZHJlc3NIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTG9jYXRpb24gZmVhdHVyZXMgYXJlIG5vdCBhdmFpbGFibGUgLCBwbGVhc2V1ZSBkaWZmZXJlbnQgYnJvd3NlciFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdMb2FkaW5nIGxvY2F0aW9uIHBsZWFzZSB3YWl0ZSEhJyk7XHJcbiAgICAgICAgbW9kYWwuc2hvdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc1Jlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XHJcbiAgICBcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJjb3VsZCBub3QgZmluZCBjdXJyZW50IGxvY2F0aW9uICEgbGVhc2UgYWRkIGl0IG1hbnVhbGx5XCIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9LDIwMDApO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgZmluZEFkZHJlc3NIYW5kbGVyKCkgeyB9XHJcbn1cclxuXHJcbmNvbnN0IHBsYWNlRmluZGVyID0gbmV3IFBsYWNlRmluZGVyKCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7OztBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(contentId, fallBackText) {\n    _classCallCheck(this, Modal);\n\n    this.fallBackText = fallBackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n\n  _createClass(Modal, [{\n    key: \"show\",\n    value: function show() {\n      if ('content' in document.createElement('template')) {\n        var modalElements = document.importNode(this.modalTemplateEl.content, true);\n        this.modalElement = modalElements.querySelector('.modal');\n        this.backdropElement = modalElements.querySelector('.backdrop');\n        var contentElement = document.importNode(this.contentTemplateEl.content, true);\n        this.modalElement.appendChild(contentElement);\n        document.body.insertAdjacentElement('afterbegin', this.modalElement);\n        document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n      } else {\n        alert(this.fallBackText);\n      }\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      if (this.modalElement) {\n        document.body.removeChild(this.modalElement);\n        document.body.removeChild(this.backdropElement);\n        this.modalElement = null;\n        this.backdropElement = null;\n      }\n    }\n  }]);\n\n  return Modal;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnRJZCwgZmFsbEJhY2tUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5mYWxsQmFja1RleHQgPSBmYWxsQmFja1RleHQ7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtdGVtcGxhdGUnKTtcclxuICAgIH1cclxuICAgIHNob3coKSB7XHJcblxyXG4gICAgICAgIGlmICgnY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbEVsZW1lbnRzID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLm1vZGFsVGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5tb2RhbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuZmFsbEJhY2tUZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RhbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQXZCQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQ0E7QUFDQTtBQURBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

/***/ })

/******/ });
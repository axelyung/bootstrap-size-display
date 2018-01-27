(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bootstrap-size-display"] = factory();
	else
		root["bootstrap-size-display"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function bsd(customStyles) {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            var el = document.createElement('div');
            el.id = 'bootstrap-size-display';
            el.className = 'override';

            el.innerHTML = '<div class="bsd-xs visible-xs visible-xs-block hidden-sm-up d-xs-block d-sm-none">xs</div>';
            el.innerHTML += '<div class="bsd-sm visible-sm visible-sm-block hidden-md-up hidden-xs-down d-none d-sm-block d-md-none">sm</div>';
            el.innerHTML += '<div class="bsd-md visible-md visible-md-block hidden-lg-up hidden-sm-down d-none d-md-block d-lg-none">md</div>';
            el.innerHTML += '<div class="bsd-lg visible-lg visible-lg-block hidden-xl-up hidden-md-down d-none d-lg-block d-xl-none">lg</div>';
            el.innerHTML += '<div class="bsd-xl visible-xl hidden-xs hidden-sm hidden-md hidden-lg visible-xl-block hidden-lg-down d-none d-xl-block">xl</div>';

            var style = document.createElement('style');
            style.innerHTML = '#bootstrap-size-display {';
            style.innerHTML += 'position: fixed;';
            style.innerHTML += 'font-size: 2rem;';
            style.innerHTML += 'z-index: 1000000;';
            style.innerHTML += 'bottom: .5rem;';
            style.innerHTML += 'right: .5rem;';
            style.innerHTML += '}';

            if (customStyles && (typeof customStyles === 'undefined' ? 'undefined' : _typeof(customStyles)) === 'object') {
                Object.keys(customStyles).forEach(function (key) {
                    el.style[key] = customStyles[key];
                });
            }

            document.body.appendChild(el);
            document.body.appendChild(style);
        }
    };
}

module.exports = bsd;

/***/ })
/******/ ]);
});
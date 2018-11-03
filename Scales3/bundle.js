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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
exports.default = Product;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __webpack_require__(0);
var Scales_1 = __webpack_require__(2);
var ScalesStorageEngineArray_1 = __webpack_require__(3);
var ScalesStorageEngineLocalStorage_1 = __webpack_require__(4);
var scale = new Scales_1.default(ScalesStorageEngineArray_1.default);
scale.add(new Product_1.default('1яблоко 1', 20));
scale.add(new Product_1.default('помидор 1', 30));
scale.add(new Product_1.default('яблоко 2', 50));
scale.add(new Product_1.default('помидор 2', 40));
scale.add(new Product_1.default('яблоко 3', 70));
scale.add(new Product_1.default('помидор 3', 30));
scale.add(new Product_1.default('яблоко 4', 90));
scale.add(new Product_1.default('помидор 4', 20));
scale.add(new Product_1.default('яблоко 5', 60));
scale.add(new Product_1.default('помидор 5', 30));
console.log('Список названий', scale.getNameList());
console.log('Итоговый вес', scale.getSumScale());
var scale2 = new Scales_1.default(ScalesStorageEngineLocalStorage_1.default);
scale2.add(new Product_1.default('ананас 1', 10));
scale2.add(new Product_1.default('грейпфрут 1', 20));
scale2.add(new Product_1.default('ананас 2', 30));
scale2.add(new Product_1.default('грейпфрут 2', 40));
scale2.add(new Product_1.default('ананас 3', 40));
scale2.add(new Product_1.default('грейпфрут 3', 50));
scale2.add(new Product_1.default('ананас 4', 60));
scale2.add(new Product_1.default('грейпфрут 4', 70));
scale2.add(new Product_1.default('ананас 5', 80));
scale2.add(new Product_1.default('грейпфрут 5', 90));
console.log('Список названий', scale2.getNameList());
console.log('Итоговый вес', scale2.getSumScale());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scales = /** @class */ (function () {
    function Scales(classRef) {
        this.storage = uniFactory(classRef);
    }
    Scales.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var scale = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            scale += this.storage.getItem(i).getScale();
        }
        ;
        return scale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        ;
        return nameList;
    };
    return Scales;
}());
exports.default = Scales;
function uniFactory(classRef) {
    return new classRef();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.array = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.array.push(item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.array[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.array.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
exports.default = ScalesStorageEngineArray;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __webpack_require__(0);
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.localStorage = localStorage;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var length = this.getCount();
        this.localStorage.setItem(length.toString(), JSON.stringify(item));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var product = JSON.parse(this.localStorage.getItem(index.toString()));
        return new Product_1.default(product.name, product.scale);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.localStorage.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
exports.default = ScalesStorageEngineLocalStorage;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
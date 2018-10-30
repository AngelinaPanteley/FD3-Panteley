var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArray = [];
    }
    Scales.prototype.add = function (product) {
        this.productArray.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var scale = 0;
        this.productArray.forEach(function (elem) {
            scale += elem.getScale();
        });
        return scale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        this.productArray.forEach(function (elem) {
            nameList.push(elem.getName());
        });
        return nameList;
    };
    return Scales;
}());
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        return _super.call(this, _name, _scale) || this;
    }
    return Tomato;
}(Product));
var scale = new Scales();
scale.add(new Apple('яблоко 1', 20));
scale.add(new Tomato('помидор 1', 30));
scale.add(new Apple('яблоко 2', 50));
scale.add(new Tomato('помидор 2', 40));
scale.add(new Apple('яблоко 3', 70));
scale.add(new Tomato('помидор 3', 30));
scale.add(new Apple('яблоко 4', 90));
scale.add(new Tomato('помидор 4', 20));
scale.add(new Apple('яблоко 5', 60));
scale.add(new Tomato('помидор 5', 30));
console.log('Список названий', scale.getNameList());
console.log('Итоговый вес', scale.getSumScale());
//# sourceMappingURL=app.js.map
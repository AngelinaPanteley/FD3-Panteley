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
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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
"use strict";
exports.__esModule = true;
var dessertMenu = function (dessert) {
    var fruit = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fruit[_i - 1] = arguments[_i];
    }
    console.log("The dessert is ".concat(dessert, " and you have ").concat(fruit));
};
dessertMenu('Three milks', 'orange', 'banana', 'strawberry');
exports["default"] = {};

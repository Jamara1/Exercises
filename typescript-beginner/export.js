"use strict";
exports.__esModule = true;
exports.show = exports.title = void 0;
/* Set the value that is send to the import.ts file */
exports.title = "Hello world!";
var show = function (data) {
    console.log(data);
};
exports.show = show;
var People = /** @class */ (function () {
    function People(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    People.prototype.show = function () {
        console.log(this.name);
    };
    return People;
}());
exports["default"] = People;

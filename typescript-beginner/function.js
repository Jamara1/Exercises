"use strict";
exports.__esModule = true;
/* Function with name */
function name(x, y) {
    return x + y;
}
/* Anonymous function */
var anonymous = function (x, y) {
    return x + y;
};
/* Arrow function */
var arrow = function (x, y) { return x + y; };
console.log(name(2, 3));
console.log(anonymous(2, 3));
console.log(arrow(2, 3));
/* Step 2 */
var functionOptional = function (x, y) {
    if (y === void 0) { y = 0; }
    return console.log(x, y);
};
functionOptional(1);
functionOptional(1, 3);
exports["default"] = {};

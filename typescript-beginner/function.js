"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Function with name */
function name(x, y) {
    return x + y;
}
/* Anonymous function */
let anonymous = function (x, y) {
    return x + y;
};
/* Arrow function */
const arrow = (x, y) => x + y;
console.log(name(2, 3));
console.log(anonymous(2, 3));
console.log(arrow(2, 3));
/* Step 2 */
const functionOptional = (x, y = 0) => console.log(x, y);
functionOptional(1);
functionOptional(1, 3);
exports.default = {};

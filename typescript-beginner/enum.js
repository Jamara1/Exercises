"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address;
(function (Address) {
    Address["Up"] = "UP";
    Address["Down"] = "DOWN";
    Address["Right"] = "RIGHT";
    Address["Left"] = "LEFT";
})(Address || (Address = {}));
const ball = {
    size: 10,
    initialPosition: Address.Down
};
console.log(ball.initialPosition); // DOWN
var Example;
(function (Example) {
    Example[Example["P1"] = 5] = "P1";
    Example[Example["P2"] = 6] = "P2";
})(Example || (Example = {}));
console.log(Example.P2); //6
exports.default = {};

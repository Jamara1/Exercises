"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(obj) {
    if (obj.name)
        console.log('Containt a name');
    console.log(obj.label);
}
let testObj = { secret: 1, label: 'test', name: 'find a name!' };
testObj.label = "Label 2";
printLabel(testObj);
exports.default = {};

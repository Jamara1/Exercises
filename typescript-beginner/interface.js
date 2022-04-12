"use strict";
exports.__esModule = true;
function printLabel(obj) {
    if (obj.name)
        console.log('Containt a name');
    console.log(obj.label);
}
var testObj = { secret: 1, label: 'test', name: 'find a name!' };
testObj.label = "Label 2";
printLabel(testObj);
exports["default"] = {};

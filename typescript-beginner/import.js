"use strict";
exports.__esModule = true;
var export_1 = require("./export");
var exportPackage = require("./export");
console.log(exportPackage.title);
var human = { name: "Manuel" };
exportPackage.show("Show");
var people = new export_1["default"]('Johan', 22, 1.70);
console.log(people.name);

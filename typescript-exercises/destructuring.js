"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* With a object */
const avenger = {
    name: "Steve",
    key: "Captain America",
    power: "Drug",
};
const exportObj = ({ name, key, power }) => {
    console.log(name + " " + key + " " + power);
};
exportObj(avenger);
/* With a array */
const avengers = ["Captain America", "Ironman", "Thor"];
const exportArr = ([captain, iron, thor]) => {
    console.log(captain + " " + iron + " " + thor);
};
exportArr(avengers);
exports.default = {};

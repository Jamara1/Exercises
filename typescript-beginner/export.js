"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.title = void 0;
/* Set the value that is send to the import.ts file from one at a time */
exports.title = "Hello world!";
const show = (data) => {
    console.log(data);
};
exports.show = show;
class People {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    show() {
        console.log(this.name);
    }
}
/* Send only the People class */
exports.default = People;

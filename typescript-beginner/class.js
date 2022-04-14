"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hello {
    constructor(message) {
        this.message = message;
    }
    greet() {
        return "Greetings " + this.message;
    }
}
let hello = new Hello("Typescript");
console.log(hello.greet());
class Animal {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    isBig() {
        if (this.size > 10)
            return true;
        else
            return false;
    }
}
class Snake extends Animal {
    constructor(name, size) {
        super(name, size);
    }
}
let snake = new Snake("Piton", 11);
snake.isBig();
exports.default = {};

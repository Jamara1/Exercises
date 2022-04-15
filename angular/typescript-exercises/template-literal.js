"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstname = 'Johan';
const lastname = 'Amara';
const age = 22;
function getAge() {
    return 100 + 100 + 300;
}
/* const output = firstname + " " + lastname + " ( " + age + " )"; */
/* const output = `${firstname} ${lastname} ( ${age} )`; */
const output = `${firstname}
${lastname}
( ${getAge()} )`;
console.log(output);
exports.default = {};

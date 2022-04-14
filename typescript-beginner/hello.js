"use strict";
function takeSomethingComplex(arg) {
    console.log(arg.foo, arg.bar);
}
function getBar() {
    return 'Some bar';
}
/* Example error production */
const fail = {
    foo: 123,
    bar: getBar()
};
takeSomethingComplex(fail);
let fullName = 'Johan Amara';
let count = fullName.length;
console.log(count);

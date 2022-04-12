function takeSomethingComplex(arg) {
    console.log(arg.foo, arg.bar);
}
function getBar() {
    return 'Some bar';
}
/* Example error production */
var fail = {
    foo: 123,
    bar: getBar()
};
takeSomethingComplex(fail);

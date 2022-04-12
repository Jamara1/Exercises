type SomethingComplex = {
    foo: number,
    bar: string
}
function takeSomethingComplex(arg:SomethingComplex): void {
    console.log(arg.foo, arg.bar);
    
}
function getBar(): string {
    return 'Some bar';
}

/* Example error production */
const fail = {
    foo: 123,
    bar: getBar()
};

takeSomethingComplex(fail);

let fullName: unknown = 'Johan Amara';

let count: number = (fullName as string).length;

console.log(count);
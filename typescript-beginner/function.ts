/* Function with name */
function name(x:number,y:number): number {
    return x + y;
}

/* Anonymous function */
let anonymous = function (x:number,y:number): number {
    return x + y;
}

/* Arrow function */
const arrow = (x:number,y:number): number => x + y;

console.log(name(2,3));
console.log(anonymous(2,3));
console.log(arrow(2,3));

/* Step 2 */
const functionOptional = (x:number,y:number = 0): void => console.log(x, y);

functionOptional(1);
functionOptional(1, 3);

export default {}
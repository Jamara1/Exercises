const dessertMenu = (dessert: string, ...fruit: string[]): void => {
    console.log(`The dessert is ${dessert} and you have ${fruit}`);
}

dessertMenu('Three milks', 'orange', 'banana', 'strawberry');

export default {}
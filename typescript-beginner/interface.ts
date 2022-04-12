interface ObjectInterface {
    label: string;
    name?: string;
    readonly secret: number;
}

function printLabel(obj: ObjectInterface): void {
    if (obj.name) console.log('Containt a name');
    
    console.log(obj.label);
}

let testObj: ObjectInterface = { secret: 1, label: 'test', name: 'find a name!' };
testObj.label = "Label 2";

printLabel(testObj);

export default {}
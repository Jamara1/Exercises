/* Set the value that is send to the import.ts file from one at a time */
export const title: string = "Hello world!";

export interface Human {
    name: string;
}

export const show = (data: string): void => {
    console.log(data);
}

class People {
    name: string;
    age: number;
    height: number;

    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    show(): void {
        console.log(this.name);
    }
}

/* Send only the People class */
export default People;
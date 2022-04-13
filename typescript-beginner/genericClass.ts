/* This only determines that the class has generic parameters and methods */
class People<T> {
    name: string;
    age: T;

    show:(data:T)=>T
}
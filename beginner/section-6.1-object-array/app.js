let person1 = {
    name: 'Johan',
    age: 22,
};

let person2 = {
    name: 'Carlos',
    age: 35,
};

let person3 = {
    name: 'Stefanny',
    age: 18,
};

let people = [person1, person2, person3];

for (let i = 0; i < people.length; i++) {
    const element = people[i];

    console.log(`${element.name} -- ${element.age}`);
}
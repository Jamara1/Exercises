/* Includes only properties of a single type */
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();

if ("swim" in pet) {
    pet.swim();
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

/* Step 2: Differences between interface and type */
/* Interfaces here */
interface Animal {
    name: string;
}

/* You can modify the interface by the same name */
interface Animal {
    size: number;
}

interface Tiger extends Animal {
    gender: string;
}

const tiger: Tiger = { name: 'Tiger', size: 12,gender: 'Male' };


/* Tipes here */
/* You can't modify the interface by the same name, it take as duplicate, that would be the difference */
type Animal2 = {
    name: string;
}

type Tiger2 = Animal2 & { 
    gender: string;
}

const tiger2: Tiger2 = {
  name: "Tiger",
  gender: "Male"
};

export default {};

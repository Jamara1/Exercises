/* Includes only properties of a single type */
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim: void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird

const pet = getSmallPet();
pet.layEggs();


/* Includes all the properties of the types */
type Person = {
    firstName: string;
    lastName: string;
}

type Client = {
    clientNumber: number;
}

type NewClient = Person & Client;

let x: NewClient;
x.clientNumber;

export default {}
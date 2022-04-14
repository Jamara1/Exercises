"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let pet = getSmallPet();
if ("swim" in pet) {
    pet.swim();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const tiger = { name: 'Tiger', size: 12, gender: 'Male' };
const tiger2 = {
    name: "Tiger",
    gender: "Male"
};
exports.default = {};

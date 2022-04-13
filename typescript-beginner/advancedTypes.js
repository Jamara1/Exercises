"use strict";
exports.__esModule = true;
var pet = getSmallPet();
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
var tiger = { name: 'Tiger', size: 12, gender: 'Male' };
var tiger2 = {
    name: "Tiger",
    gender: "Male"
};
exports["default"] = {};

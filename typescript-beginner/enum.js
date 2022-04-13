var Address;
(function (Address) {
    Address["Up"] = "UP";
    Address["Down"] = "DOWN";
    Address["Right"] = "RIGHT";
    Address["Left"] = "LEFT";
})(Address || (Address = {}));
var ball = {
    size: 10,
    initialPosition: Address.Down
};
console.log(ball.initialPosition);
var Example;
(function (Example) {
    Example[Example["P1"] = 5] = "P1";
    Example[Example["P2"] = 6] = "P2";
})(Example || (Example = {}));
console.log(Example.P2);

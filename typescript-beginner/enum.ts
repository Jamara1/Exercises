enum Address {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT"
}

interface Ball {
    size: number;
    initialPosition: Address;
}

const ball: Ball = {
    size: 10,
    initialPosition: Address.Down
}

console.log(ball.initialPosition); // DOWN


enum Example {
    P1 = 5,
    P2
}

console.log(Example.P2); //6

export default {}


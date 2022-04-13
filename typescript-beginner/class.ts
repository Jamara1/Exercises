class Hello {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  greet() {
    return "Greetings " + this.message;
  }
}

let hello = new Hello("Typescript");

console.log(hello.greet());

class Animal {
  public name: string;
  readonly size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public isBig(): boolean {
      if(this.size > 10) return true;
      else return false;
  }
}

class Snake extends Animal {
  constructor(name: string, size: number) {
    super(name, size);
  }
}

let snake = new Snake("Piton", 11);
snake.isBig();

export default {}
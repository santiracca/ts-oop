export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('moving');
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof!' + ' ' + this.name);
    }
  }

  move() {
    console.log('Moving as a dog');
    super.move();
  }
}

const fifi = new Animal('fifi');
fifi.move();
fifi.greet();

const chase = new Dog('santi', 'chase');
chase.move();

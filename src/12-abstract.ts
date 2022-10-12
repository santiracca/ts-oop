import { Animal, Dog } from './09-protected';

const animal = new Animal('elite');
animal.greet();

const dog = new Dog('santi', 'chase');
dog.greet();
dog.woof(2);

/* eslint-disable no-unused-vars */

interface Live {
  name: string;
  species: string;
}

export class Person implements Live {
  private isLive: boolean;
  species: string;
  constructor(public name: string, public age: number) {
    this.isLive = true;
    this.species = 'humans';
  }

  greetings() {
    console.log(`Hola, soy ${this.name}`);
  }

  kill() {
    this.isLive = false;
  }
}

const p3 = new Person('Luisa', 34);
const p4 = new Person('Rosa', 64);

// No válido en TS
// p4.foo = 45;
// delete p4.age;

console.log(p3, p4);

p3.greetings();
p3.kill();

class Student extends Person {
  constructor(name: string, age: number, public course: string) {
    super(name, age);
  }

  greetings() {
    super.greetings();
    console.log(`Estudio ${this.course}`);
  }
}

class Dog {
  // eslint-disable-next-line no-useless-constructor
  constructor(public name: string, public species: string) {
    // TODO
  }
}

const s1 = new Student('Ramón', 54, 'Angular');
s1.greetings();

const x: Live = { name: 'Sofia', species: 'Perro' };
const z: Dog = { name: 'Sofia', species: 'Perro' };

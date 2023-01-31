/* eslint-disable no-unused-vars */
import { Character } from './character';

export class Fighter extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public weapon: string,
    public skill: number
  ) {
    super(name, family, age, 'fighter');
    this.message = 'Primero pego y luego pregunto';
  }
}

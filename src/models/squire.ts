/* eslint-disable no-unused-vars */
import { Fighter } from './fighter';
import { Character } from './character';

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public submission: number,
    public master: Fighter
  ) {
    super(name, family, age, 'squire');
    this.message = 'Soy un looser';
  }
}

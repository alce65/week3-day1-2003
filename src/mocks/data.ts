import { Character } from '../models/character';
import { Counselor } from '../models/counselor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { TasksStructure } from '../models/tasks';

// CHARACTERS_MOCK
export const mockTasks: TasksStructure[] = [
  { id: 1, title: 'Algo', responsible: 'Pepe', isCompleted: false },
  { id: 2, responsible: 'Luisa', title: 'Otro Algo', isCompleted: false },
];

export const mockCharacters: Character[] = [
  new King('Jofre', 'Barathon', 23, 2),
  new Fighter('Jame', 'Lannister', 22, 'sword', 7.8),
  new Fighter('Da', 'Da', 22, 'dragons', 8),
];
mockCharacters.push(
  new Counselor('Tyrion', 'Lannister', 34, mockCharacters[2])
);

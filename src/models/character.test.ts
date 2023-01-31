import { Character } from './character';

describe('Given the class Character', () => {
  describe('When I instantiate an object', () => {
    const char = new Character('', '', 0, 'king');
    test(`Then an object should be created with instance properties:
            name · family · age · isAlive - message
            and static property serie = "GoT"`, () => {
      expect(char).toBeInstanceOf(Character);
      expect(char).toHaveProperty('name');
      expect(char).toHaveProperty('family');
      expect(char).toHaveProperty('age');
      expect(char).toHaveProperty('isAlive');
      expect(char).toHaveProperty('message');
      expect(Character.series).toBe('GoT');
    });

    describe('And run the method comunicar', () => {
      test('then it should return a message', () => {
        const expectedMessage = '';
        const result = char.communicate();
        expect(result).toBe(expectedMessage);
      });
    });

    describe('And run the method dead', () => {
      test('then char isAlive property should be false', () => {
        char.dead();
        expect(char.isAlive).toBe(false);
      });
    });
  });
});

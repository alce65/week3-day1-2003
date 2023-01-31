type Category = 'king' | 'fighter' | 'counselor' | 'squire';

type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  category: Category;
};

export class Character implements CharacterStructure {
  static series = 'GoT';
  private _isAlive: boolean;
  public get isAlive(): boolean {
    return this._isAlive;
  }
  protected message: string;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public category: Category
  ) {
    this._isAlive = true;
    this.message = '';
  }
  communicate() {
    return this.message;
  }
  dead() {
    this._isAlive = false;
  }
}

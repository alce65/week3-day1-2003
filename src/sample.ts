/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let foo = 9;
// Tipado estático
// Daría error foo = 'Pepe';
// Tipado fuerte mediante notación de tipos
let bar: string;
// Daria un error bar = 23

let zoo: boolean | null = null;

const s: number = 62;

// Alt const aData: Array<number> = [];
const aData: (number | string)[] = [];

// Error aData.push(true);
aData.push('');
aData.push(34);
console.log(aData);

export function add(a: number, b: number) {
  return a + b;
}

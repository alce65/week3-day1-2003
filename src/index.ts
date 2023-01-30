console.log('Loaded APP');

const language = 'JS';
const template = `
  <p id="p1"></p>
  <p id="p2"></p>
  <div>
    <button>Pintar</button>
  </div>
  <section>
    <input>
    <button>Salvar</button>
    <output>
  </section>
`;

document.querySelector('#root')!.innerHTML = template;

// Localizar
const element1 = document.querySelector('p#p1');
const element2 = document.querySelector('p#p2');
// eslint-disable-next-line no-unused-vars
const elements = document.querySelectorAll('p');

// Modificar
const handlerClick = () => {
  element1!.innerHTML = `Esto esta en <strong>${language}</strong>`;
  element2!.outerHTML = `Esto esta en <strong>${language}</strong>`;
  // Improve element1?.insertAdjacentHTML()
};

const button = document.querySelector('div button');
button!.addEventListener('click', handlerClick);

const section = document.querySelector('section');
const input = section!.querySelector('input');
const output = section!.querySelector('output');
const buttonSalvar = section!.querySelector('button');
buttonSalvar!.addEventListener('click', () => {
  output!.value += input!.value;
  input!.value = '';
});

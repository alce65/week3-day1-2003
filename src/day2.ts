import { mockTasks } from './mocks/data';
import { TasksStructure } from './models/tasks';

console.log(`Dia 2`);
const root = document.querySelector('#root') as HTMLDivElement;
const headerTemplate = `
  <header class="header">
    <h1>Learning DOM</h1>
    <p>Segundo día</p>
  </header>
`;
root.insertAdjacentHTML('afterbegin', headerTemplate);

const renderList = (data: TasksStructure[]) => {
  let tasksTemplate = '<div class="lista">';
  data.forEach((item) => {
    tasksTemplate += `<p>
      id: ${item.id},
      title: ${item.title},
      responsible: ${item.responsible},
      isCompleted: ${item.isCompleted}
      <button data-id="${item.id}">🗑️ ${item.id}</button>
    </p>`;
  });
  tasksTemplate += '</div>';
  root.insertAdjacentHTML('beforeend', tasksTemplate);
};

renderList(mockTasks);

const handlerDelete = (event: Event) => {
  const element = event.target as HTMLButtonElement;

  const id = Number(element.dataset.id);
  console.log('click', id);
  const data = mockTasks.filter((item) => item.id !== id);
  console.log(data);
  document.querySelector('.lista')!.innerHTML = '';
  renderList(data);
};

const buttons = document.querySelectorAll('button');
buttons.forEach((item) => item.addEventListener('click', handlerDelete));

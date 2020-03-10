import Structure from './structure';

const form = document.querySelector('form');
const inputTitle = document.querySelector('#inputTodo');
const txtDescription = document.querySelector('#txtDescription');
const inputDate = document.querySelector('#inputDate');
const seletPriority = document.querySelector('#seletPriority');
const ulTodos = document.querySelector('#ulTodos');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const li = document.createElement('li');
  // console.log(checkbox);
  const todo = Structure.addTodo(inputTitle.value,txtDescription.value,inputDate.value,seletPriority.value);
   li.innerHTML = `<input type="checkbox"> ${todo.title} : ${todo.description}`;
  
  ulTodos.append(li);
})
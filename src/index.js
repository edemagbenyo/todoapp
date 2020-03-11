import Structure from './structure';
import './style.css'

const button = document.querySelector('button');
const form = document.querySelector('form');
const inputTitle = document.querySelector('#inputTodo');
const txtDescription = document.querySelector('#txtDescription');
const inputDate = document.querySelector('#inputDate');
const seletPriority = document.querySelector('#seletPriority');
const todoList = document.querySelector('#todoList');

button.addEventListener('click', () => {
  button.style.display = "none";
  form.style.display = "inline";
})

form.style.display = "none";


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const divItem = document.createElement('div');
  divItem.classList='item';
 

  // console.log(checkbox);
  const todo = Structure.addTodo(inputTitle.value,txtDescription.value,inputDate.value,seletPriority.value);
  divItem.innerHTML = `<input type="checkbox"><p>${todo.title} : ${todo.description}</p>`;
  
  todoList.append(divItem);

})
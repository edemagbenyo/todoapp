import Structure from './structure';
import './style.css'

const buttonProject = document.querySelector('#btnProject');
const buttonTask = document.querySelector('#btnTask');
const formProject = document.querySelector('#formProject');
const formTask = document.querySelector('#formTask');
const inputTitle = document.querySelector('#inputTodo');
const txtDescription = document.querySelector('#txtDescription');
const inputDate = document.querySelector('#inputDate');
const seletPriority = document.querySelector('#seletPriority');
const todoList = document.querySelector('#todoList');

buttonProject.addEventListener('click', () => {
  buttonProject.style.display = "none";
  formProject.style.display = "inline";
})

buttonTask.addEventListener('click', () => {
  buttonTask.style.display = "none";
  formTask.style.display = "inline";
})

formProject.style.display = "none";

formTask.style.display = "none";


formTask.addEventListener('submit',(e)=>{
  e.preventDefault();
  const divItem = document.createElement('div');
  divItem.classList='item';
 

  // console.log(checkbox);
  const todo = Structure.addTodo(inputTitle.value,txtDescription.value,inputDate.value,seletPriority.value);
  divItem.innerHTML = `<input type="checkbox"><p>${todo.title} : ${todo.description}</p>`;
  
  todoList.append(divItem);

})
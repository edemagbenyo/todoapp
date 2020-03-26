import Structure from './structure';
import './style.css'

const buttonProject = document.querySelector('#btnProject');
const buttonTask = document.querySelector('#btnTask');
const formProject = document.querySelector('#formProject');
const inputProjectName = document.querySelector('#projectName');
const divProjects =  document.querySelector('.projects');

const formTask = document.querySelector('#formTask');
const inputTitle = document.querySelector('#inputTodo');
const txtDescription = document.querySelector('#txtDescription');
const inputDate = document.querySelector('#inputDate');
const seletPriority = document.querySelector('#seletPriority');
const todoList = document.querySelector('#todoList');


//Load the default project
const {projects} = Structure;
projects.forEach(project=>{
  const divProject = document.createElement('div');
  divProject.innerHTML = `<p data-id= ${project.id}>${project.name}</p>`
  divProjects.append(divProject)
});

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


formProject.addEventListener('submit',(e)=>{
  e.preventDefault();

  const divProject = document.createElement('div');
  const project = Structure.addProject(inputProjectName.value);
  divProject.innerHTML = `<p data-id= ${project.id}>${project.name}</p>`

  divProjects.append(divProject);
})
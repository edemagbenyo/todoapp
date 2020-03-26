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
  const pProject = document.createElement('p')
  pProject.setAttribute('data-id',project.id)
  pProject.setAttribute('class','project')
  pProject.setAttribute('data-status','active')
  pProject.innerText = project.name
  setActiveBadge(pProject)
  divProject.append(pProject);
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
 
   //Get the project with data attribute of status=active
  const activeProject = document.querySelector('p[data-status="active"]')
  const projectID = activeProject.dataset.id;

  // console.log(checkbox);
  const todo = Structure.addTodo(inputTitle.value,txtDescription.value,inputDate.value,seletPriority.value,false,projectID);
  divItem.innerHTML = `<input type="checkbox"><p data-id = ${todo.id} data-projectid = ${todo.projectid}>${todo.title} : ${todo.description}</p>`;
  
  console.log(todo);
  todoList.append(divItem);

})


formProject.addEventListener('submit',(e)=>{
  e.preventDefault();

  const divProject = document.createElement('div');
  const project = Structure.addProject(inputProjectName.value);
  divProject.innerHTML = `<p class="project" data-id= ${project.id}>${project.name}</p>`

  divProjects.append(divProject);
})

divProjects.addEventListener('click',(e)=>{
  const projects = document.querySelectorAll(".project");
  const projectId = e.target.dataset.id;
  const itemSelected = todoList.querySelectorAll('.item');
  itemSelected.forEach(task => {
  const pTag = task.children[1];
  const pTagprojectId = pTag.dataset.projectid;
  if (projectId != pTagprojectId) {
    task.style.display = 'none';
  }
  else {
    task.style.display = 'inline';
  } 
  });
  
  projects.forEach(project=>{
    project.setAttribute("data-status","")
    const badge = project.querySelector('.badge');
    if(badge){
      badge.parentNode.removeChild(badge)
    }
  });
  const newActiveProject = e.target;
  //set the status to => 'active'
  newActiveProject.setAttribute('data-status','active')

  setActiveBadge(newActiveProject)
});

function setActiveBadge(p){

  //check if p has a badge
  const existingbadge = p.querySelector('.badge')
  if(existingbadge) return;

  const badge = document.createElement('span')
  badge.setAttribute('class','badge badge-primary badge-pill');
  badge.innerHTML='active'
  p.append(badge);
}
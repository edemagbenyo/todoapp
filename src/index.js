import Structure from "./structure";
import "./style.css";

const buttonProject = document.querySelector("#btnProject");
const buttonTask = document.querySelector("#btnTask");
const formProject = document.querySelector("#formProject");
const inputProjectName = document.querySelector("#projectName");
const divProjects = document.querySelector(".projects");

const formTask = document.querySelector("#formTask");
const inputTitle = document.querySelector("#inputTodo");
const txtDescription = document.querySelector("#txtDescription");
const inputDate = document.querySelector("#inputDate");
const seletPriority = document.querySelector("#seletPriority");
const todoList = document.querySelector("#todoList");
const taskid = document.querySelector("#taskid");
const btnSubmit = document.querySelector("#btnSubmit");

//Load tasks from localstorage
Structure.setInitialTodos()
Structure.setInitialProjects()

//Load the default project
const liveProjects = Structure.projects;
liveProjects.forEach(project => {
  const divProject = document.createElement("div");
  const pProject = document.createElement("p");
  pProject.setAttribute("data-id", project.id);
  pProject.setAttribute("class", "project");
  pProject.innerText = project.name;
  if(project.name=='default') {
    pProject.setAttribute("data-status", "active");
    setActiveBadge(pProject);
  }
  divProject.append(pProject);
  divProjects.append(divProject);
});


const liveTodos = Structure.todos
const activeProjectId = document.querySelector('p[data-status="active"').dataset.id;
liveTodos.filter(todo=>todo.projectid == activeProjectId).forEach((todo)=>{
  
  createTodo(todo)

})

buttonProject.addEventListener("click", () => {
  buttonProject.style.display = "none";
  formProject.style.display = "inline";
});

buttonTask.addEventListener("click", () => {
  buttonTask.style.display = "none";
  formTask.style.display = "inline";
});

formProject.style.display = "none";

formTask.style.display = "none";

formTask.addEventListener("submit", e => {
  e.preventDefault();

  //Update
  if(btnSubmit.innerText=='Update'){
    //update values in the array
    Structure.updateTodo(taskid.value, inputTitle.value,
      txtDescription.value,
      inputDate.value,
      seletPriority.value)

    //update item in the todoList
    const updated = document.querySelector('p[data-id="'+taskid.value+'"]')
    updated.innerText = `${inputTitle.value} : ${txtDescription.value}`

    //reset all form elements
    resetForm();
    btnSubmit.innerText="Add"
    return;
  }

  const divItem = document.createElement("div");
  divItem.classList = "item";

  //Get the project with data attribute of status=active
  const activeProject = document.querySelector('p[data-status="active"]');
  const projectID = activeProject.dataset.id;

  // console.log(checkbox);
  const todo = Structure.addTodo(
    inputTitle.value,
    txtDescription.value,
    inputDate.value,
    seletPriority.value,
    false,
    projectID
  );
  divItem.innerHTML = `<input type="checkbox"><p data-id = ${todo.id} data-projectid = ${todo.projectid}>${todo.title} : ${todo.description}</p>`;

  const editButton = document.createElement("button");
  editButton.classList = "btn btn-sm btn-info edit";
  editButton.innerText = "Edit";
  // TODO: extract this into its own function
  const deleteButton = document.createElement("button");
  deleteButton.classList = "btn btn-sm btn-danger delete";
  deleteButton.innerText = "Delete";

  divItem.append(editButton, deleteButton);
  todoList.append(divItem);

  //reset all form elements
  resetForm();
});

formProject.addEventListener("submit", e => {
  e.preventDefault();

  const divProject = document.createElement("div");
  const project = Structure.addProject(inputProjectName.value);
  divProject.innerHTML = `<p class="project" data-id= ${project.id}>${project.name}</p>`;

  divProjects.append(divProject);
});

divProjects.addEventListener("click", e => {
  const projects = document.querySelectorAll(".project");
  const projectId = e.target.dataset.id;
  const itemSelected = liveTodos.filter((todo)=>todo.projectid == projectId);
  //reset todoList
  todoList.innerHTML =""
  itemSelected.forEach(task => {
    createTodo(task)
  });

  
  projects.forEach(project => {
    project.setAttribute("data-status", "");
    const badge = project.querySelector(".badge");
    if (badge) {
      badge.parentNode.removeChild(badge);
    }
  });
  const newActiveProject = e.target;
  //set the status to => 'active'
  newActiveProject.setAttribute("data-status", "active");

  setActiveBadge(newActiveProject);
});

function setActiveBadge(p) {
  //check if p has a badge
  const existingbadge = p.querySelector(".badge");
  if (existingbadge) return;

  const badge = document.createElement("span");
  badge.setAttribute("class", "badge badge-primary badge-pill");
  badge.innerHTML = "active";
  p.append(badge);
}

function resetForm() {
  inputTitle.value = "";
  txtDescription.value = "";
  inputDate.value = "";
  seletPriority.value = "low";
}

// Attach a listener to the todoList
todoList.addEventListener("click", e => {
  const pTagId = e.target.previousSibling.dataset.id;
  const { todos } = Structure;
  const todo = todos.find(todo => todo.id == pTagId);
  if (e.target.nodeName == "BUTTON" && e.target.innerText=="Edit") {
    editTask(todo);

    taskid.value = todo.id;
    //Change the text of save to update
    btnSubmit.innerText="Update"
  }else if(e.target.nodeName == "BUTTON" && e.target.innerText=="Delete"){
    deleteTask(e.target)
  }
});
function editTask(todo) {
  inputTitle.value = todo.title ;
  txtDescription.value = todo.description;
  inputDate.value = todo.dueDate;
  seletPriority.value = todo.priority;

  // Structure.updateTodo(todo)
}
function deleteTask(target){
  const taskId = target.previousSibling.dataset.id;
  //Remove the task from the list 
  target.parentNode.remove()
  //Remove the task from the array
  Structure.deleteTodo(taskId)
}

function createTodo(todo){
  const divItem = document.createElement("div");
  divItem.classList = "item";

  divItem.innerHTML = `<input type="checkbox"><p data-id = ${todo.id} data-projectid = ${todo.projectid}>${todo.title} : ${todo.description}</p>`;
  const editButton = document.createElement("button");
  editButton.classList = "btn btn-sm btn-info edit";
  editButton.innerText = "Edit";
  // TODO: extract this into its own function
  const deleteButton = document.createElement("button");
  deleteButton.classList = "btn btn-sm btn-danger delete";
  deleteButton.innerText = "Delete";

  divItem.append(editButton, deleteButton);
  todoList.append(divItem);
}
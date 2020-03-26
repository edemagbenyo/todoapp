import Todo from './todo';
import Project from './project';
// import Project from './project';
export default (function(){

  const todos = [];
  const projects = [];

  //Initiliaze a default project
  const defaultProject = new Project("default");
  projects.push(defaultProject);

  function addTodo(title,description,dueDate,priority){
    const todo = new Todo(title,description,dueDate,priority);
    todos.push(todo);
    return todo
  }
  function changeStatus(id){
    const todo = todos.find(todo=>{
      todo.id == id
    })
    todo.completed = !todo.completed
    return todo;
  }

  function addProject(name){
    const project = new Project(name)
    projects.push(project);
    return project;
  }
  return{
    addTodo,
    changeStatus,
    addProject,
    todos,
    projects
  }
})()
import Todo from './todo';
import Project from './project';
// import Project from './project';
export default (function(){

  const todos = [];
  const projects = [];

  //Initiliaze a default project
  const defaultProject = new Project("default");
  projects.push(defaultProject);

  function addTodo(title,description,dueDate,priority,completed,projectid){
    const todo = new Todo(title,description,dueDate,priority,completed,projectid);
    todos.push(todo);
    return todo
  }

  function updateTodo(todoid, title, description,duedate,priority,completed=false){
    todos.map(todo=>{
      if(todo.id == todoid){
        todo.title=title;
        todo.description=description
        todo.dueDate = duedate
        todo.completed = completed
      }
    })
    console.log(todos);
  }

  // function delete(){

  // }

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
    updateTodo,
    todos,
    projects
  }
})()
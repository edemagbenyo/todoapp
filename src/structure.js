import Todo from './todo';
import Project from './project';
import Model from './model';
// import Project from './project';
export default (function Structure() {
  const todos = [];
  // const model = new Model();
  const projects = [];


  function liveTodos() {
    return Model.getTodos();
  }

  function setInitialTodos() {
    const loadedTodos = JSON.parse(liveTodos());
    if (!loadedTodos || loadedTodos.length === 0) {
      todos.push(...[]);
    }
    todos.push(...(loadedTodos || []));
  }

  function liveProjects() {
    return Model.getProjects();
  }
  function setInitialProjects() {
    const loadedProjects = JSON.parse(liveProjects());

    if (!loadedProjects || loadedProjects.length === 0) {
      const defaultProject = new Project('default');
      projects.push(defaultProject);
      Model.updateProjects(projects);
    } else {
      projects.push(...loadedProjects);
    }
  }

  function addTodo(title, description, dueDate, priority, completed, projectid) {
    const todo = new Todo(title, description, dueDate, priority, completed, projectid);
    todos.push(todo);

    Model.updateTodos(todos);
    return todo;
  }

  function updateTodo(todoid, title, description, duedate, priority, completed = false) {
    todos.map(todo => {
      if (todo.id === parseInt(todoid)) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = duedate;
        todo.completed = completed;
      }
      return todo;
    });
    Model.updateTodos(todos);
  }

  function deleteTodo(todoid) {
    const index = todos.findIndex(todo => todo.todoid === todoid);
    todos.splice(index, 1);
    Model.updateTodos(todos);
  }

  function changeStatus(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    return todo;
  }

  function addProject(name) {
    const project = new Project(name);
    projects.push(project);
    Model.updateProjects(projects);
    return project;
  }
  return {
    addTodo,
    changeStatus,
    addProject,
    updateTodo,
    deleteTodo,
    liveTodos,
    setInitialTodos,
    setInitialProjects,
    liveProjects,
    todos,
    projects,
  };
}());
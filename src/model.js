export default class Model {
  static updateTodos(todos) {
    const string = JSON.stringify(todos);
    localStorage.setItem('todos', string);
  }

  static getTodos() {
    return localStorage.getItem('todos');
  }

  static updateProjects(projects) {
    const stringed = JSON.stringify(projects);
    localStorage.setItem('projects', stringed);
  }

  static getProjects() {
    return localStorage.getItem('projects');
  }
}
export default class Todo {
  constructor(title, description, dueDate, priority, completed, projectid) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.projectid = projectid;
    this.id = Math.floor(Math.random() * 10000);
  }

  static updateTodos(todos) {
    const string = JSON.stringify(todos);
    localStorage.setItem('todos', string);
  }

  static getTodos() {
    return localStorage.getItem('todos');
  }
}
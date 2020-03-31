import Todo from './todo';

const TodoController = (function TodoController() {
  const id = Math.floor(Math.random() * 10000);

  const todos = [];

  function liveTodos() {
    return Todo.getTodos();
  }

  function setInitialTodos() {
    const loadedTodos = JSON.parse(liveTodos());
    if (!loadedTodos || loadedTodos.length === 0) {
      todos.push(...[]);
    }
    todos.push(...(loadedTodos || []));
  }

  function addTodo(title, description, dueDate, priority, completed, projectid) {
    const todo = new Todo(title, description, dueDate, priority, completed, projectid);
    todos.push(todo);

    Todo.updateTodos(todos);
    return todo;
  }

  function updateTodo(todoid, title, description, duedate, priority, completed = false) {
    todos.map(todo => {
      if (todo.id === parseInt(todoid, 10)) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = duedate;
        todo.completed = completed;
      }
      return todo;
    });
    Todo.updateTodos(todos);
  }

  function deleteTodo(todoid) {
    const index = todos.findIndex(todo => todo.todoid === todoid);
    todos.splice(index, 1);
    Todo.updateTodos(todos);
  }

  function changeStatus(id) {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    return todo;
  }

  return {
    id, todos, liveTodos, setInitialTodos, addTodo, updateTodo, deleteTodo, changeStatus,
  };
}());

export default TodoController;

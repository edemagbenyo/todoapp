import Todo from './todo';
// import Project from './project';
export default (function(){

  const todos = [];
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
  return{
    addTodo,
    changeStatus,
    todos
  }
})()
export default function Todo(title, description,dueDate,priority,completed=false){
  const id = Math.floor(Math.random()*10000);
  return {
    id,title,description,dueDate,priority,completed
  }
}

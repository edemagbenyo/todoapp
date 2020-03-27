export default class Model{
  constructor(){

  }
  updateTodos(todos){
    const string = JSON.stringify(todos)
    localStorage.setItem('todos',string)
  }

  getTodos(){
    return localStorage.getItem('todos')
  } 
  updateProjects(projects){
    const stringed = JSON.stringify(projects)
    localStorage.setItem('projects',stringed)
  }

  getProjects(){
    return localStorage.getItem('projects')
  } 
}
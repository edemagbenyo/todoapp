export default class Project {
  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100000);
  }

  static updateProjects(projects) {
    const stringed = JSON.stringify(projects);
    localStorage.setItem('projects', stringed);
  }

  static getProjects() {
    return localStorage.getItem('projects');
  }
}
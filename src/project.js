export default class Project {
  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100000);
  }
}
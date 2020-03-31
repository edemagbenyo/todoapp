import Project from './project';

// ProjectController.projects = [];
const ProjectController = (function ProjectController() {
  const projects = [];

  function liveProjects() {
    return Project.getProjects();
  }

  function setInitialProjects() {
    const loadedProjects = JSON.parse(liveProjects());

    if (!loadedProjects || loadedProjects.length === 0) {
      const defaultProject = new Project('default');
      projects.push(defaultProject);
      Project.updateProjects(projects);
    } else {
      projects.push(...loadedProjects);
    }
  }

  function addProject(name) {
    const project = new Project(name);
    projects.push(project);
    Project.updateProjects(projects);
    return project;
  }

  return {
    projects, addProject, setInitialProjects, liveProjects,
  };
}());


export default ProjectController;
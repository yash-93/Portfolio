import React from "react";
import ProjectDesc from "./ProjectDesc";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectDesc />
      <ProjectDesc />
      <ProjectDesc />
      <ProjectDesc />
      <div id="addNewProject">
        <i class="fas fa-plus fa-5x"></i>
      </div>
    </div>
  );
};

export default Projects;

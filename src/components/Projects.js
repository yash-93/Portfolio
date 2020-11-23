import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectDesc from "./ProjectDesc";

import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("https://yashdeep-backend.herokuapp.com/api/getProjects")
      .then((data) => {
        setProjects(data.data.projects);
        console.log(projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectDesc key={index} projectdetails={project} />
      ))}
      <div id="addNewProject">
        <i class="fas fa-plus fa-5x"></i>
      </div>
    </div>
  );
};

export default Projects;

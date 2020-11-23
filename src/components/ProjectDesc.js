import React from "react";
import { Button } from "react-bootstrap";

import proj_pic from "./static/proj_pic.png";
import Tech from "./Tech";
import "./ProjectDesc.css";

const ProjectDesc = (props) => {
  return (
    <div className="pallete">
      <div className="project_pic">
        <img src={proj_pic} alt="thumbnail" />
      </div>
      <div className="project_desc">
        <h2 id="project_title">{props.projectdetails.title}</h2>
        <p id="project_content">{props.projectdetails.description}</p>
        <div className="tech_stack">
          {props.projectdetails.techstack.map((tech, index) => (
            <Tech key={index} tech={tech} />
          ))}
          {/* <Tech tech="Node.js" />
          <Tech tech="Puppeteer" />
          <Tech tech="React-Router" /> */}
        </div>
        <br></br>
        <div className="code_demo_btns">
          <Button
            className="demo"
            onClick={() => {
              window.open(`${props.projectdetails.demo}`, "_blank");
            }}
          >
            View Demo
          </Button>
          <Button
            className="code"
            onClick={() => {
              window.open(`${props.projectdetails.code}`, "_blank");
            }}
          >
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;

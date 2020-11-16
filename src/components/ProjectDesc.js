import React from "react";
import { Button } from "react-bootstrap";

import proj_pic from "./static/proj_pic.png";
import Tech from "./Tech";
import "./ProjectDesc.css";

const ProjectDesc = () => {
  return (
    <div className="pallete">
      <div className="project_pic">
        <img src={proj_pic} alt="thumbnail" />
      </div>
      <div className="project_desc">
        <h2 id="project_title">Codeforces CLI</h2>
        <p id="project_content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
        <div className="tech_stack">
          <Tech tech="Node.js" />
          <Tech tech="Puppeteer" />
          <Tech tech="React-Router" />
        </div>
        <br></br>
        <div className="code_demo_btns">
          <Button className="demo">View Demo</Button>
          <Button className="code">View Code</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;

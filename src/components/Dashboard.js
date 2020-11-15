import React from "react";
import { Button } from "react-bootstrap";

import illustration from "./static/web_developer.svg";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="calltoaction">
        <div style={{ marginTop: "25%", paddingLeft: "10%" }}>
          <h1>
            Hello! <br></br>
            <span>I'm Yashdeep.</span>
          </h1>
          <p>
            Final year MCA student at Bhai Parmanand Institute of Business
            Studies, Guru Gobind Singh Indraprastha University. <br></br>I'm
            passionate about software and full stack development.
          </p>
          <Button>
            <Link to="/contact">Get In Touch!</Link>
          </Button>
        </div>
      </div>
      <div className="illustration">
        <img src={illustration} alt="guy_with_laptop" />
      </div>
    </section>
  );
};

export default Dashboard;

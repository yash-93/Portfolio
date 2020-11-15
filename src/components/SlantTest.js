import React from "react";

import "./SlantTest.css";

const SlantTest = () => {
  return (
    <div className="slant">
      {/* <h2 id="skills">Find me online</h2> */}
      <div className="socialprofiles">
        <a href="https://github.com/yash-93" target="_blank">
          <i class="fab fa-github fa-4x"></i>
        </a>
        <a href="https://www.linkedin.com/in/yashdeep-bachhas/" target="_blank">
          <i class="fab fa-linkedin-in fa-4x"></i>
        </a>
        <a href="https://www.facebook.com/yash.deep.97/" target="_blank">
          <i class="fab fa-facebook-f fa-4x"></i>
        </a>
        <a href="https://www.codechef.com/users/yashwow" target="_blank">
          <i class="fas fa-code fa-4x"></i>
        </a>
      </div>
    </div>
  );
};

export default SlantTest;

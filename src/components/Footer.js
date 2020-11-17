import React from "react";

import "./Footer.css";

const SlantTest = () => {
  return (
    <div className="footer">
      <div className="socialprofiles">
        <a href="https://github.com/yash-93" target="_blank" rel="noreferrer">
          <i class="fab fa-github fa-4x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yashdeep-bachhas/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in fa-4x"></i>
        </a>
        <a
          href="https://www.facebook.com/yash.deep.97/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-facebook-f fa-4x"></i>
        </a>
        <a
          href="https://www.codechef.com/users/yashwow"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-code fa-4x"></i>
        </a>
      </div>
    </div>
  );
};

export default SlantTest;

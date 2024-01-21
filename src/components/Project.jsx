import React from "react";
import { IoLogoGithub } from "react-icons/io";

// React functional component that accesses props from Portfolio.jsx component
function Project({ title, description, appLink, repoLink, image }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top left",
  };
    
  // Individual card structure and style receiving props from above Project functional component
  return (
    <div className="col-md-6 mb-4">
      <div className="card card-with-aspect-ratio">
        <div className="card-body">
          <div className="card-image" style={cardStyle}></div>
          <div className="content">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="card-title mb-1 px-5">
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h2>
              <h2>
                <a className = "p-2 display-2" href={repoLink} target="_blank" rel="noopener noreferrer">
                <IoLogoGithub />
                </a>
              </h2>
            </div>
            <h4 className="card-text text-start">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
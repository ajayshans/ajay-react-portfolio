import React from "react";

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
            <div className="d-flex align-items-center justify-content-end">
              <h2 className="card-title mb-0 me-2">
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h2>
              <h2>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                  Codebase
                </a>
              </h2>
            </div>
            <h4 className="card-text text-end">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
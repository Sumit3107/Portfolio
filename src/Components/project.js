import React, { Component } from "react";

export class project extends Component {
  render() {
    return (
      <div id="projectback">
        <div className="jumbotron" id="jumbo">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-6">
                <center>
                  <h1 className="display-4">Projects</h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.projects.map((project) => {
            return (
              <div key={project.id}>
                <h2 className="text-center mt-5" style={{ color: "black" }}>
                  {project.name}
                </h2>
                <hr />
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3 col-sm-12 shadow-lg bg-light rounded">
                    <img
                      className="w-100 ml-3 mt-3"
                      src={project.image}
                      alt="ourblog"
                    />
                  </div>
                  <div className="col-md-5 col-sm-12 offset-1 col-sm-12">
                    <h5 className="lead">{project.description}</h5>
                    <strong>Technology used:</strong>
                    <ul>
                      {project.tech.map((tech) => (
                        <li key={project.tech.indexOf(tech)}>{tech}</li>
                      ))}
                    </ul>
                    <p>
                      Github-link:{" "}
                      <a href={project.githublink} target="_blank">{project.githublink}</a>
                    </p>
                    <p>
                      Hosted URL:{" "}
                      {project.hostedurl==""?"Not Hosted yet":(<a href={project.hostedurl} target="_blank">{project.hostedurl}</a>)}
                    </p>
                  </div>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default project;

import React, { Component } from "react";
export class home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-4" id="jumbo">
          <h1 className="col-12">Sumit Kumar</h1>
          <hr />
          <div className="row align-items-center">
            <div className="sumit col-md-4 col-sm-12 offset-md-1 shadow-lg p-3 mb-5 rounded">
              <img className="w-100" id="sumit" src={this.props.user.image} alt="sumit" />
            </div>
            <div className="info col-md-6 offset-md-1 col-sm-12  ">
              <h3 className="lead">
                {this.props.user.description}
              </h3>
              <div className="row mt-3">
                <img className="col-12 w-100" src={this.props.user.image2} alt="basic" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Featured projects</h2>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 shadow-lg p-3 mb-5 rounded">
              <img
                className="w-100"
                src={this.props.projects[0].image}
                alt="ourblog"
              />
            </div>
            <div className="col-md-5 col-sm-12 offset-1 col-sm-12">
              <h2 className="display-4 text-center" style={{ color: "blue" }}>
                {this.props.projects[0].name}
              </h2>
              <hr />
              <h5 className="lead">{this.props.projects[0].description}</h5>
              <strong>Technology used:</strong>
              <ul>
                {this.props.projects[0].tech.map((tech) => (
                  <li key={this.props.projects[0].tech.indexOf(tech)}>
                    {tech}
                  </li>
                ))}
              </ul>
              <p>Github-link: <a href={this.props.projects[0].githublink} target="_blank">{this.props.projects[0].githublink}</a></p>
              <p>Hosted URL: <a href={this.props.projects[0].hostedurl} target="_blank">{this.props.projects[0].hostedurl}</a></p>
            </div>
          </div>
          <hr />
          <div className="row">
            <h2 className="ml-3">Dance</h2>
          </div>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <h2 className="display-4 text-center" style={{ color: "blue" }}>
              {this.props.videos[0].name}
              </h2>
              <hr />
              <h5 className="lead">
                A lyrical dance performace by me on one of the best song of {this.props.videos[0].artist}.
              </h5>
              <ul>
                <li>Dance-style: Lyrical</li>
                <li>Song: {this.props.videos[0].name} by {this.props.videos[0].artist}</li>
                <li>Performed by: Sumit Kumar</li>
              </ul>
            </div>
            <div className="col-md-7 offset-1 col-sm-12 shadow-lg p-3 mb-5 rounded">
              <video className="w-100" controls>
                <source src={this.props.videos[0].video} type="video/mp4" />
                <source src={this.props.videos[0].video} type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;

import React, { Component } from "react";
import { Link } from "react-router-dom";
export class navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-light" id="navbar">
        <div className="navbar-brand">
          <Link to="/portfolio">
            <img
              className="logo rounded-circle"
              src={this.props.user.logo}
              alt="logo"
            />
            <h1 className="navbar-brand" style={{ color: "white" }}>
              {this.props.user.name}
            </h1>
          </Link>
        </div>
        <ul className="navbar-nav w-100 float-right">
          <li className="navbar-item">
            <Link
              className=" col-2 nav-link lin active ml-5"
              to="/portfolio/projects"
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <a className="nav-link lin active ml-5" href={this.props.user.resume} target="_blank">
              Resume
            </a>
          </li>
          <li className="navbar-item">
            <Link className="nav-link lin active ml-5" to="/portfolio/videos">
              Videos
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link lin active ml-5" to="/portfolio/about">
              About 
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link lin active ml-5" to="/portfolio/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default navbar;

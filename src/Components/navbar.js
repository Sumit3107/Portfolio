import React, { Component } from 'react'
import {Link} from "react-router-dom"
import logo from "../images/logo.jpg"
export class navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md navbar-dark bg-light" id="navbar">
        <div className="navbar-brand">
          <Link to="/home"><img className="logo rounded-circle" src={logo} alt="" /></Link>
          <h1 className="navbar-brand ml-3">Sumit Kumar</h1>
        </div>
        <ul className="navbar-nav w-100 float-right">
          <li className="navbar-item active">
            <Link className=" col-2 nav-link lin" to="/home">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link lin" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link lin" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
        )
    }
}

export default navbar

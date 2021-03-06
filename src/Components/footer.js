import React, { Component } from 'react'

export class footer extends Component {
    render() {
      const {user}=this.props;
        return (
            <div>
                <div className="footer p-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4">
                <h1>Sumit Kumar</h1>
              </div>
              <div className="col-5 offset-3">
                <div className="row mb-2">
                  <a href={user.github} target="_blank">
                    <i className="fa fa-github " aria-hidden="true"></i>
                    <span className="ml-2">Github</span>
                  </a>
                </div>
                <div className="row mb-2">
                  <a href={user.linkedin} target="_blank">
                    <i className="fa fa-linkedin " aria-hidden="true"></i>
                    <span className="ml-2">Linkdein</span>
                  </a>
                </div>
                <div className="row mb-2">
                  <a href={user.instagram} target="_blank">
                    <i className="fa fa-instagram " aria-hidden="true"></i>
                    <span className="ml-2">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="copy">
          <center>
            <i className="fa fa-copyright" />
            <span className="ml-1">2020. All rights reserved.</span>
          </center>
        </div>
            </div>
        )
    }
}

export default footer

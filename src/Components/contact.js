import React, { Component } from "react";

export class contact extends Component {
  render() {
      const {user}=this.props;
    return (
      <div id="projectback">
        <div className="jumbotron" id="jumbo">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-6">
                <center>
                  <h1 className="display-4">Contact</h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <h2>Primary Contact Details</h2> 
          <hr/> 
          <p>
            <strong>Mail at: </strong>
            {user.gmail}
          </p>
          <p>
            <strong>Phone No.: </strong>
            +91-{user.phone}
          </p>
          <hr/>
          <h2>Secondary Contact Details</h2>
          <hr/>
          <p>
            <strong>Linkedin: </strong>
            {user.linkedin}
          </p>
          <p>
            <strong>Instagram: </strong>
            {user.instagram}
          </p>
        </div>
      </div>
    );
  }
}

export default contact;

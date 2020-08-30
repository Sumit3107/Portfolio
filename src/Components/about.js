import React, { Component } from "react";

export class about extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id="projectback">
        <div className="jumbotron" id="jumbo">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-6">
                <center>
                  <h1 className="display-4"> About </h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <img
                className="rounded-circle w-100"
                src={user.aboutimg}
                alt="sumit"
              />
            </div>
            <div className="col-md-8 offset-md-1 col-sm-12">
              <p>
                <strong> Name: </strong>
                {user.name}
              </p>
              <p>
                <strong> College: </strong> {user.college}
              </p>
              <p>
                <strong> CGPA: </strong>
                {user.cgpa}
              </p>
              <p>
                <strong> Specialization: </strong> {user.spec}
              </p>
              <p>
                <strong> Github: </strong>
                {user.github}
              </p>
              <p>
                <strong> Linkedin: </strong> {user.linkedin}
              </p>
              <p>
                <strong> Instagram: </strong> {user.instagram}
              </p>
            </div>
          </div>
          <hr />
          <h2> Skills </h2> <hr />
          <div className="row">
            {user.skillimg.map((im) => {
              return (
                <div
                  className="card col-md-3 offset-md-1 mt-2 col-sm-12"
                  key={user.skillimg.indexOf(im)}
                >
                  <img className="card-img-top" src={im} alt="skill" />
                  {user.skills.map((skill) => {
                    if (
                      user.skillimg.indexOf(im) === user.skills.indexOf(skill)
                    ) {
                      return (
                        <div className="card-body">
                          <div className="card-title">
                            <h5 className="text-center">{skill}</h5>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
          <hr/>
          <h2>Hobby</h2>
          <hr/>
          <div className="card col-md-3 offset-md-1 mt-2 col-sm-12">
            <img className="card-img-top" src={user.himg} alt="dance"/>
            <div className="card-body">
                          <div className="card-title">
        <h5 className="text-center">{user.hobby}</h5>
                          </div>
                        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;

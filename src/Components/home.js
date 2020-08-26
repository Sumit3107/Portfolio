import React, { Component } from "react";
import sumit from "../images/sumit.jpg";
import ourblog from "../images/ourblog.png";
import dance from "../videos/ektarfa.mp4";
export class home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron p-5" id="jumbo">
          <div className="row align-items-center">
            <div className="info col-md-6 col-sm-12">
              <h1 className="display-4">Hey, I am Sumit Kumar</h1>
              <h3 className="lead">
                A front-end web developer with combine patience, determination
                and persistence to troubleshoot client issues. Also,I love to
                Dance.
              </h3>
            </div>
            <div className="sumit col-md-4 offset-md-2 col-sm-12 shadow-lg p-3 mb-5 rounded">
              <img className="w-100" id="sumit" src={sumit} alt="sumit" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Featured projects</h2>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-7 col-sm-12 shadow-lg p-3 mb-5 rounded">
              <img className="w-100" src={ourblog} alt="ourblog" />
            </div>
            <div className="col-md-4 col-sm-12 offset-1 col-sm-12">
              <h2 className="display-4 text-center" style={{ color: "purple" }}>
                Our Blog
              </h2>
              <hr/>
              <h5 className="lead">
                A simple blog including different kinds of cupcakes, icecreams
                and cakes
              </h5>
              <strong>Technology used:</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <h2>Dance</h2>
          </div>
          <hr />
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <h2 className="display-4 text-center" style={{ color: "purple" }}>
                Ek Tarfa 
              </h2>
              <hr/>
              <h5 className="lead">
                A lyrical dance performace by me on one of the best song of
                Darshan Raval.
              </h5>
              <ul>
                <li>Dance-style: Lyrical</li>
                <li>Song: Ek tarfa by Darshan Rval</li>
                <li>Performed by: Sumit Kumar</li>
              </ul>
            </div>
            <div className="col-md-7 offset-1 col-sm-12 shadow-lg p-3 mb-5 rounded">
              <video className="w-100" controls>
                <source src={dance} type="video/mp4" />
                <source src={dance} type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;

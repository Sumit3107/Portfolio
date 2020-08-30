import React, { Component } from "react";

export class videos extends Component {
  render() {
    return (
      <div id="projectback">
        <div className="jumbotron" id="jumbo">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-6">
                <center>
                  <h1 className="display-4">Videos</h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.props.videos.map((videos) => {
            return (
              <div key={videos.id}>
                <h2 className="text-center mt-5" style={{ color: "black" }}>
                  {videos.name}
                </h2>
                <hr />
                <div className="row align-items-center">
                  <div className="col-md-6 mb-3 col-sm-12 shadow-lg bg-light rounded">
                    <video className="w-100" controls>
                      <source src={videos.video} type="video/mp4" />
                      <source src={videos.video} type="video/ogg" />
                    </video>
                  </div>
                  <div className="col-md-5 col-sm-12 offset-1 col-sm-12">
                    <h5 className="lead">
                      A lyrical dance performace by me on one of the best song
                      of {videos.artist}.
                    </h5>
                    <ul>
                      <li>Dance-style: Lyrical</li>
                      <li>
                        Song: {videos.name} by {videos.artist}
                      </li>
                      <li>Performed by: Sumit Kumar</li>
                    </ul>
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

export default videos;

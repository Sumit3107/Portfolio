import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import Project from "./Components/project"
import Footer from "./Components/footer";
import Video from "./Components/videos";
import Contact from "./Components/contact";
import About from "./Components/about";
import { PROJECTS } from "./shared/projects";
import { VIDEOS } from "./shared/video";
import "./css/style.css";
import { USER} from "./shared/user"
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      videos: VIDEOS,
      user: USER
    };
  }
  render() {
    return (
      <div>
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            exact
            path="/portfolio"
            render={(props) => (
              <Home
                projects={this.state.projects}
                videos={this.state.videos}
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/portfolio/projects"
            render={(props) => (
              <Project
                projects={this.state.projects}
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/portfolio/videos"
            render={(props) => (
              <Video
                videos={this.state.videos}
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/portfolio/about"
            render={(props) => (
              <About
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/portfolio/contact"
            render={(props) => (
              <Contact
                user={this.state.user}
                {...props}
              />
            )}
          />
          <Redirect from="/" to="/portfolio" />
        </Switch>
        <Footer user={this.state.user} />
      </div>
    );
  }
}

export default App;

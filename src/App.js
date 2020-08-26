import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./Components/navbar"
import Home from "./Components/home"
import Footer from "./Components/footer"
import "./css/style.css"
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Redirect from="/" to="/home"/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App

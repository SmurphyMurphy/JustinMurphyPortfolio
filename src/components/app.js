import React, { Component } from "react";

import ProjectContainer from "./portfolio/projects-container";
import AboutMe from "./pages/about";
import Work from "./pages/Work";
import Navbar from "./navbar/Navbar.js";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ProjectContainer />
        <Work />
        <AboutMe />
      </div>
    );
  }
}

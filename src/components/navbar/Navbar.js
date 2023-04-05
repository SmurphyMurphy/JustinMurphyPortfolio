import React, { Component } from "react";
import moment from "moment";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("h:mm:ss"),
    };
  }

  updateTime = () => {
    this.setState({ time: moment().format("h:mm:ss") });
  };

  render() {
    setInterval(this.updateTime, 1000);
    return (
      <div className="navbar">
        {/* Nav Buttons */}
        <div className="navbarButtons">
          <a href="#work">
            <h1>Work</h1>
          </a>

          <a href="#about">
            <h1>About me</h1>
          </a>

          <a href="#projects">
            <h1>Projects</h1>
          </a>
        </div>

        {/* My Info */}
        <div className="navbarMeInfo">
          <h1>Justin Murphy</h1>
          <h3>Full-Stack Engineer</h3>
          <div>{this.state.time}</div>
        </div>
      </div>
    );
  }
}

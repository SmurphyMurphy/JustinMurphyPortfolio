import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedIn } from "@fortawesome/free-solid-svg-icons";

import profilePicture from "../../style/images/profilePicture.jpg";

export default function () {
  return (
    <div className="about">
      <h1 className="headers" id="about">
        About Me
      </h1>

      <div className="aboutContent">
        <div className="left">
          <img src={profilePicture} alt="Profile Picture" />
        </div>

        <div className="right">
          <p>
            I have a lot of different hobbies ranging from video games to
            working on guns. I started working in construction and learning how
            to work on homes. I learned how to put up sheet rock to put down
            hardwood flooring. A couple of years back I taught myself how to
            stream playing video games and make youtube videos, although I don't
            have very many videos. I then got an interest in working on
            computers by playing games. I then wanted to build my own and learn
            the ins and outs of them, which made me want to start learning how
            to code. I decided to go to Bottega and further my education in
            coding. There I learned full-stack development and learned languages
            such as react.js, HTML5, Node.js, Scss, jQuery, MySQL, MongoDB, SQL,
            Python, JavaScript, and CSS. I gained an interest in learning about
            guns and working on them. I started by collecting older style guns,
            then moved to newer styles.
          </p>
          <div className="socials">
            <button
              className="linkedIn"
              href="https://www.linkedin.com/in/justin-murphy-a80422242/"
            >
              <h3>linkedin</h3>
              <FontAwesomeIcon icon={faLinkedIn} />
            </button>

            <button className="Github" href="https://github.com/SmurphyMurphy">
              <h3>Github</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

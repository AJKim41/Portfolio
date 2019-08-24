import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Web Developer with 4 years experience in analysis, design,
              development, maintenance, testing, and deployment of web
              applications. Passionate about software engineering and learning
              new technologies. Adept at working in new environments,
              flexibility, communication, and teamwork.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Andrew Kim</span>
                  <br />
                  <span>(443)878-2672</span>
                  <br />
                  <span>ajkim41@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://docs.google.com/document/d/1V3Mvj2NXpyX2l4xqfWqY-NCzezYOf0CdbZhlozelPE0/edit?usp=sharing"
                    className="button"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}

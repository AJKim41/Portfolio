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
              applications. Experienced in using frameworks and libraries
              building web applications such as React, Jquey, NodeJS,
              HandlebarsJS, and Bootstrap. Adept understanding of Object
              Oriented Design and Development. Experience in installing,
              configuring, creating, managing, monitoring and troubleshooting
              NodeJS servers. Use of third-party APIs in conjunction with
              personal script. Experience in using databases/ORMs such as mySQL,
              Sequelize, MongoDB, and Mongoose. Experience in maintaining
              databases, query optimization, and database architecting. Team
              development, communication, and use of repositories to push and
              pull projects to build applications/software. Experience also with
              Data Structures and Algorithms. Adept at learning and adapting new
              technologies and concepts.
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
                    href="https://docs.google.com/document/d/1DM1rDx3RGfXRO4_f3KHdp3U3iUaRL5aKsEkF_ZxSlNc/edit?usp=sharing"
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

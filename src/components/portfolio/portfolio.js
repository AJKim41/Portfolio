import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="columns portfolio-item">
                <p style={{ margin: "0 0 5px 0;" }}>Movie Guess Game</p>
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Movie Guess Game</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <p style={{ margin: "0 0 5px 0;" }}>Star Wars RPG</p>
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/console.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Star Wars RPG</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="columns portfolio-item">
                <p style={{ margin: "0 0 5px 0;" }}>Friend Finder</p>
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/coffee.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Friend Finder</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* portfolio-wrapper end */}
          </div>{" "}
          {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/retrocam.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Movie Guess Game</h4>
              <p>A name that movie game using films from Studio Ghibli.</p>
              <span className="categories">
                <i className="fa fa-tag" />
                Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://ajkim41.github.io/Word-Guess-Game/">View</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-console.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Star Wars RPG</h4>
              <p>A role palying game based in the Star Wars Universe</p>
              <span className="categories">
                <i className="fa fa-tag" />
                Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://ajkim41.github.io/Star-Wars-RPG-Game/">View</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/m-coffee.jpg"
              alt=""
            />
            <div className="description-box">
              <h4>Friend Finder</h4>
              <p>
                This application matches users based on a score that they
                receive from doing a survey.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Web Development
              </span>
            </div>
            <div className="link-box">
              <a href="https://murmuring-mesa-83851.herokuapp.com">View</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
          {/* modal-03 End */}
        </div>{" "}
        {/* row End */}
      </section>
    );
  }
}

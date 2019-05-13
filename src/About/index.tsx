import { Link, RouteComponentProps } from "@reach/router";
import React, { FC } from "react";
import ReactGA from "react-ga";
import "./About.sass";

const About: FC<RouteComponentProps> = () => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.pageview("/about");
  }
  return (
    <div className="about-container">
      <section className="margin-bottom-large">
        <h3 className="designer-name">What?</h3>
        <div className="padding-left-regular">
          <p className="copy">
            A Highly curated directory 🔎 of professionals in the field of
            Design. Bringing together the Vietnam design community and making
            the design discipline visible for everyone else 🌐.
          </p>
        </div>
      </section>
      <section className="margin-bottom-large">
        <h3 className="designer-name">Why?</h3>
        <div className="padding-left-regular">
          <p className="copy">
            Design is good, is our job to make it great! ✍️
          </p>
          <ul className="about-list">
            <li>Bring designers together.</li>
            <li>Grow and learn together and from each other.</li>
            <li>Helping non-designers understand the value of design.</li>
            <li>Helping businesses see the full value of design.</li>
            <li>Making design less misunderstood.</li>
            <li>Generate a conversation about design beyond skills.</li>
            <li>
              Make design <strong>great</strong> again.
            </li>
          </ul>
        </div>
      </section>
      <section className="margin-bottom-large">
        <div className="display-flex justify-space-between">
          <div className="display-flex column">
            <h3 className="designer-name">Are you a designer?</h3>
            <div className="padding-left-regular">
              <p className="copy">Request to be added</p>
              <p>* What kind of designers? Any kind!</p>
              <p>
                <Link to={process.env.REACT_APP_FORM_URL}>
                  <span className="margin-right-regular">🛵</span>
                  <strong>Join us</strong>
                </Link>
              </p>
            </div>
          </div>
          <div className="display-flex column">
            <h3 className="designer-name">Feedback or ideas?</h3>
            <div className="padding-left-regular">
              <p className="copy">This is just the beginning!</p>
              <p>Tell us what DOV can become.</p>
              <p>
                <Link to={process.env.REACT_APP_FORM_URL}>
                  <span className="margin-right-regular">🌱</span>
                  <strong>Leave us feedback</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="margin-bottom-large">
        <h3 className="designer-name">The team</h3>
        <div className="padding-left-regular">
          <p className="copy">
            Inspired by culture, needs, self reliance, curiosity and gut
            feelings.
          </p>
          <p>
            🤓 We are a couple of designers and developers from Wizeline Vietnam
            who got a gut feeling and wanted to do something about it!
          </p>
        </div>
      </section>
      <section>
        <h3 className="designer-name">What's next?</h3>
        <div className="padding-left-regular">
          <p className="copy">
            Design is good, is our job to make it great! ✍️
          </p>
          <ul className="about-list">
            <li>Get the designer list up and running!</li>
            <li>Improve visual design, experience, and identity.</li>
            <li>Add events, resources, etc...</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;

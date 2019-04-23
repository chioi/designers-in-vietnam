import { Link, RouteComponentProps } from "@reach/router";
import React, { FC } from "react";

const About: FC<RouteComponentProps> = () => (
  <div style={{padding: "0 335px"}}>
    <section>
      <h3 className="designer-name">What?</h3>
      <p>
        A Highly curated directory of professionals in the field of Design.
        Bringing together the Vietnam design community and making the design
        discipline visible for everyone else.
      </p>
    </section>
    <section>
      <h3 className="designer-name">Why?</h3>
      <p>Design is good, is our job to make it great!</p>
      <ul>
        <li>Bring designers together.</li>
        <li>Grow and learn together and from each other.</li>
        <li>Helping non-designers understand the value of design.</li>
        <li>Helping businesses see the full value of design.</li>
        <li>Making design less misunderstood.</li>
        <li>Generate a conversation about design beyond skills.</li>
        <li>Make design great again.</li>
      </ul>
    </section>
    <section style={{ display: "flex" }}>
      <div>
        <h3 className="designer-name">Are you a designer?</h3>
        <p>Request to be added</p>
        <p>* What kind of designers? Any kind!</p>
        <Link to={process.env.REACT_APP_FORM_URL}>
          <span className="margin-bottom-big">🛵</span>
          <span>Join us</span>
        </Link>
      </div>
      <div>
        <h3 className="designer-name">Feedback or ideas?</h3>
        <p>This is just the beginning!</p>
        <p>Tell us what DOV can become.</p>
        <Link to={process.env.REACT_APP_FORM_URL}>
          <span className="margin-bottom-big">🌱</span>
          <span>Leave feedback</span>
        </Link>
      </div>
    </section>
    <section>
      <h3 className="designer-name">The team</h3>
      <p>
        We are a couple of designers and developers from{" "}
        <span>Wizeline Vietnam</span> who got a gut feeling and wanted to do
        something about it!
      </p>
    </section>
    <section>
      <h3 className="designer-name">What's next?</h3>
      <ul>
        <li>Get the designer list up and running!</li>
        <li>Improve visual design, experience, and identity.</li>
        <li>Add events, resources, etc...</li>
      </ul>
    </section>
  </div>
);

export default About;

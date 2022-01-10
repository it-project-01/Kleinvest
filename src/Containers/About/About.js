import "./About.css";
import React, { Component } from "react";
import Title from "../../Components/Title";
import Video from "../../Components/Video";
import LogoText from "../../Components/LogoText/LogoText";

export default class About extends Component {
  render() {
    return (
      <section className="aboutSection">
        <Title
          heading="About Us"
          subtitle="Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics "
        />
        <div className="row">
          <div className="col-md-10 aboutContent">
            <Video className="me-3" />
            <LogoText
              title="Most trusted in our field"
              subtitle="Most calendars are designed for teams. Slate 
            is designed for freelancers who want a simple way to plan their schedule."
            />
          </div>
        </div>
      </section>
    );
  }
}

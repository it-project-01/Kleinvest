import "./About.css";
import React, { Component } from "react";
import Title from "../../Components/Title";
import Video from "../../Components/Video";
import LogoText from "../../Components/LogoText/LogoText";
import { Container } from "reactstrap";

export default class About extends Component {
  render() {
    return (
      <section className="aboutSection">
        <Container>
          <Title
            heading="About Us"
            subtitle="Problems trying to resolve the conflict between 
              the two major realms of Classical physics: Newtonian mechanics "
          />
          <div className="d-flex justify-content-center">
            <div className="row aboutContent">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Video />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                <LogoText
                  title="Most trusted in our field"
                  subtitle="Most calendars are designed for teams. Slate 
                   is designed for freelancers who want a simple way to plan their schedule."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

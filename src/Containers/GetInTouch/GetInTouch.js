import "./GetInTouch.css";
import React, { Component } from "react";
import Title from "../../Components/Title";
import GetInTouchCard from "../../Components/GetInTouchCard/GetInTouchCard";
import phoneIcon from "../../images/phone.png";
import locationIcon from "../../images/location.png";
import envelopeIcon from "../../images/envelope.png";
import { Container } from "reactstrap";

const data = [
  {
    icon: phoneIcon,
    name: "georgia.young@example.com",
    lastName: "georgia.young@ple.com",
    className: "bg-white",
  },
  {
    icon: locationIcon,
    name: "georgia.young@example.com",
    lastName: "georgia.young@ple.com",
    className: "bg-success text-white z-index-dropdown h-500px",
  },
  {
    icon: envelopeIcon,
    name: "georgia.young@example.com",
    lastName: "georgia.young@ple.com",
    className: "bg-white",
  },
];

export default class GetInTouch extends Component {
  render() {
    return (
      <section className="bigTouch">
        <Container>
          <Title
            heading="Get In Touch"
            subtitle="Problems trying to resolve the conflict between 
               the two major realms of Classical physics: Newtonian mechanics"
          />
          <div className="row mt-5">
            {data.map((value, index) => {
              return (
                <div
                  className="col-md-6 col-lg-4 mb-4 align-items-center"
                  key={index}
                >
                  <GetInTouchCard
                    icon={value.icon}
                    name={value.name}
                    lastName={value.lastName}
                    className={value.className}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
}

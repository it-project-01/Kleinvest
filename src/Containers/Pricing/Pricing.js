import "./Pricing.css";
import React, { Component } from "react";
import Title from "../../Components/Title";
import PricingCard from "../../Components/PricingCard/PricingCard";
import { Container } from "reactstrap";

const data = [
  {
    title: "FREE",
    subtitle: "Organize across all apps by hand",
    price: "0",
  },
  {
    title: "Silver",
    subtitle: "Organize across all apps by hand",
    price: "9.99",
  },
  {
    title: "Gold",
    subtitle: "Organize across all apps by hand",
    price: "19.99",
  },
];
export default class Pricing extends Component {
  render() {
    return (
      <section>
        <Container>
          <div className="titleContainer">
            <Title
              heading="Pricing"
              subtitle="Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics "
            />
          </div>
          <div className="row justify-content-center">
            {data.map((value, index) => {
              return (
                <div className="col-8 col-lg-4 mb-4" key={index}>
                  <PricingCard
                    title={value.title}
                    subtitle={value.subtitle}
                    price={value.price}
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

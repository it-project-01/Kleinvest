import "./Strategy.css";
import React, { PureComponent } from "react";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import SmallContainer from "../../Components/SmallContainer";

const data = [
  {
    title: "Investment Trading",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 1,
  },
  {
    title: "Raising Funds",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 2,
  },
  {
    title: "Financial Analysis",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 3,
  },
  {
    title: "Taxation Planning",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 4,
  },
  {
    title: "Save money and time",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 5,
  },
  {
    title: "Outsourced Consulting ",
    subtitle: "the quick fox jumps over the lazy dog",
    id: 6,
  },
];

export default class Strategy extends PureComponent {
  render() {
    return (
      <section>
        <Container>
          <Title
            heading="Better Strategy With Quality Business"
            subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          />
          <div className="row mt-5">
            {data.map((value, index) => {
              return (
                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                  <SmallContainer
                    title={value.title}
                    subtitle={value.subtitle}
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

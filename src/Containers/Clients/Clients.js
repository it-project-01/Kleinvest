import "./Clients.css";
import React, { PureComponent } from "react";
import Title from "../../Components/Title";
import WhatClientsSay from "../../Components/WhatClientsSay/WhatClientsSay";
import user1 from "../../user.1.png";
import user2 from "../../user.2.png";

const data = [
  {
    image: user1,
    name: "Regina Miles",
    job: "Designer",
    star: 4,
    text: "This proved to be impossible using concepts of space and time. Einstein new view of time first and then",
  },
  {
    image: user2,
    name: "Palonchi Pistonchiev",
    job: "Designer",
    star: 3,
    text: "This proved to be impossible using concepts of space and time. Einstein new view of time first and then",
  },
];
export default class Clients extends PureComponent {
  render() {
    return (
      <section>
        <Title
          heading="What Clients Say"
          subtitle="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics"
        />
        <div className="row mt-4">
          {data.map((value, index) => {
            return (
              <div className="col-md-6 ClientsDiv" key={index}>
                <WhatClientsSay value={value} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

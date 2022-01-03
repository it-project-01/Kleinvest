import React, { Component } from "react";
import { Button } from "reactstrap";
import Title from "../../Components/Title";
import "./Creating.css";

export default class Creating extends Component {
  render() {
    return (
      <div className="row justify-content-center creatingContainer">
        <div>
          <Title
            heading="Creating a Beautifull & Usefull Solutions"
            subtitle="Problems trying to resolve the conflict between the two mWe know how large objects will act, but things on a small scale just do not act that way."
          />
          <div className="creatingButton">
            <div className="creatingButtonOne">
              <Button color="primary">Get Quote Now</Button>
            </div>
            <div className="creatingButtonTwo">
              <Button color="inherit">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

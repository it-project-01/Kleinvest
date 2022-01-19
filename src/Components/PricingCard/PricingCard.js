import "./PricingCard.css";
import React, { Component } from "react";
import { Button } from "reactstrap";

export default class PricingCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <div className="pricingCard">
        <div className="pricingCardText">
          <h5 className="fw-bold">{this.state.title}</h5>
          <p className="fw-bold text-secondary">{this.state.subtitle}</p>
          <div>
            <h2 className="text-primary">{this.state.price}$</h2>
            <p className="text-info">Per Month</p>
          </div>
        </div>
        <div className="buttonDiv">
          <Button color="primary">Try for free</Button>
        </div>
        <div>
          <ul className="list">
            <li className="checked">
              <p>Unlimited product updates</p>
            </li>
            <li className="checked">
              <p>Unlimited product updates</p>
            </li>
            <li className="checked">
              <p>Unlimited product updates</p>
            </li>
            <li className="notChecked">
              <p>1GB Cloud storage</p>
            </li>
            <li className="notChecked">
              <p>Email and community support</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

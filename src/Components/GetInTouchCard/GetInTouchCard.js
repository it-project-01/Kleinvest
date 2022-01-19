import "./GetInTouchCard.css";
import React, { Component } from "react";
import { Button } from "reactstrap";

export default class GetInTouchCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }
  render() {
    return (
      <div className={this.state.className}>
        <div className="touchCardContent">
          <div className="icon">
            <img src={this.state.icon} alt=""></img>
          </div>
          <div className="text">
            <p>{this.state.name}</p>
            <p>{this.state.lastName}</p>
            <a href="#support">
              <p className="supportLink">Get Support</p>
            </a>
          </div>
          <div className="button">
            <Button outline color="primary">
              Submit Request
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

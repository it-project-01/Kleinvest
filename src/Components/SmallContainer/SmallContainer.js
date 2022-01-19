import React, { Component } from "react";
import "./SmallContainer.css";
import logo from "../../images/vector.svg";

export default class SmallContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="aboutCard h-100">
        <img src={logo} alt="" />
        <div className="ms-3">
          <p className="fw-bold mb-2">{this.state.title}</p>
          <p className="mb-0">{this.state.subtitle}</p>
        </div>
      </div>
    );
  }
}

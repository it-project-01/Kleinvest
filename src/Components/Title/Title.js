import "./Title.css";
import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 text-white">
          <h1 className="text-center bolder mb-4">{this.state.heading}</h1>
          <p className="text-center bolder">{this.state.subtitle}</p>
        </div>
      </div>
    );
  }
}

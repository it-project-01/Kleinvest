import "./Container.css";
import React, { Component } from "react";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return <div className="container myContainer">{this.state.children}</div>;
  }
}

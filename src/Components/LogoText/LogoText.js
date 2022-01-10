import "./LogoText.css";
import React, { Component } from "react";
import firstLogo from "../../firstLogo.png";
import secondLogo from "../../secondLogo.png";

export default class LogoText extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="text-white logoText">
        <h4>{this.state.title}</h4>
        <p>{this.state.subtitle}</p>
        <div className="row smallContent">
          <div className="iconText">
            <div className="iconTextBold">
              <img src={firstLogo} alt="" />
              <h5>the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="">Things on a very small scale ...</p>
          </div>
          <div className="iconText">
            <div className="iconTextBold">
              <img src={secondLogo} alt="" />
              <h5>the quick fox jumps over the lazy dog</h5>
            </div>
            <p className="">Things on a very small scale ...</p>
          </div>
        </div>
      </div>
    );
  }
}

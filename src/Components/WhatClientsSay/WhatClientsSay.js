import "./WhatClientsSay.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export default class WhatClientsSay extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="h-100 bg-white clientCard mt-5">
        <div className="row m-0 p-0">
          <div className="col-sm-4 p-0">
            <img src={this.state.value.image} alt="" />
          </div>
          <div className="col-sm-8 text-dark py-3">
            <p className="fw-bold mb-1">{this.state.value.name}</p>
            <p className="text-secondary mb-2">{this.state.value.job}</p>
            <div className="mb-3">
              <FontAwesomeIcon
                icon={(this.state.value.star >= 1 && faStar) || farStar}
                className="text-warning"
              />
              <FontAwesomeIcon
                icon={(this.state.value.star >= 2 && faStar) || farStar}
                className="text-warning"
              />
              <FontAwesomeIcon
                icon={(this.state.value.star >= 3 && faStar) || farStar}
                className="text-warning"
              />
              <FontAwesomeIcon
                icon={(this.state.value.star >= 4 && faStar) || farStar}
                className="text-warning"
              />
              <FontAwesomeIcon
                icon={(this.state.value.star >= 5 && faStar) || farStar}
                className="text-warning"
              />
            </div>
            <p className="text-secondary">{this.state.value.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

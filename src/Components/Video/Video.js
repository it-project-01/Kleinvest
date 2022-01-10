import React, { Component } from "react";
import "./Video.css";
import ReactPlayer from "react-player";

export default class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

import "./App.css";
import React, { Component } from "react";
import Header from "./Containers/Header";
import Creating from "./Containers/Creating";
import Strategy from "./Containers/Strategy";
import Clients from "./Containers/Clients";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row col-sm-12 col-md-10 col-lg-8">
          <div className="container-fluid">
            <Header />
            <Creating />
            <Strategy />
            <Clients />
          </div>
        </div>
      </div>
    );
  }
}

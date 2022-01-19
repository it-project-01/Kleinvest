import "./App.css";
import React, { Component } from "react";
import Header from "./Containers/Header";
import Creating from "./Containers/Creating";
import Strategy from "./Containers/Strategy";
import Clients from "./Containers/Clients";
import About from "./Containers/About/About";
import Pricing from "./Containers/Pricing/Pricing";
import GetInTouch from "./Containers/GetInTouch/GetInTouch";
import Footer from "./Containers/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="container">
            <Header />
            <Creating />
            <Strategy />
            <Clients />
            <About />
            <Pricing />
            <GetInTouch />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

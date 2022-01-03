import { Button, Input, InputGroup } from "reactstrap";
import "./Header.css";
import React, { PureComponent } from "react";
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default class Header extends PureComponent {
  state = {
    hideMenu: true,
    hideSearch: true,
  };
  toggleMenu = () => {
    this.setState((state) => {
      return { hideMenu: !state.hideMenu };
    });
  };
  toggleSearch = () => {
    this.setState((state) => {
      return { hideSearch: !state.hideSearch };
    });
  };
  render() {
    return (
      <div className="containerHeader flex-wrap">
        <div className="iconName">
          <h3>BrandName</h3>
        </div>
        <div className="menu">
          <ul className="d-none d-lg-flex justify-content-between align-items-center">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex logIn">
          <h6>Login</h6>
          <div className="becomeDiv">
            <Button color="primary">
              <h5>Become a member</h5>
              <h4>→</h4>
            </Button>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <button className="btn text-white">
            <FontAwesomeIcon icon={faSearch} onClick={this.toggleSearch} />
          </button>
          <button className="btn text-white">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="btn text-white" onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <Slide
          direction="down"
          className={`menu-mobile d-lg-none w-100 ${
            (this.state.hideMenu && "d-none") || ""
          }`}
        >
          <ul className="text-center mt-5 smallMenu">
            <li className="my-4">
              <a href="#home">Home</a>
            </li>
            <li className="my-4">
              <a href="#product">Product</a>
            </li>
            <li className="my-4">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="my-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </Slide>
        <Slide
          direction="down"
          className={`search-mobile d-lg-none w-100 ${
            (this.state.hideSearch && "d-none") || ""
          }`}
        >
          <InputGroup className="mt-5">
            <Input placeholder="type here..." />
            <Button>Search</Button>
          </InputGroup>
        </Slide>
      </div>
    );
  }
}

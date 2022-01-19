import "./Footer.css";
import React, { Component } from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { InputGroup, Button, Input } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <section>
        <Container>
          <div className="upperFooter">
            <h4 className="text-white">BrandName</h4>
            <div className="iconList color-primary">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-primary me-3"
                />
              </a>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-primary me-3"
                />
              </a>
              <a href="https://stackoverflow.com/">
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="text-primary me-3"
                />
              </a>
            </div>
          </div>
          <div className="lowerFooter">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <table>
                <tr>
                  <th>Company Info</th>
                  <th>Legal</th>
                  <th>Features</th>
                  <th>Resources</th>
                </tr>
                <tr>
                  <td>About Us</td>
                  <td>About Us</td>
                  <td>Business Marketing</td>
                  <td>IOS & Android</td>
                </tr>
                <tr>
                  <td>Carrier</td>
                  <td>Carrier</td>
                  <td>User Analytic</td>
                  <td>Watch a Demo</td>
                </tr>
                <tr>
                  <td>We are hiring</td>
                  <td>We are hiring</td>
                  <td>Live Chat</td>
                  <td>Customers</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>Blog</td>
                  <td>Unlimited Support</td>
                  <td>API</td>
                </tr>
              </table>
              <p className="mt-5">
                Made With Love By AdroneLab. All Rights Reserved
              </p>
            </div>
            <div className="mt-3 col-lg-4 col-md-4 col-sm-12">
              <h5>Get In Touch</h5>
              <div className="mt-4">
                <InputGroup>
                  <Input placeholder="Your Email" />
                  <Button color="primary">Subscribe</Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

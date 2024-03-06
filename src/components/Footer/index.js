import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">BLK•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/shop" tag={Link}>
                  Shop
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/brands" tag={Link}>
                  Brands
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/contact-us">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://opensource.org/licenses/MIT">
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/creativetim"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/creativetim"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://dribbble.com/creativetim"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar className="my-navbar" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="logo">
          <span>B</span>LOGGIN<span>G</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link href="#">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="#">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="#">
              <FaTwitter />
            </Nav.Link>
          </Nav>
          <Form className="ms-auto">
            <InputGroup size="sm">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search"
              />
              <Button variant="primary" type="submit">
                Go
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

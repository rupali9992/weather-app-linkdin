import React from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-primary navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="underline" className="me-auto">
            <Nav.Link>
              <Link to="/Library">Library</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/Group">Group</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/AddMessage">Add Message</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/Contact">Contact</Link>
            </Nav.Link>
           
            <Nav.Link>
              {" "}
              <Link to="/Send-sms">Sendsms</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


   
  

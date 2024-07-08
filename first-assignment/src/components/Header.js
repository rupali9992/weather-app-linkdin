import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            {/* <Nav.Link>
              <Link to="Login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="markscalculation">Marks-calculation</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="UseEffect">UseEffect</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="Main">Main</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="Flags">Flags</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="Parent_Flags">Search-Flags</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="Parent-Weather">Search-Weather</Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="NewUSer">NewUser</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="userRegShow">userInfoShow</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Fetch_movie">Fetch_movie</Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link to="Assignment_Parent1">Assignment_Parent1</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="M1">M1</Link>
            </Nav.Link> */}
            <Nav.Link>
              {" "}
              <Link to="class-component">Class</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Library">Library</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Add-group">Addgroup</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Add-message">AddMessage</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Add-contact">Addcontact</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="Send-sms">Sendsms</Link>
            </Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link to="StockCalculator">StockCalculator</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                {" "}
                <Link to="CarloanCalculator">Car-loan-calculator</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link to="P1">P1</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);

    // On non-homepage routes, always show solid navbar
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    // On homepage, check scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`lab-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/">
          SAI Lab
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/research">
              Research
            </Nav.Link>

            <Nav.Link as={NavLink} to="/publications">
              Publications
            </Nav.Link>

            <Nav.Link as={NavLink} to="/news">
              News
            </Nav.Link>

            <Nav.Link as={NavLink} to="/people">
              People
            </Nav.Link>

           

            {/*
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/action1">
                Action
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

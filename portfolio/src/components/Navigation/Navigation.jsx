import React from 'react';
import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Image } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar className={isHomePage ? 'transparent' : 'custom'} expand="lg">
        <NavLink to="/" className='ms-5'>
          <Image
            src="/images/portfolio-logo-2.png"
            height="50"
            className="d-inline-block align-top logo"
            alt="Aaron Turner Logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-5'/>
        <Navbar.Collapse id="basic-navbar-nav" className="nav-icons mx-5">
          <Nav className="ms-auto mx-5">
            <a href="/#projects" className="me-3 nav-links">
              <span className='nav-spans'>PROJECTS</span>
            </a>
            <a href="resume-aaronturner-2023.pdf" target="_blank" className="me-3 nav-links">
              <span className='nav-spans'>RESUME</span>
            </a>
            <NavLink to="/blog" className="me-3 nav-links">
              <span className='nav-spans'>BLOG</span>
            </NavLink>
            <a href="mailto: aaturner1995@gmail.com" className="text-center">
              <Button className="d-flex align-items-center prime-custom">CONTACT ME</Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

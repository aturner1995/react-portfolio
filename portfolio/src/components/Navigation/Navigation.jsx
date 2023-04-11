import React from 'react';
import './Navigation.css'
import Nav from 'react-bootstrap/Nav';
import { Navbar, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar bg="transparent" expand="lg" className='mx-5'>
                    <NavLink to='/'>
                        <Image
                            src="/images/portfolio-logo-2.png"
                            height='50'
                            className="d-inline-block align-top logo"
                            alt="Aaron Turner Logo"
                        />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='nav-icons'>
                        <Nav className="ms-auto">
                            <NavLink to="#" className='me-3 nav-links'>
                                <span>About Me</span>
                            </NavLink>
                            <NavLink to="#" className='me-3 nav-links'>
                                <span>Projects</span>
                            </NavLink>
                            <NavLink to="#" className='me-3 nav-links'>
                                <span>Resume</span>
                            </NavLink>
                            <NavLink to="#" className='text-center'>
                                <Button className="d-flex align-items-center ms-2 prime-custom">Contact Me</Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
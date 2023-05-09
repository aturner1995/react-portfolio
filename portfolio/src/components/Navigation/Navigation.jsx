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
                            <a href="#projects" className='me-3 nav-links'>
                                <span>PROJECTS</span>
                            </a>
                            <a href="resume-aaronturner-2023.pdf" target='_blank' className='me-3 nav-links'>
                                <span>RESUME</span>
                            </a>
                            <NavLink to='/blog' className='me-3 nav-links'>
                                <span>BLOG</span>
                            </NavLink>
                            <a href="mailto: aaturner1995@gmail.com" className='text-center'>
                                <Button className="d-flex align-items-center prime-custom">CONTACT ME</Button>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
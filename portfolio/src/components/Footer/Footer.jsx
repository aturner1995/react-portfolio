import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar className='footer text-center justify-content-center ' sticky="bottom">
      <NavLink href='https://github.com/aturner1995' target='_blank'>
        <GitHubIcon className='mx-4 icon' />
      </NavLink>
      <NavLink href='https://www.linkedin.com/in/aaronturner-1995/' target='_blank'>
        <LinkedInIcon className='mx-4 icon' />
      </NavLink>
      <NavLink href='mailto: aaturner1995@gmail.com' target='_blank'>
        <EmailIcon className='mx-4 icon' />
      </NavLink>
    </Navbar>
  )
}

export default Footer
import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='text-center mx-3 py-4'>
        <h2>GET IN TOUCH</h2>
        <p>I am currently looking for new opportunites!<br/>Whether you have a question or just want to say hi, please send me an email or message.</p>
        <Button href="mailto: aaturner1995@gmail.com" className='btn-lg prime-custom'>CONTACT ME</Button>
      </div>
    </div>

  )
}

export default Contact
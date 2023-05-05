import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const animationStyles = useSpring({ 
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  return (

      <Row className='p-4 bg-light' id='projects'>
        <Col lg={2}>
          <h2 className='text-left'>PROJECTS</h2>
        </Col>
        <Col lg={10}>
          <Row>
            <Col sm={4} className="d-flex justify-content-center" style={{minWidth: '20rem'}}>
              <animated.div ref={ref} style={animationStyles}>
              <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/squeakToys.JPG' className='mainImage' />
                  <Card.Img variant="top" src='/images/squeakToys2.JPG' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Squeak Toys</Card.Title>
                  <Card.Text>
                    A Full Stack e-commerce application for Squeak Toys built with React, Express, Stripe and MongoDB.
                  </Card.Text>
                  <div className="text-center">
                    <Button className="prime-custom-2 mx-2" href='https://squeaktoys.herokuapp.com/' target='_blank'>Deployed Site</Button>
                    <Button className="prime-custom-2 mx-2" href='https://github.com/aturner1995/react-ecommerce-squeakToys' target='_blank'>Source Code</Button>
                  </div>
                </Card.Body>
              </Card>
              </animated.div>
            </Col>
            <Col sm={4} className="d-flex justify-content-center" style={{minWidth: '20rem'}}>
            <animated.div ref={ref} style={animationStyles}>
            <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/rocketResumes.JPG' className='mainImage' />
                  <Card.Img variant="top" src='/images/rocketResumes.JPG' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Rocket Resumes</Card.Title>
                  <Card.Text>
                    A Full Stack Resume generator that utilizes AI to generate resumes that improves your chances of getting hired.
                  </Card.Text>
                  <div className="text-center">
                    <Button className="prime-custom-2 mx-2" href='https://rocket-resumes.herokuapp.com/' target='_blank'>Deployed Site</Button>
                    <Button className="prime-custom-2 mx-2" href='https://github.com/aturner1995/group-project-2' target='_blank'>Source Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </animated.div>
            </Col>
            <Col sm={4} className="d-flex justify-content-center" style={{minWidth: '20rem'}}>
            <animated.div ref={ref} style={animationStyles}>
            <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/mapcation.JPG' className='mainImage' />
                  <Card.Img variant="top" src='/images/mapcation.JPG' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Mapcation</Card.Title>
                  <Card.Text>
                    A front end travel planning application that provides Youtube travel guides, location and restaurant suggestions.
                  </Card.Text>
                  <div className="text-center">
                    <Button className="prime-custom-2 mx-2" href='https://aturner1995.github.io/Mapcation/index.html' target='_blank'>Deployed Site</Button>
                    <Button className="prime-custom-2 mx-2" href='https://github.com/aturner1995/Mapcation' target='_blank'>Source Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </animated.div>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

export default Projects
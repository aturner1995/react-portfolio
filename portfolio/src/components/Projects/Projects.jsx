import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const animationStyles1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0)' : 'translateY(50px)',
  });

  const animationStyles2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0)' : 'translateY(50px)',
  });

  const animationStyles3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <Row className='p-4 bg-light' id='projects'>
      <Col lg={2}>
        <h2 className='text-left'>PROJECTS</h2>
      </Col>
      <Col lg={10}>
        <Row>
          <Col md={4} className=" justify-content-center" style={{ minWidth: '20rem' }}>
            <animated.div ref={ref1} style={animationStyles1}>
              <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/squeak1.avif' className='mainImage' />
                  <Card.Img variant="top" src='/images/squeak2.avif' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Squeak Toys</Card.Title>
                  <Card.Text>
                    A Full Stack e-commerce application for Squeak Toys built with React, Express, Stripe, and MongoDB.
                  </Card.Text>
                  <Card.Text className='text-center d-flex flex-wrap justify-content-center'>
                    <span className='skills m-1'>ReactJS</span>
                    <span className='skills m-1'>MongoDB</span>
                    <span className='skills m-1'>Express</span>
                    <span className='skills m-1'>Stripe</span>
                    <span className='skills m-1'>Node.js</span>
                  </Card.Text>
                  <div className="text-center">
                    <Button className="prime-custom-2 mx-2" href='https://squeaktoys.herokuapp.com/' target='_blank'>Deployed Site</Button>
                    <Button className="prime-custom-2 mx-2" href='https://github.com/aturner1995/react-ecommerce-squeakToys' target='_blank'>Source Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={4} className=" justify-content-center" style={{ minWidth: '20rem' }}>
            <animated.div ref={ref2}
              style={animationStyles2}>
              <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/rocket1.avif' className='mainImage' />
                  <Card.Img variant="top" src='/images/rocket2.avif' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Rocket Resumes</Card.Title>
                  <Card.Text>
                    A Full Stack Resume generator that utilizes AI to generate resumes that improve your chances of getting hired.
                  </Card.Text>
                  <Card.Text className='text-center d-flex flex-wrap justify-content-center'>
                    <span className='skills m-1'>OpenAI</span>
                    <span className='skills m-1'>Express</span>
                    <span className='skills m-1'>Handlebars</span>
                    <span className='skills m-1'>MySQL</span>
                    <span className='skills m-1'>Node.js</span>
                  </Card.Text>
                  <div className="text-center">
                    <Button className="prime-custom-2 mx-2" href='https://rocket-resumes.herokuapp.com/' target='_blank'>Deployed Site</Button>
                    <Button className="prime-custom-2 mx-2" href='https://github.com/aturner1995/group-project-2' target='_blank'>Source Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={4} className=" justify-content-center " style={{ minWidth: '20rem' }}>
            <animated.div ref={ref3} style={animationStyles3}>
              <Card className='project-card m-2'>
                <div className="image">
                  <Card.Img variant="top" src='/images/map1.avif' className='mainImage' />
                  <Card.Img variant="top" src='/images/map2.avif' className='secondImage' />
                </div>
                <Card.Body>
                  <Card.Title className='text-center'>Mapcation</Card.Title>
                  <Card.Text>
                    A front-end travel planning application that provides YouTube travel guides, location, and restaurant suggestions.
                  </Card.Text>
                  <Card.Text className='text-center d-flex flex-wrap justify-content-center'>
                    <span className='skills m-1'>JavaScript</span>
                    <span className='skills m-1'>jQuery</span>
                    <span className='skills m-1'>HTML5</span>
                    <span className='skills m-1'>Bulma</span>
                    <span className='skills m-1'>AJAX</span>
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
  );
};

export default Projects;
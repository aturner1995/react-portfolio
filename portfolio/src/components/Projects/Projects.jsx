import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Taskmaster',
      description: 'A local service provider for freelancers and local small businesses.',
      skills: ['React', 'Graphql', 'Express', 'Socket.io', 'Stripe'],
      deployedSite: 'https://taskmaster-nb-b422cb18fd72.herokuapp.com/',
      sourceCode: 'https://github.com/aturner1995/taskmaster',
      images: {
        main: '/images/task1.avif',
        second: '/images/task2.avif'
      }
    },
    {
      id: 2,
      title: 'Squeak Toys',
      description: 'A Full Stack e-commerce application for Squeak Toys built with React, Express, Stripe, and MongoDB.',
      skills: ['React', 'MongoDB', 'Express', 'Stripe', 'Node.js'],
      deployedSite: 'https://squeaktoys.herokuapp.com/',
      sourceCode: 'https://github.com/aturner1995/react-ecommerce-squeakToys',
      images: {
        main: '/images/squeak1.avif',
        second: '/images/squeak2.avif'
      }
    },
    {
      id: 3,
      title: 'Bullseye Tracker',
      description: 'A full stack paper algorithmic trading application built with Python and Django.',
      skills: ['Python', 'Django', 'Bootstrap', 'Algorithmic Trading'],
      deployedSite: 'https://github.com/aturner1995/stock-trader',
      sourceCode: 'https://github.com/aturner1995/stock-trader',
      images: {
        main: '/images/stock1.avif',
        second: '/images/stock2.avif'
      }
    },
    {
      id: 4,
      title: 'Rocket Resumes',
      description: 'A full stack Resume generator that utilizes AI to generate resumes that improve your chances of getting hired.',
      skills: ['OpenAI', 'Express', 'Handlebars', 'MySQL', 'Node.js'],
      deployedSite: 'https://rocket-resumes.herokuapp.com/',
      sourceCode: 'https://github.com/aturner1995/group-project-2',
      images: {
        main: '/images/rocket1.avif',
        second: '/images/rocket2.avif'
      }
    },
    {
      id: 5,
      title: 'Mapcation',
      description: 'A front-end travel planning application that provides YouTube travel guides, location/restaurant suggestions.',
      skills: ['JavaScript', 'jQuery', 'HTML5', 'Bulma', 'AJAX'],
      deployedSite: 'https://aturner1995.github.io/Mapcation/index.html',
      sourceCode: 'https://github.com/aturner1995/Mapcation',
      images: {
        main: '/images/map1.avif',
        second: '/images/map2.avif'
      }
    },
    {
      id: 6,
      title: 'AI Tech BLOG',
      description: 'A full-stack tech-blog powered by AI to quickly generate SEO optimized, tailored blog content for your business.',
      skills: ['ReactJS', 'OpenAI', 'Express', 'MySQL', 'Node.js'],
      deployedSite: 'https://www.aaron-turner.dev/blog',
      sourceCode: 'https://github.com/aturner1995/react-portfolio',
      images: {
        main: '/images/blog1.avif',
        second: '/images/blog2.gif'
      }
    },
  ]);

  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 2);
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true, // only trigger the animation once
  });

  const { ref: ref4, inView: inView4 } = useInView({
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

  const animationStyles4 = useSpring({
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <Row className='p-4 bg-light' id='projects'>
      <Col lg={3}>
        <h2 className='text-left'>PROJECTS</h2>
      </Col>
      <Col lg={9}>
        <Row>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Col key={project.id} md={6} className="justify-content-center" style={{ minWidth: '20rem' }}>
              <animated.div ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : ref4} style={index === 0 ? animationStyles1 : index === 1 ? animationStyles2 : index === 2 ? animationStyles3 : animationStyles4}>
                <Card className='project-card m-2'>
                  <div className="image">
                    <Card.Img variant="top" src={project.images.main} className='mainImage' />
                    <Card.Img variant="top" src={project.images.second} className='secondImage' />
                  </div>
                  <Card.Body>
                    <Card.Title className='text-center'>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text className='text-center d-flex flex-wrap justify-content-center'>
                      {project.skills.map(skill => (
                        <span key={skill} className='skills m-1'>{skill}</span>
                      ))}
                    </Card.Text>
                    <div className="text-center">
                      <Button className="prime-custom-2 mx-2" href={project.deployedSite} target='_blank'>Deployed Site</Button>
                      <Button className="prime-custom-2 mx-2" href={project.sourceCode} target='_blank'>Source Code</Button>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
        {visibleProjects < projects.length && (
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="outline-secondary" onClick={loadMoreProjects}>Load More</Button>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default Projects;
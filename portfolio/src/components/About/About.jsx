import React from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './About.css'

const About = () => {
    return (
        <Row className='about-section p-4'>
            <Col lg={3}>
                <h2 className='text-left'>SKILLS</h2>
            </Col>
            <Col lg={9}>
                <Row>
                    <Col className="d-flex justify-content-center my-2">
                        <Card style={{ width: '18rem' }} className='text-center'>
                            <Card.Body>
                                <Card.Title className='title'>LANGUAGES</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>JavaScript (ES6)</ListGroup.Item>
                                        <ListGroup.Item action>CSS3</ListGroup.Item>
                                        <ListGroup.Item action>HTML5</ListGroup.Item>
                                        <ListGroup.Item action>SQL</ListGroup.Item>
                                        <ListGroup.Item action>NoSQL</ListGroup.Item>
                                        <ListGroup.Item action>Python</ListGroup.Item>
                                        <ListGroup.Item action>MATLAB</ListGroup.Item>
                                    </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="d-flex justify-content-center my-2">
                        <Card style={{ width: '18rem' }} className='text-center'>
                            <Card.Body>
                                <Card.Title className='title'>TOOLS</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>jQuery</ListGroup.Item>
                                        <ListGroup.Item action>ReactJS</ListGroup.Item>
                                        <ListGroup.Item action>Vue.JS</ListGroup.Item>
                                        <ListGroup.Item action>Bootstrap</ListGroup.Item>
                                        <ListGroup.Item action>Node.JS</ListGroup.Item>
                                        <ListGroup.Item action>Express.JS</ListGroup.Item>
                                        <ListGroup.Item action>Bulma</ListGroup.Item>
                                    </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="d-flex justify-content-center my-2">
                        <Card style={{ width: '18rem' }} className='text-center'>
                            <Card.Body>
                                <Card.Title className='title'>APPLICATIONS</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item action>GitHub</ListGroup.Item>
                                        <ListGroup.Item action>MySQL</ListGroup.Item>
                                        <ListGroup.Item action>MongoDB</ListGroup.Item>
                                        <ListGroup.Item action>Heroku</ListGroup.Item>
                                        <ListGroup.Item action>SolidWorks</ListGroup.Item>
                                        <ListGroup.Item action>ANSYS FLUENT</ListGroup.Item>
                                        <ListGroup.Item action>MS PROJECT</ListGroup.Item>
                                    </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default About

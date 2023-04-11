import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './About.css'

const About = () => {
    return (
        <>
            <h2 className='text-left m-4'>SKILLS</h2>
            <Row className='ms-5'>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='text-center'>
                        <Card.Body>
                            <Card.Title>LANGUAGES</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='text-center'>
                        <Card.Body>
                            <Card.Title>FRAMEWORKS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }} className='text-center'>
                        <Card.Body>
                            <Card.Title>TOOLS</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default About

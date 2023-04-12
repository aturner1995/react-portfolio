import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'

const Projects = () => {
  return (
    <>
      <Row className='my-5'>
        <h2 className='text-left p-4 ps-5'>PROJECTS</h2>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Deployed Site</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Deployed Site</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Deployed Site</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Deployed Site</Button>
              <Button variant="primary">Source Code</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Projects
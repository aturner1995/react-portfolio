import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Awards.css';

const Awards = () => {
  return (
    <Container className='awards'>
        <Row>
            <Col>
                <Image src='/images/30.png' height='75' className='award-img-left'></Image>
            </Col>
            <Col>
            <Image src='/images/fast50.png' height='75' className='award-img-right'></Image>
            </Col>
        </Row>
    </Container>
  )
}

export default Awards
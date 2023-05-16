import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Awards.css';

const Awards = () => {
  return (
    <div className='awards'>
        <Row>
            <Col className='text-center'>
                <Image src='/images/30.avif' height='75'></Image>
            </Col>
            <Col className='text-center'>
            <Image src='/images/fast50.avif' height='75'></Image>
            </Col>
        </Row>
    </div>
  )
}

export default Awards
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <Row>
                <Col className='left'>
                    <div className="text mx-5">
                        <h1 className=''>AARON</h1>
                        <h1>TURNER</h1>
                        <h6 className='mt-5'>ABOUT ME</h6>
                        <h4>EXPERIENCED FULL STACK DEVELOPER BY DAY, PROJECT MANAGER BY NIGHT</h4>
                        <p className='mt-2'>I am a software engineer that specializes in full stack web applications. Results-driven with a background in computer science, engineering and project management.</p>
                    </div>
                    <div className="small-screen">
                        <Image
                            src="/images/headshot-removebg.avif"
                            height='125'
                            className='headshot-small'
                        ></Image>
                    </div>
                </Col>
                <Col className='right'>
                    <Image
                        src="/images/headshot-removebg.avif"
                        height='400'
                        className='headshot'
                    ></Image>

                </Col>
            </Row>
        </div>
    )
}

export default Hero
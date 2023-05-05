import React from 'react';
import './Background.css';
import { Col, Row } from 'react-bootstrap';

const Background = () => {
    return (
        <div className='background p-4' id='background'>
            <Row>
                <Col lg={3}>
                    <h2 className='text-left'>BACKGROUND</h2>
                </Col>
                <Col lg={9}>
                    <p className='background-text'>Highly motivated and results-driven with a background in computer science, engineering and project management.
                        <strong className='bold-text'> Atlantic Business Magazine 30 under 30 Innovator</strong> with experience in driving business development and growth. Proven track record of success as the Chief Operating Officer of Symbodi, overseeing project management, budgeting, financial models, marketing programs, web development and logistics, resulting in a <strong className='bold-text'>3084% increase in company growth</strong> and recognition as one of the <strong className='bold-text'>fastest-growing companies in Canada by the Deloitte Fast 50 program. </strong>
                        An expertise in teamwork and leadership, problem-solving, project management, attention to detail, written and verbal communication, critical thinking, and resource management.</p>
                    <p className='background-text'>Outside of work I love to golf, play with my two dogs (Hank and Stu) and travel!</p>
                </Col>
            </Row>
        </div>
    )
}

export default Background;

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import data from '../../data';
import './Experience.css'

import 'react-vertical-timeline-component/style.min.css';

const work = data.experience

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    className='vertical-timeline-element--work'
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #ff734f' }}
      icon={
          <img
            src={experience.icon}
            alt={experience.company}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            className='w-[60%] h-[60%] object-contain'
          />
      }
    >
      <div className='text-center'>
        <h4 className="vertical-timeline-element-title">{experience.position}</h4>
        <h6 className="subtitle">{experience.company}</h6>
        {experience.startDate} - {experience.endDate}
      </div>

      <ul className='mt-3'>
        {experience.points.map((point, index) => (
          <li className='my-1'
            key={`experience-point-${index}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (

    <Row className='p-4 bg-light'>
      <Col lg={3}>
        <h2 className='text-left'>EXPERIENCE</h2>
      </Col>
      <Col lg={9}>
        <VerticalTimeline>
          {work.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Col>
    </Row>
  )
}

export default Experience
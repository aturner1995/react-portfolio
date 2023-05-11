import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        console.log(data);
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUserData();
  }, []);

  if (!blogs) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} className='blog-link' key={blog.id}>
            <Card className='my-2 w-100 mx-auto'>
              <Card.Body>
                <Row>
                  <Col lg={2}>
                    <Image src={`/uploads/${blog.photo}`} className='blog-img'></Image>
                  </Col>
                  <Col>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.user.username}</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default AllBlogs;

import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileBlogs = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/users/profile');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUserData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  } else if (!user.blogs) {
    return (
      <Container className='m-5'>
        <h3>My Blogs</h3>
        <p>No Blogs Found</p>
      </Container>
    );
  }
  

  return (
    <Container className='m-5'>
      <h3>My Blogs</h3>
      <Row>
        {user.blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className='blog-link'>
            <Card className='my-2 w-100 mx-auto'>
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <Image src={`/uploads/${blog.photo}`} className='blog-img'></Image>
                  </Col>
                  <Col xs={9}>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{new Date(blog.date_created).toLocaleDateString()}</Card.Text>
                    <Card.Text>{user.username}</Card.Text>
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

export default ProfileBlogs;

import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card, Image, Col, Button } from 'react-bootstrap';
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

  const handleDeleteBlog = async (event, blogId) => {
    event.stopPropagation();
    try {
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location = '/profile';
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          <div
            key={blog.id}
            className='blog-link'
            onClick={() => {
              window.location.href = `/blog/${blog.id}`;
            }}
            style={{cursor: 'pointer'}}
    
          >
            <Card className='my-2 w-100 mx-auto'>
              <Card.Body>
                <Row>
                  <Col xs={3}>
                    <Image src={`/uploads/${blog.photo}`} className='blog-img'></Image>
                  </Col>
                  <Col xs={6}>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{new Date(blog.date_created).toLocaleDateString()}</Card.Text>
                    <Card.Text>{user.username}</Card.Text>
                  </Col>
                  <Col xs={3} className='d-flex align-items-center justify-content-end'>
                    <Button
                      variant='danger'
                      onClick={(event) => handleDeleteBlog(event, blog.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileBlogs;

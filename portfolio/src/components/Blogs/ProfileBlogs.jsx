import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';


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
  }

  return (
    <Container>
      <h3>My Blogs</h3>
      <Row>
        {user.blogs.map((blog) => (
            <Card className='my-2'>
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
              </Card.Body>
            </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProfileBlogs;

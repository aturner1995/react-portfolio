import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
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
                    <Card className='my-2'>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>{blog.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}

export default AllBlogs;
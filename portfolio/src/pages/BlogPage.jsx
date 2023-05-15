import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await fetch(`/api/blogs/${id}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json();
                setBlog(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchBlogData();
    }, [id]);

    if (!blog) {
        return <p>Loading...</p>;
    }

    const dateCreated = new Date(blog.date_created).toLocaleDateString();

    return (
        <Container className='my-5'>
            <h2>{blog.title}</h2>
            <h6>{blog.user.username}</h6>
            <p>{dateCreated}</p>
            <p dangerouslySetInnerHTML={{ __html: blog.description }} className='blog-text'></p>
        </Container>
    );
};

export default BlogPage;

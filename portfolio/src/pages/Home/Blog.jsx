import React from 'react';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import AllBlogs from '../../components/Blogs/AllBlogs';

const Blog = () => {

    return (
        <>
            <Hero />
            <AllBlogs className='my-5'/>
            <Contact />
        </>

    )
}

export default Blog;
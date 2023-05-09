import React from 'react';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import ProfileBlogs from '../../components/Blogs/ProfileBlogs';


const Profile = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [prompt, setPrompt] = useState('');

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (content, editor) => {
        setDescription(content);
    }

    const handleNewBlog = async (event) => {
        event.preventDefault();

        if (title && description) {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                document.location.replace("/profile");
            } else if (response.status === 403) {
                document.location = "/login";
            } else {
                alert("Failed to create blog");
            }
        }
    }

    const handleAiSubmit = async (event) => {
        event.preventDefault();
        setPrompt('');

        try {
            const aiResponse = await fetch('/api/ai/generate', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (aiResponse.ok) {
                const data = await aiResponse.json();
                const [title, blog] = data.split('\n\n', 2)
                setDescription(blog);
                setTitle(title);
            }
        }
        catch (err) {
            console.error(err);
            alert('An error occured. Please try again')
        }
    };

    return (
        <>
            <Row className='mx-5'>
                <Col className='mx-5' lg={7}>
                    <h3>Create a New Blog:</h3>
                    <form className="form new-blog-form" onSubmit={handleNewBlog}>
                        <div className="form-group py-2">
                            <label for="blog-title">Title:</label>
                            <div>
                                <input className="form-control" type="text" id="blog-title" name="blog-title" value={title} onChange={handleTitleChange} required />
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <label for="blog-body">Body:</label>
                            <div>
                                <Editor
                                    value={description}
                                    apiKey="bfu93yxqm7w90mr33lp5gx7loru18fwje1rioa7dp3fsqque"
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                    }}
                                    onEditorChange={handleDescriptionChange}
                                />
                            </div>
                        </div>
                        <div className="form-group d-flex">
                            <button type="submit" className="btn btn-primary my-1">Submit Blog</button>
                        </div>
                    </form>
                </Col>
                <Col className='mx-5' lg={3}>
                    <form className="form new-blog-form my-5" onSubmit={handleAiSubmit}>
                        <div className="form-group pt-2">
                            <label for="blog-body">AI Custom Blog Prompt:</label>
                            <div>
                                <textarea className="form-control my-2" id="blog-body" name="blog-body" value={prompt} onChange={handlePromptChange}></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary my-1">Generate AI Blog</button>
                        </div>
                    </form>
                </Col>
            </Row>
            <ProfileBlogs className='my-5'/>
        </>
    )
}

export default Profile;
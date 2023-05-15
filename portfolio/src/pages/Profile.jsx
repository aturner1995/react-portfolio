import React from 'react';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileBlogs from '../components/Blogs/ProfileBlogs';
import { Editor } from '@tinymce/tinymce-react';

const Profile = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);

    const [prompt, setPrompt] = useState('');

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (content, editor) => {
        editor.setContent(content);
        setDescription(content);
    }

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
    }

    const handleNewBlog = async (event) => {
        event.preventDefault();

        if (title && description && photo) {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('photo', photo);
            console.log(formData)

            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: formData,
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
        setLoading(true);

        try {
            const aiResponse = await fetch('/api/ai/generate', {
                method: 'POST',
                body: JSON.stringify({ prompt }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (aiResponse.ok) {
                const taskId = await aiResponse.json();
                const data = await waitForBlog(taskId.taskId);
                if (data) {
                    const firstNewlineIndex = data.indexOf('\n');
                    const title = data.substring(0, firstNewlineIndex).replace('title: "', '').replace('"', '');
                    const blog = data.substring(firstNewlineIndex + 2).replace(/\n/g, '&nbsp;<br/>');
                    console.log(blog);
                    setDescription(blog);
                    setTitle(title);
                }
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred. Please try again');
        } finally {
            setLoading(false);
        }
    };

    const waitForBlog = async (taskId) => {
        try {
            const response = await fetch(`/api/ai/generate/status/${taskId}`);
            const blog = await response.json();

            if (blog.status === 'completed') {
                return blog.result;
            } else if (blog.status === 'failed') {
                console.error('Task failed');
                return null;
            } else {
                // Task is still in progress, continue polling
                return waitForBlog(taskId);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <Row className='m-5'>
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
                            <label htmlFor="blog-photo">Photo:</label>
                            <div>
                                <input type="file" id="blog-photo" name="blog-photo" onChange={handlePhotoChange} accept="image/*" required />
                            </div>
                        </div>
                        <div className="form-group py-2">
                            <label for="blog-body">Body:</label>
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                <Editor
                                    value={description}
                                    apiKey="bfu93yxqm7w90mr33lp5gx7loru18fwje1rioa7dp3fsqque"
                                    init={{
                                        plugins: 'link image code',
                                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
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
                            <button type="submit" className="btn btn-primary my-1" disabled={loading}>
                                {loading ? 'Generating...' : 'Generate AI Blog'}
                            </button>
                        </div>
                    </form>
                </Col>
            </Row>
            <ProfileBlogs />
        </>
    )
}

export default Profile;
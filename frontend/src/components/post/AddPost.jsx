
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddPost() {
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState('');
    const [img, setImg] = useState('');
    const [imgError, setImgError] = useState('');
    const [tags, setTags] = useState('');
    const [tagsError, setTagsError] = useState('');
    const [content, setContent] = useState('');
    const [contentError, setContentError] = useState('');
    const [isAllValid, setIsAllValid] = useState(false);

    const clearFields = () => {
        setTitle('');
        setImg('');
        setTags('');
        setContent('');
    };

    //handle title change and validation
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 20) {
            setTitleError('Title must be at least 20 characters long');
        } else {
            setTitleError('');
        }

        if (e.target.value.length === 0) {
            setTitleError('Title is required');
        }
    };

    //handle img and validation
    const handleImgChange = (e) => {
        setImg(e.target.value);
        if (e.target.value.length === 0) {
            setImgError('Image is required');
        } else {
            setImgError('');
        }

        if (!e.target.value.startsWith('http')) {
            setImgError('Image must be a valid URL');
        }

    };

    //handle tags and validation
    const handleTagsChange = (e) => {
        setTags(e.target.value);
        if (e.target.value.length < 2) {
            setTagsError('Tags are required');
        } else {
            setTagsError('');
        }

        if (e.target.value.split(',').length < 2) {
            setTagsError('At least two tags are required');
        }
    };

    //handle content and validation
    const handleContentChange = (e) => {
        setContent(e.target.value);
        if (e.target.value.length < 50) {
            setContentError('Content must be at least 50 characters long');
        } else {
            setContentError('');
        }

        if (e.target.value.length === 0) {
            setContentError('Content is required');
        }
    };

    //handle isAllValid validation 
    const handleIsAllValid = () => {
    if (titleError === '' && imgError === '' && tagsError === '' && contentError === '') {
        setIsAllValid(true);
    } else {
        setIsAllValid(false);
    }
    };

    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { 
            title: title,
            content: content,
            coverImg: img,
            tags: tags.split(','),
        };

        // check if all fields are valid
        handleIsAllValid();

        if (!isAllValid) {
             try {
            const response = await fetch("http://localhost:4400/api/createPost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });

            if (response.ok) {
                alert('Post added successfully');
                clearFields();
            } else {
                const errorData = await response.json();
                alert(`Failed to add post: ${errorData.message}`);
            }
        } catch (error) {
            console.log("error creating post", error);
            alert(`Error creating post: ${error.message}`);
        }
    }
    };

    return (
        <div className="container">
            <h1 className="text-primary"> AddPost</h1>
            <div className="mt-4">
                <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control
                            value={title} onChange={(e) => handleTitleChange(e)}
                            type="text" 
                            placeholder="Enter post Title" />

                            <Form.Text className="text-danger">
                                {titleError}
                            </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cover Image Url</Form.Label>
                        <Form.Control 
                            value={img} onChange={(e) => handleImgChange(e)}
                            type="text" 
                            placeholder="Enter post Img" />

                            <Form.Text className="text-danger">
                                {imgError}
                            </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Post Tags</Form.Label>
                        <Form.Control 
                            value={tags} onChange={(e) => handleTagsChange(e)}
                            type="text" 
                            placeholder="Enter post tags separated by comma" />

                            <Form.Text className="text-danger">
                                {tagsError}
                            </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control
                            value={content} onChange={(e) => handleContentChange(e)}
                            as="textarea" 
                            rows={8} />

                            <Form.Text className="text-danger">
                                {contentError}
                            </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}


export default AddPost;

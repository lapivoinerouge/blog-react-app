import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = e => {
    e.preventDefault();
    dispatch(addPost({ title, shortDescription, content, publishedDate, author }));
    navigate('/');
  };

  return (
    <Form onSubmit={handleAddPost}>
      <Form.Group className="mb-3 col-md-4" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formPublishedDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="Enter published" onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">Add post</Button>
    </Form>
  );
};

export default AddPostForm;
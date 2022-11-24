import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-md-4" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control value={author} type="text" placeholder="Enter author" onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formPublishedDate">
        <Form.Label>Date</Form.Label>
        <Form.Control value={publishedDate} type="text" placeholder="Enter published" onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control value ={shortDescription} as="textarea" rows={3} placeholder="Leave a comment here" onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control value={content} as="textarea" rows={3} placeholder="Leave a comment here" onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  shortDescription: PropTypes.string,
  publishedDate: PropTypes.string,
  content: PropTypes.string
};

export default PostForm;
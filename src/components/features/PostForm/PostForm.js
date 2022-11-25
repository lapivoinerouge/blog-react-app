import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import { dateToStr } from '../../../utils/dateToStr';
import { useForm } from "react-hook-form";

/* styles */
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({action, actionText, ...props}) => {
  /* post data */
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || dateToStr(new Date()));
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  /* errors */
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = e => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setShortDescription('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3 col-md-4" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
           {...register("title", { required: true, minLength: 3 })}
           value={title}
           onChange={e => setTitle(e.target.value)}
           type="text" 
           placeholder="Enter title" />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3 characters)</small>}
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", { required: true, minLength: 3 })} 
          value={author} 
          type="text" 
          placeholder="Enter author" 
          onChange={e => setAuthor(e.target.value)} />
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3 characters)</small>}
      </Form.Group>
      <Form.Group className="mb-3 col-md-4" controlId="formPublishedDate">
        <Form.Label>Date</Form.Label>
        <DatePicker value={publishedDate} onChange={v => setPublishedDate(dateToStr(v))} />
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register("shortDescription", { required: true, minLength: 20 })}
          value ={shortDescription} 
          as="textarea" 
          rows={3} 
          placeholder="Leave a comment here" 
          onChange={e => setShortDescription(e.target.value)} />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20 characters)</small>}
      </Form.Group>
      <Form.Group className="mb-3 col-md-6" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
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
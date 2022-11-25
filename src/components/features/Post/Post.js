import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPostById } from '../../../redux/postsRedux';
import { useParams, Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import styles from './Post.module.scss';
import { useState } from 'react';

const Post = () => {
  const {postId} = useParams();
  const post = useSelector(state => getPostById(state, postId));
  
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const dispatch = useDispatch();

  const handleDeletePost = e => {
    e.preventDefault();
    dispatch(deletePost(postId));
    handleCloseModal();
  }

  if(!post) return <Navigate to="/" />
  return (
    <article>
      <div className='d-flex justify-content-between'>
        <h2>Article</h2>
        <div className={styles.buttonContainer}>
          <NavLink className={'btn btn-outline-primary'} to={'/post/edit/'+ postId}>Edit</NavLink>  
          <Button onClick={handleShowModal} variant='outline-danger'>Delete</Button>
        </div>
      </div>
      <p><b>Author: </b>{post.author}</p>
      <p><b>Published: </b>{post.publishedDate}</p>
      <p><b>Category: </b>{post.category}</p>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="danger" onClick={handleDeletePost}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </article>
  );
}

export default Post;
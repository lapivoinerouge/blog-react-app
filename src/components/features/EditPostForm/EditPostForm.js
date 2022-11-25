import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router';
import { useNavigate, Navigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById, updatePost } from '../../../redux/postsRedux';

const EditPostForm = () => {
  const {postId} = useParams();
  const post = useSelector(state => getPostById(state, postId));
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPost = post => {
    dispatch(updatePost({...post, id: postId }));
    navigate('/');
  };

  if(!post) return <Navigate to="/" />
  return (
    <PostForm 
    action={handleEditPost} 
    actionText='Edit post' 
    title={post.title}
    author={post.author}
    shortDescription={post.shortDescription}
    publishedDate={post.publishedDate}
    content={post.content}
    category={post.category}
    />
  )
};

export default EditPostForm;
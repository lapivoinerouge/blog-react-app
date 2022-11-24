import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = ( post ) => {
    dispatch(addPost({ ...post }));
    navigate('/');
  };

  return (
    <PostForm action={handleAddPost} actionText='Add post' />
  );
};

export default AddPostForm;
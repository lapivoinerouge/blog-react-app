import shortid from 'shortid';

//selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');

// action creators
export const deletePost = payload => ({ type: DELETE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case DELETE_POST:
      return statePart.filter(p => p.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;
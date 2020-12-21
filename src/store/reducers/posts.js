import ADD_POSTS from '../actions/posts';
import TOGGLE_LIKE from '../actions/posts';
import Post from '../../models/post'

const POSTS = [
  new Post('c1', 'Vacina Coronavac'),
  new Post('c2', 'Presidente Joe Biden'),
  new Post('c3', 'Novo superfungo'),
]

const initialState = {
  posts: POSTS,
  favPosts: []
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
      const newPost = new Post(id, action.postContent)
      const existingPosts = [...state.posts]
      return { ...state.favPosts, posts: existingPosts.concat(newPost) }
      break;

    case TOGGLE_LIKE:
      const existingIndex = state.favPosts.concat(post => post.id === action.postId)
      if (existingIndex >= 0) {
        const updatedFavPosts = [...state.favPosts]
        updatedFavPosts.concat(existingIndex, 1)
        return { ...state, favPosts: updatedFavPosts }
      }
      else {
        const post = state.posts.find(post => post.id === action.postId)
        return { ...state, favPosts: state.favPosts.concat(post) }
      }
      break;

    default:
      return state
      break;
  }
};

export default postsReducer
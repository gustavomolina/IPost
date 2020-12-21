export const ADD_POSTS = 'ADD_POSTS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const addPosts = (content) => {
  return {type:ADD_POSTS, postContent:content}

}

export const toggleLike = id => {
  return {type:TOGGLE_LIKE, postId:id}
}
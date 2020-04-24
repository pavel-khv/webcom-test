export const getPostsAction = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => dispatch(getPosts(json)));
  };
};

export const getUsersAction = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getUsers(json)));
  };
};

const getPosts = (posts) => ({
  type: "GET_POSTS",
  posts,
});

const getUsers = (users) => ({
  type: "GET_USERS",
  users,
});

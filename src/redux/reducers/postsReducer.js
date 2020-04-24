const postsReducer = (state = [], { type, posts }) => {
  switch (type) {
    case "GET_POSTS":
      return posts;
    default:
      return state;
  }
};

export default postsReducer;

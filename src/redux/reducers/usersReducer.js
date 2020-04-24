const usersReducer = (state = [], { type, users }) => {
  switch (type) {
    case "GET_USERS":
      return users;
    default:
      return state;
  }
};

export default usersReducer;

import { createStore } from "redux";

const userReducer = (state = { users: [] }, action) => {
  if (action.type === "usersList") {
    return {
      users: state.users,
    };
  }
  return state;
};

const store = createStore(userReducer);

export default store;

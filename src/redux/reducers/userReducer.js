import {
  SET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actionTypes/users";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return { ...state };
    case UPDATE_USER:
      return { ...state, users: action.payload };
    case DELETE_USER:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;

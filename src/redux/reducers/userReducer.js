import {
  SET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actionTypes/users";

const initialState = {
  users: [],
  loading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case ADD_USER:
      return { ...state, loading: false };
    case UPDATE_USER:
      return { ...state, users: action.payload, loading: false };
    case DELETE_USER:
      return { ...state , loading: false};
    default:
      return state;
  }
};

export default userReducer;

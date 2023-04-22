import {
  SET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actionTypes/users";
import Swal from "sweetalert2";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    await axios
      .get("https://react-project-783fb-default-rtdb.firebaseio.com/users.json")
      .then((data) => {
        const arr = [];
        for (let key in data.data) {
          arr.push({ ...data.data[key], id: key });
        }
        dispatch({ type: SET_USERS, payload: arr });
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: error.response.data.error,
            text: "Please Try Again !",
            icon: "error",
            showConfirmButton: false,
            timer: 2300,
          });
        }
      });
  } catch (error) {
    Swal.fire({
      title: error.message,
      text: "Please Try Again !",
      icon: "error",
      showConfirmButton: false,
      timer: 2300,
    });
  }
};

export const addUser = (data) => async (dispatch) => {
  try {
    await axios
      .post(
        "https://react-project-783fb-default-rtdb.firebaseio.com/users.json",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New User Added Successfully !",
            showConfirmButton: false,
            timer: 2300,
          });
          dispatch({ type: ADD_USER, payload: response });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: error.response.data.error,
            text: "Please Try Again !",
            icon: "error",
            showConfirmButton: false,
            timer: 2300,
          });
        }
      });
  } catch (error) {
    Swal.fire({
      title: error.message,
      text: "Please Try Again !",
      icon: "error",
      showConfirmButton: false,
      timer: 2300,
    });
  }
};

export const updateUser = (user, userId) => async (dispatch) => {
  try {
    await axios
      .put(
        `https://react-project-783fb-default-rtdb.firebaseio.com/users/${userId}.json`,
        user
      )
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Updated Successfully !",
            showConfirmButton: false,
            timer: 2300,
          });
          dispatch({ type: UPDATE_USER, payload: response });
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: error.response.data.error,
            text: "Please Try Again !",
            icon: "error",
            showConfirmButton: false,
            timer: 2300,
          });
        }
      });
  } catch (error) {
    Swal.fire({
      title: error.message,
      text: "Please Try Again !",
      icon: "error",
      showConfirmButton: false,
      timer: 2300,
    });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios
      .delete(
        `https://react-project-783fb-default-rtdb.firebaseio.com/users/${userId}.json`
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Deleted Successfully !",
            showConfirmButton: false,
            timer: 2300,
          });
          dispatch({ type: DELETE_USER });
          dispatch(getUsers());
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: error.response.data.error,
            text: "Please Try Again !",
            icon: "error",
            showConfirmButton: false,
            timer: 2300,
          });
        }
      });
  } catch (error) {
    Swal.fire({
      title: error,
      text: "Please Try Again !",
      icon: "error",
      showConfirmButton: false,
      timer: 4000,
    });
  }
};

const usersActions = { getUsers, addUser, updateUser, deleteUser };

export default usersActions;

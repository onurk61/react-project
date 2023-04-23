import { React, useEffect, useRef } from "react";
import Button from "../../../../UI/Button";
import classes from "./User.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  deleteUser,
} from "../../../../../redux/actions/usersActions";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const User = (props) => {
  const usersList = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const preventSendingRequestTwice = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (preventSendingRequestTwice.current) {
      preventSendingRequestTwice.current = false;
      dispatch(getUsers());
    }
  }, [dispatch]);

  useEffect(() => {}, []);

  const updateUserHandler = (userId) => {
    navigate(`/AddUser/${userId}`);
  };

  const deleteUserHandler = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "User will be deleted !!!",
      icon: "warning",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes",
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonColor: "#D30505",
      confirmButtonColor: "#0643e5",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId));
      }
    });
  };

  const usersData = usersList?.map((user) => {
    return (
      <li className={classes.user} key={user.id}>
        <span>
          <strong>First Name :</strong> {user.firstName}
        </span>
        <span>
          <strong>Last Name :</strong> {user.lastName}
        </span>
        <span>
          <strong>Address 1 :</strong> {user.address1}
        </span>
        <span>
          <strong>Address 2 :</strong> {user.address2}
        </span>
        <span>
          <strong>Town :</strong> {user.town}
        </span>
        <span>
          <strong>Region :</strong> {user.region}
        </span>
        <span>
          <strong>Country :</strong> {user.country}
        </span>
        <span>
          <strong>Post Code :</strong> {user.postCode}
        </span>
        <span>
          <strong>Contact Number :</strong> {user.contactNumber}
        </span>
        <div className={classes["actions-wrapper"]}>
          <Button
            className={classes["btn-edit"]}
            type="button"
            onClick={() => {
              updateUserHandler(user.id);
            }}
          >
            Edit
          </Button>
          <Button
            className={classes["btn-delete"]}
            type="button"
            onClick={() => {
              deleteUserHandler(user.id);
            }}
          >
            Delete
          </Button>
        </div>
      </li>
    );
  });

  return (
    <>
      {(usersData?.length === 0 && !loading) && (
        <div className={classes["no-data"]}>
          <span>No User Found...</span>
          <span>
            Please go to <NavLink to="/addUser">Add User</NavLink> Page and Add
            New User !!!
          </span>
        </div>
      )}
      {usersData?.length > 0 && usersData}
    </>
  );
};

export default User;
